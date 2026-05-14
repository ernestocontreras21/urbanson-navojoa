import pandas as pd
import json
import os

#  CARGAR DATOS (archivo .csv)
df = pd.read_csv('datos/datos_encuesta.csv')
df.columns = df.columns.str.strip()

def contar_multivalor(serie):
    todos = []
    for fila in serie.dropna():
        for val in fila.split(','):
            todos.append(val.strip())
    return pd.Series(todos).value_counts().to_dict()

resultados = {}

#  1. PERFIL DE USUARIOS

# 1A. Ocupación
ocupacion = df['¿A qué te dedicas?'].str.strip().value_counts().to_dict()

# 1B. Rango de edades
bins   = [0, 17, 25, 35, 50, 100]
labels = ['Menos de 18', '18-25', '26-35', '36-50', 'Más de 50']
df['Rango edad'] = pd.cut(df['¿Qué edad tienes?'], bins=bins, labels=labels)
edades = df['Rango edad'].value_counts().sort_index().to_dict()
edades = {str(k): int(v) for k, v in edades.items()}

# 1C. Frecuencia de uso
frecuencia = df['¿Con qué frecuencia utilizas el transporte público?'].str.strip().value_counts().to_dict()

resultados['perfil'] = {
    'ocupacion':  ocupacion,
    'edades':     edades,
    'frecuencia': frecuencia
}

#  2. CALIFICACIONES DEL SERVICIO

cols_cal = {
    'Puntualidad':     'Puntualidad',
    'Limpieza':        'Limpieza',
    'Trato conductor': 'Trato del conductor',
    'Comodidad':       'Comodidad',
    'Seguridad':       'Seguridad',
    'General':         '¿Cómo calificarías el servicio de transporte público?'
}
promedios = {k: round(float(df[v].mean()), 2) for k, v in cols_cal.items()}

# Distribución calificación general (cuántas personas dieron 1, 2, 3, 4, 5)
dist_general = df['¿Cómo calificarías el servicio de transporte público?'] \
    .value_counts().sort_index().to_dict()
dist_general = {str(k): int(v) for k, v in dist_general.items()}

resultados['calificaciones'] = {
    'promedios':    promedios,
    'distribucion': dist_general
}

#  3. PROBLEMAS REPORTADOS

problemas = contar_multivalor(df['¿Qué problemas has notado?'])
resultados['problemas'] = problemas

#  4. PATRONES DE USO

horarios  = contar_multivalor(df['¿En qué horario lo usas más?'])
traslado  = df['¿Cuánto tiempo tardas en llegar a tu destino?'].str.strip().value_counts().to_dict()
demanda   = contar_multivalor(df['¿A qué hora consideras que hay más demanda en el transporte público?'])
proposito = contar_multivalor(df['¿Para qué lo utilizas principalmente?'])

resultados['patrones'] = {
    'horarios':  horarios,
    'traslado':  traslado,
    'demanda':   demanda,
    'proposito': proposito
}

#  5. RUTAS MÁS USADAS

rutas = contar_multivalor(df['¿Cuál es la ruta que más sueles utilizar?'])
resultados['rutas'] = rutas

#  6. PERCEPCIÓN DEL COSTO

percepcion = df['¿Consideras que el costo del transporte es:'].str.strip().value_counts().to_dict()
gasto      = df['¿Cuánto gastas aproximadamente al día en el transporte público?'].str.strip().value_counts().to_dict()

resultados['costo'] = {
    'percepcion': percepcion,
    'gasto':      gasto
}

#  7. RESUMEN GENERAL

resultados['resumen'] = {
    'total_respuestas':    int(len(df)),
    'edad_promedio':       round(float(df['¿Qué edad tienes?'].mean()), 1),
    'calificacion_promedio': round(float(df['¿Cómo calificarías el servicio de transporte público?'].mean()), 2),
    'problema_frecuente':  list(problemas.keys())[0]  if problemas else 'N/A',
    'ruta_mas_usada':      list(rutas.keys())[0]      if rutas     else 'N/A',
    'hora_pico':           list(demanda.keys())[0]    if demanda   else 'N/A',
}

# 8. RESPUESTAS INDIVIDUALES (para filtrado dinámico)
respuestas_individuales = []
for _, fila in df.iterrows():
    def val(col):
        v = fila.get(col, '')
        return '' if pd.isna(v) else str(v).strip()
    def num(col):
        v = fila.get(col)
        return int(v) if pd.notna(v) else None

    respuestas_individuales.append({
        'ocupacion':    val('¿A qué te dedicas?'),
        'edad':         num('¿Qué edad tienes?'),
        'frecuencia':   val('¿Con qué frecuencia utilizas el transporte público?'),
        'proposito':    val('¿Para qué lo utilizas principalmente?'),
        'horario':      val('¿En qué horario lo usas más?'),
        'traslado':     val('¿Cuánto tiempo tardas en llegar a tu destino?'),
        'demanda':      val('¿A qué hora consideras que hay más demanda en el transporte público?'),
        'rutas':        val('¿Cuál es la ruta que más sueles utilizar?'),
        'problemas':    val('¿Qué problemas has notado?'),
        'costo':        val('¿Consideras que el costo del transporte es:'),
        'gasto':        val('¿Cuánto gastas aproximadamente al día en el transporte público?'),
        'puntualidad':  num('Puntualidad'),
        'limpieza':     num('Limpieza'),
        'trato':        num('Trato del conductor'),
        'comodidad':    num('Comodidad'),
        'seguridad':    num('Seguridad'),
        'calificacion': num('¿Cómo calificarías el servicio de transporte público?'),
    })

resultados['respuestas'] = respuestas_individuales

# Exportar comentarios de la encuesta
col_opinion = '¿Qué opinas del transporte público en Navojoa?'
col_sugerencia = '¿Alguna sugerencia para mejorarlo?'

comentarios = []
for _, fila in df.iterrows():
    opinion    = str(fila.get(col_opinion, '')).strip()
    sugerencia = str(fila.get(col_sugerencia, '')).strip()
    ocupacion  = str(fila.get('¿A qué te dedicas?', '')).strip()
    if opinion and opinion != 'nan':
        comentarios.append({
            'texto':    opinion,
            'tipo':     'Opinión',
            'ocupacion': ocupacion
        })
    if sugerencia and sugerencia != 'nan':
        comentarios.append({
            'texto':    sugerencia,
            'tipo':     'Sugerencia',
            'ocupacion': ocupacion
        })

resultados['comentarios'] = comentarios

#  GUARDAR JSON

with open('datos/resultados.js', 'w', encoding='utf-8') as f:
    f.write('const DATOS_ANALISIS = ')
    json.dump(resultados, f, ensure_ascii=False, indent=2)
    f.write(';')

print("datos/resultados.js generado correctamente")
