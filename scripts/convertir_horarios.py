import pandas as pd
import json
import os

# ═══════════════════════════════════════════════════════════
#  CONFIGURACIÓN — agrega aquí cada camión que quieras
#  convertir. El id_ruta debe coincidir con el id en RUTAS
# ═══════════════════════════════════════════════════════════
CAMIONES = [
    {
        'archivo':  'datos/C1AUnidad1.csv',
        'id_ruta':  1,
        'unidad':   'Unidad 1 - C1(A)',
        'color':    '#7a1028'
    },
    {
        'archivo':  'datos/C1AUnidad2.csv',
        'id_ruta':  1,
        'unidad':   'Unidad 2 - C1(A)',
        'color':    '#7a1028'
    },
    {
        'archivo':  'datos/C1AUnidad3.csv',
        'id_ruta':  1,
        'unidad':   'Unidad 3 - C1(A)',
        'color':    '#7a1028'
    },
    {
        'archivo':  'datos/C1AUnidad4.csv',
        'id_ruta':  1,
        'unidad':   'Unidad 4 - C1(A)',
        'color':    '#7a1028'
    },
    {
        'archivo':  'datos/C4Unidad1.csv',
        'id_ruta':  6,
        'unidad':   'Unidad 1 - C4(2-6)',
        'color':    '#2b771c'
    },
    {
        'archivo':  'datos/C4Unidad2.csv',
        'id_ruta':  6,
        'unidad':   'Unidad 2 - C4(2-6)',
        'color':    '#2b771c'
    },
    {
        'archivo':  'datos/C7Unidad1.csv',
        'id_ruta':  11,
        'unidad':   'Unidad 1 - C7(SE)',
        'color':    '#1619da'
    },
]

# ═══════════════════════════════════════════════════════════
#  CONVERSIÓN
# ═══════════════════════════════════════════════════════════
resultado = []

for camion in CAMIONES:
    df = pd.read_csv(camion['archivo'])

    # Las columnas de vuelta son todas excepto paradaId y nombre
    columnas_vuelta = [c for c in df.columns if c != 'paradaId']

    vueltas = []
    for i, col in enumerate(columnas_vuelta):
        paradas_dict = {}
        for _, fila in df.iterrows():
            hora = str(fila[col]).strip()
            if hora and hora != 'nan' and hora != '-':
                paradas_dict[int(fila['paradaId'])] = hora
        vueltas.append({
            'vuelta': i + 1,
            'paradas': paradas_dict
        })

    resultado.append({
        'id_ruta': camion['id_ruta'],
        'unidad':  camion['unidad'],
        'color':   camion['color'],
        'vueltas': vueltas
    })

# ═══════════════════════════════════════════════════════════
#  GUARDAR COMO JS (para que horarios.html lo cargue)
# ═══════════════════════════════════════════════════════════
os.makedirs('datos', exist_ok=True)

with open('datos/horarios_reales.js', 'w', encoding='utf-8') as f:
    f.write('const HORARIOS_REALES = ')
    json.dump(resultado, f, ensure_ascii=False, indent=2)
    f.write(';')

print('✅ datos/horarios_reales.js generado correctamente')
print(f'   Camiones procesados: {len(resultado)}')
for cam in resultado:
    total = sum(len(v["paradas"]) for v in cam["vueltas"])
    print(f'   {cam["unidad"]}: {len(cam["vueltas"])} vuelta(s), {total} horarios')
