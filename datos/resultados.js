const DATOS_ANALISIS = {
  "perfil": {
    "ocupacion": {
      "Estudiante": 35,
      "Trabajador": 17,
      "Ambos": 6,
      "Otro": 6
    },
    "edades": {
      "Menos de 18": 1,
      "18-25": 44,
      "26-35": 9,
      "36-50": 6,
      "Más de 50": 4
    },
    "frecuencia": {
      "Rara vez": 23,
      "Varias veces por semana": 18,
      "Todos los días": 16,
      "Nunca": 7
    }
  },
  "calificaciones": {
    "promedios": {
      "Puntualidad": 2.72,
      "Limpieza": 2.7,
      "Trato conductor": 3.48,
      "Comodidad": 2.84,
      "Seguridad": 3.28,
      "General": 2.95
    },
    "distribucion": {
      "1.0": 7,
      "2.0": 8,
      "3.0": 28,
      "4.0": 15,
      "5.0": 2
    }
  },
  "problemas": {
    "Retrasos": 46,
    "Mal estado de camiones": 35,
    "Falta de rutas": 31,
    "Falta de información": 14,
    "Inseguridad": 3,
    "Falta de aire acondicionado en tiempo de calor": 1,
    "Sin aire": 1
  },
  "patrones": {
    "horarios": {
      "6:00 a.m. – 8:00 a.m.": 23,
      "12:00 p.m. - 2:00 p.m.": 22,
      "8:00 a.m. – 10:00 a.m.": 15,
      "10:00 a.m. - 12:00 p.m.": 13,
      "2:00 p.m. - 4:00 p.m.": 13,
      "4:00 p.m. - 6:00 p.m.": 7,
      "6:00 p.m. - 8:00 p.m.": 5
    },
    "traslado": {
      "15 - 30 minutos": 27,
      "30 - 60 minutos": 20,
      "Menos de 15 minutos": 11,
      "Más de una hora": 2
    },
    "demanda": {
      "12:00 p.m. - 2:00 p.m.": 26,
      "6:00 a.m. – 8:00 a.m.": 18,
      "10:00 a.m. - 12:00 p.m.": 8,
      "8:00 a.m. – 10:00 a.m.": 3,
      "4:00 p.m. - 6:00 p.m.": 2,
      "6:00 p.m. - 8:00 p.m.": 2,
      "2:00 p.m. - 4:00 p.m.": 1
    },
    "proposito": {
      "Escuela": 28,
      "Otros": 11,
      "Trabajo": 11,
      "Compras": 10
    }
  },
  "rutas": {
    "Circuito 1 Allende - Laureles (Línea 1A o 1B)": 36,
    "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)": 13,
    "Circuito 4 Sonora - Tierra Blanca (Línea 2-6)": 13,
    "Circuito 6 Deportiva - Fovissste": 9,
    "Circuito 7 Sonora Express": 6,
    "Circuito 3 Pueblo Viejo - Misioneros": 5,
    "Circuito 5 Tetanchopo - Jacarandas": 2
  },
  "costo": {
    "percepcion": {
      "Adecuado": 49,
      "Muy barato": 7,
      "Caro": 3,
      "Muy caro": 1
    },
    "gasto": {
      "De $10 a $20": 31,
      "Menos de $10": 15,
      "Más de $20": 14
    }
  },
  "resumen": {
    "total_respuestas": 64,
    "edad_promedio": 27.0,
    "calificacion_promedio": 2.95,
    "problema_frecuente": "Retrasos",
    "ruta_mas_usada": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
    "hora_pico": "12:00 p.m. - 2:00 p.m."
  },
  "respuestas": [
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Varias veces por semana",
      "proposito": "Otros",
      "horario": "4:00 p.m. - 6:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "4:00 p.m. - 6:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 4,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 4,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "10:00 a.m. - 12:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 4,
      "limpieza": 3,
      "trato": 5,
      "comodidad": 5,
      "seguridad": 4,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Varias veces por semana",
      "proposito": "Otros",
      "horario": "10:00 a.m. - 12:00 p.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Falta de rutas",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 4,
      "limpieza": 4,
      "trato": 5,
      "comodidad": 5,
      "seguridad": 5,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 22,
      "frecuencia": "Rara vez",
      "proposito": "Trabajo",
      "horario": "10:00 a.m. - 12:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones, Falta de información",
      "costo": "Muy barato",
      "gasto": "Menos de $10",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 4,
      "seguridad": 5,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 26,
      "frecuencia": "Rara vez",
      "proposito": "Otros",
      "horario": "8:00 a.m. – 10:00 a.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 7 Sonora Express",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 1,
      "limpieza": 1,
      "trato": 3,
      "comodidad": 1,
      "seguridad": 3,
      "calificacion": 2
    },
    {
      "ocupacion": "Estudiante",
      "edad": 22,
      "frecuencia": "Rara vez",
      "proposito": "Escuela",
      "horario": "8:00 a.m. – 10:00 a.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Falta de información",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 1,
      "limpieza": 2,
      "trato": 4,
      "comodidad": 3,
      "seguridad": 2,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 25,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "10:00 a.m. - 12:00 p.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Falta de rutas, Mal estado de camiones, Falta de información",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 4,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 4,
      "seguridad": 4,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 22,
      "frecuencia": "Rara vez",
      "proposito": "Escuela",
      "horario": "12:00 p.m. - 2:00 p.m., 2:00 p.m. - 4:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 2,
      "limpieza": 2,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 2
    },
    {
      "ocupacion": "Estudiante",
      "edad": 23,
      "frecuencia": "Nunca",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 4 Sonora - Tierra Blanca (Línea 2-6), Circuito 7 Sonora Express",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones, Falta de información",
      "costo": "Muy barato",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 1,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 4,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 23,
      "frecuencia": "Rara vez",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 2,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 4,
      "calificacion": 3
    },
    {
      "ocupacion": "Ambos",
      "edad": 22,
      "frecuencia": "Nunca",
      "proposito": "Otros",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 2 Tierra y Libertad - Jiménez (Línea 7), Circuito 3 Pueblo Viejo - Misioneros, Circuito 4 Sonora - Tierra Blanca (Línea 2-6), Circuito 5 Tetanchopo - Jacarandas, Circuito 6 Deportiva - Fovissste, Circuito 7 Sonora Express",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones, Falta de información, Inseguridad",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 1,
      "limpieza": 4,
      "trato": 1,
      "comodidad": 1,
      "seguridad": 2,
      "calificacion": 1
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Rara vez",
      "proposito": "Escuela",
      "horario": "8:00 a.m. – 10:00 a.m., 2:00 p.m. - 4:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 6 Deportiva - Fovissste",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 2,
      "limpieza": 2,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 2,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 22,
      "frecuencia": "Nunca",
      "proposito": "Otros",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 4,
      "limpieza": 4,
      "trato": 4,
      "comodidad": 4,
      "seguridad": 5,
      "calificacion": 5
    },
    {
      "ocupacion": "Estudiante",
      "edad": 24,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "8:00 a.m. – 10:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 4,
      "limpieza": 1,
      "trato": 5,
      "comodidad": 2,
      "seguridad": 1,
      "calificacion": 1
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "12:00 p.m. - 2:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "2:00 p.m. - 4:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Falta de información",
      "costo": "Muy barato",
      "gasto": "Menos de $10",
      "puntualidad": 3,
      "limpieza": 4,
      "trato": 5,
      "comodidad": 3,
      "seguridad": 5,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Falta de rutas",
      "costo": "Muy barato",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 4,
      "trato": 2,
      "comodidad": 3,
      "seguridad": 5,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 22,
      "frecuencia": "Rara vez",
      "proposito": "Otros",
      "horario": "10:00 a.m. - 12:00 p.m., 2:00 p.m. - 4:00 p.m., 4:00 p.m. - 6:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 6 Deportiva - Fovissste",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 2,
      "limpieza": 2,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 1
    },
    {
      "ocupacion": "Ambos",
      "edad": 27,
      "frecuencia": "Rara vez",
      "proposito": "Escuela",
      "horario": "12:00 p.m. - 2:00 p.m., 2:00 p.m. - 4:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 7 Sonora Express",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 1,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 1,
      "seguridad": 1,
      "calificacion": 5
    },
    {
      "ocupacion": "Estudiante",
      "edad": 22,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 3 Pueblo Viejo - Misioneros, Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Mal estado de camiones, Falta de información",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 4,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 4,
      "seguridad": 5,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 25,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "8:00 a.m. – 10:00 a.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 2,
      "limpieza": 4,
      "trato": 5,
      "comodidad": 4,
      "seguridad": 4,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 15,
      "frecuencia": "Rara vez",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Falta de rutas",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 4,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 4
    },
    {
      "ocupacion": "Trabajador",
      "edad": 23,
      "frecuencia": "Todos los días",
      "proposito": "Trabajo",
      "horario": "10:00 a.m. - 12:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 1,
      "trato": 1,
      "comodidad": 1,
      "seguridad": 3,
      "calificacion": 2
    },
    {
      "ocupacion": "Trabajador",
      "edad": 30,
      "frecuencia": "Rara vez",
      "proposito": "Trabajo",
      "horario": "8:00 a.m. – 10:00 a.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Falta de rutas",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 2,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 33,
      "frecuencia": "Varias veces por semana",
      "proposito": "Compras",
      "horario": "10:00 a.m. - 12:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "8:00 a.m. – 10:00 a.m.",
      "rutas": "Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 4,
      "limpieza": 5,
      "trato": 5,
      "comodidad": 5,
      "seguridad": 4,
      "calificacion": 4
    },
    {
      "ocupacion": "Trabajador",
      "edad": 20,
      "frecuencia": "Rara vez",
      "proposito": "Compras",
      "horario": "8:00 a.m. – 10:00 a.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 6 Deportiva - Fovissste",
      "problemas": "Falta de rutas",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 5,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 35,
      "frecuencia": "Varias veces por semana",
      "proposito": "Trabajo",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "Más de una hora",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7), Circuito 6 Deportiva - Fovissste",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 4,
      "limpieza": 5,
      "trato": 5,
      "comodidad": 5,
      "seguridad": 5,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 19,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Muy barato",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 2,
      "trato": 4,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Ambos",
      "edad": 25,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "8:00 a.m. – 10:00 a.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones, Falta de información",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 1,
      "limpieza": 1,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 24,
      "frecuencia": "Rara vez",
      "proposito": "Compras",
      "horario": "10:00 a.m. - 12:00 p.m., 12:00 p.m. - 2:00 p.m., 2:00 p.m. - 4:00 p.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 2,
      "trato": 2,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 35,
      "frecuencia": "Todos los días",
      "proposito": "Trabajo",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m., 6:00 p.m. - 8:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7), Circuito 4 Sonora - Tierra Blanca (Línea 2-6), Circuito 6 Deportiva - Fovissste",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones, Falta de información",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 2,
      "limpieza": 3,
      "trato": 5,
      "comodidad": 1,
      "seguridad": 1,
      "calificacion": 2
    },
    {
      "ocupacion": "Otro",
      "edad": 43,
      "frecuencia": "Rara vez",
      "proposito": "Compras",
      "horario": "10:00 a.m. - 12:00 p.m., 4:00 p.m. - 6:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Retrasos",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 2,
      "seguridad": 4,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 59,
      "frecuencia": "Varias veces por semana",
      "proposito": "Compras",
      "horario": "10:00 a.m. - 12:00 p.m., 4:00 p.m. - 6:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 3 Pueblo Viejo - Misioneros, Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 2,
      "limpieza": 4,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 35,
      "frecuencia": "Todos los días",
      "proposito": "Trabajo",
      "horario": "6:00 a.m. – 8:00 a.m., 4:00 p.m. - 6:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 4 Sonora - Tierra Blanca (Línea 2-6), Circuito 7 Sonora Express",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 4,
      "seguridad": 4,
      "calificacion": 2
    },
    {
      "ocupacion": "Trabajador",
      "edad": 40,
      "frecuencia": "Rara vez",
      "proposito": "Trabajo",
      "horario": "2:00 p.m. - 4:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Caro",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 4
    },
    {
      "ocupacion": "Trabajador",
      "edad": 55,
      "frecuencia": "Varias veces por semana",
      "proposito": "Trabajo",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 3 Pueblo Viejo - Misioneros, Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 2,
      "trato": 4,
      "comodidad": 4,
      "seguridad": 4,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 26,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 2,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 2,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 23,
      "frecuencia": "Rara vez",
      "proposito": "Otros",
      "horario": "12:00 p.m. - 2:00 p.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Retrasos",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 4
    },
    {
      "ocupacion": "Otro",
      "edad": 23,
      "frecuencia": "Rara vez",
      "proposito": "Compras",
      "horario": "2:00 p.m. - 4:00 p.m., 4:00 p.m. - 6:00 p.m., 6:00 p.m. - 8:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 22,
      "frecuencia": "Nunca",
      "proposito": "",
      "horario": "",
      "traslado": "",
      "demanda": "",
      "rutas": "",
      "problemas": "",
      "costo": "",
      "gasto": "",
      "puntualidad": 3,
      "limpieza": 1,
      "trato": 5,
      "comodidad": 1,
      "seguridad": 3,
      "calificacion": null
    },
    {
      "ocupacion": "Trabajador",
      "edad": 23,
      "frecuencia": "Todos los días",
      "proposito": "Trabajo",
      "horario": "6:00 a.m. – 8:00 a.m., 6:00 p.m. - 8:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 p.m. - 8:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 1,
      "limpieza": 2,
      "trato": 4,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 1
    },
    {
      "ocupacion": "Estudiante",
      "edad": 25,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Retrasos, Falta de aire acondicionado en tiempo de calor",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 2,
      "trato": 4,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 4
    },
    {
      "ocupacion": "Otro",
      "edad": 60,
      "frecuencia": "Varias veces por semana",
      "proposito": "Compras",
      "horario": "8:00 a.m. – 10:00 a.m., 2:00 p.m. - 4:00 p.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 1,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 39,
      "frecuencia": "Varias veces por semana",
      "proposito": "Trabajo",
      "horario": "8:00 a.m. – 10:00 a.m., 6:00 p.m. - 8:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "8:00 a.m. – 10:00 a.m.",
      "rutas": "Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Muy barato",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "8:00 a.m. – 10:00 a.m., 10:00 a.m. - 12:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Falta de información",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 4,
      "trato": 4,
      "comodidad": 4,
      "seguridad": 4,
      "calificacion": 4
    },
    {
      "ocupacion": "Otro",
      "edad": 48,
      "frecuencia": "Todos los días",
      "proposito": "Otros",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "10:00 a.m. - 12:00 p.m.",
      "rutas": "Circuito 3 Pueblo Viejo - Misioneros, Circuito 5 Tetanchopo - Jacarandas",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 2,
      "limpieza": 1,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 1
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Rara vez",
      "proposito": "Escuela",
      "horario": "12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos",
      "costo": "Muy barato",
      "gasto": "Menos de $10",
      "puntualidad": 4,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 3,
      "seguridad": 4,
      "calificacion": 4
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Rara vez",
      "proposito": "Otros",
      "horario": "2:00 p.m. - 4:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "8:00 a.m. – 10:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Falta de rutas, Falta de información",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 4,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 2,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Rara vez",
      "proposito": "Compras",
      "horario": "10:00 a.m. - 12:00 p.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 6 Deportiva - Fovissste",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 2,
      "limpieza": 3,
      "trato": 5,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": 2
    },
    {
      "ocupacion": "Otro",
      "edad": 20,
      "frecuencia": "Rara vez",
      "proposito": "Otros",
      "horario": "2:00 p.m. - 4:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 6 Deportiva - Fovissste",
      "problemas": "Retrasos",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 5,
      "comodidad": 4,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 8:00 a.m. – 10:00 a.m.",
      "traslado": "Menos de 15 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 2,
      "seguridad": 4,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 55,
      "frecuencia": "Nunca",
      "proposito": "",
      "horario": "",
      "traslado": "",
      "demanda": "",
      "rutas": "",
      "problemas": "",
      "costo": "",
      "gasto": "",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 3,
      "calificacion": null
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m., 2:00 p.m. - 4:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 2 Tierra y Libertad - Jiménez (Línea 7), Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Ambos",
      "edad": 20,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 12:00 p.m. - 2:00 p.m., 2:00 p.m. - 4:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 2 Tierra y Libertad - Jiménez (Línea 7)",
      "problemas": "Retrasos, Falta de rutas",
      "costo": "Caro",
      "gasto": "Más de $20",
      "puntualidad": 1,
      "limpieza": 2,
      "trato": 1,
      "comodidad": 4,
      "seguridad": 3,
      "calificacion": 2
    },
    {
      "ocupacion": "Trabajador",
      "edad": 38,
      "frecuencia": "Nunca",
      "proposito": "",
      "horario": "",
      "traslado": "",
      "demanda": "",
      "rutas": "",
      "problemas": "",
      "costo": "",
      "gasto": "",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 1,
      "seguridad": 5,
      "calificacion": null
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 3,
      "seguridad": 4,
      "calificacion": 3
    },
    {
      "ocupacion": "Trabajador",
      "edad": 33,
      "frecuencia": "Nunca",
      "proposito": "",
      "horario": "",
      "traslado": "",
      "demanda": "",
      "rutas": "",
      "problemas": "",
      "costo": "",
      "gasto": "",
      "puntualidad": 1,
      "limpieza": 1,
      "trato": 1,
      "comodidad": 1,
      "seguridad": 1,
      "calificacion": null
    },
    {
      "ocupacion": "Ambos",
      "edad": 22,
      "frecuencia": "Varias veces por semana",
      "proposito": "Compras",
      "horario": "8:00 a.m. – 10:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones, Inseguridad, Sin aire",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 2,
      "limpieza": 3,
      "trato": 2,
      "comodidad": 1,
      "seguridad": 1,
      "calificacion": 1
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Todos los días",
      "proposito": "Escuela",
      "horario": "12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "4:00 p.m. - 6:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 2,
      "trato": 4,
      "comodidad": 3,
      "seguridad": 5,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 20,
      "frecuencia": "Rara vez",
      "proposito": "Otros",
      "horario": "8:00 a.m. – 10:00 a.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 4 Sonora - Tierra Blanca (Línea 2-6)",
      "problemas": "Retrasos, Falta de información",
      "costo": "Adecuado",
      "gasto": "Menos de $10",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 4,
      "seguridad": 3,
      "calificacion": 4
    },
    {
      "ocupacion": "Otro",
      "edad": 23,
      "frecuencia": "Rara vez",
      "proposito": "Compras",
      "horario": "2:00 p.m. - 4:00 p.m., 4:00 p.m. - 6:00 p.m.",
      "traslado": "15 - 30 minutos",
      "demanda": "6:00 a.m. – 8:00 a.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 3,
      "limpieza": 3,
      "trato": 4,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 3
    },
    {
      "ocupacion": "Ambos",
      "edad": 23,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 10:00 a.m. - 12:00 p.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B), Circuito 7 Sonora Express",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones",
      "costo": "Caro",
      "gasto": "Más de $20",
      "puntualidad": 3,
      "limpieza": 4,
      "trato": 3,
      "comodidad": 4,
      "seguridad": 5,
      "calificacion": 3
    },
    {
      "ocupacion": "Estudiante",
      "edad": 21,
      "frecuencia": "Varias veces por semana",
      "proposito": "Escuela",
      "horario": "6:00 a.m. – 8:00 a.m., 8:00 a.m. – 10:00 a.m., 12:00 p.m. - 2:00 p.m.",
      "traslado": "30 - 60 minutos",
      "demanda": "12:00 p.m. - 2:00 p.m.",
      "rutas": "Circuito 1 Allende - Laureles (Línea 1A o 1B)",
      "problemas": "Retrasos, Mal estado de camiones, Falta de información",
      "costo": "Adecuado",
      "gasto": "De $10 a $20",
      "puntualidad": 2,
      "limpieza": 2,
      "trato": 3,
      "comodidad": 2,
      "seguridad": 3,
      "calificacion": 2
    },
    {
      "ocupacion": "Trabajador",
      "edad": 37,
      "frecuencia": "Rara vez",
      "proposito": "Trabajo",
      "horario": "6:00 p.m. - 8:00 p.m.",
      "traslado": "Más de una hora",
      "demanda": "6:00 p.m. - 8:00 p.m.",
      "rutas": "Circuito 6 Deportiva - Fovissste",
      "problemas": "Retrasos, Falta de rutas, Mal estado de camiones, Falta de información, Inseguridad",
      "costo": "Muy caro",
      "gasto": "Menos de $10",
      "puntualidad": 1,
      "limpieza": 3,
      "trato": 3,
      "comodidad": 3,
      "seguridad": 2,
      "calificacion": 1
    }
  ],
  "comentarios": [
    {
      "texto": "es necesario pero suele tener alguna fallas",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "más camiones, mejor limpieza, comodidad y puntualidad",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "A pesar de sus fallas, realmente es muy útil.",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Limpiar un poco los camiones y arreglar las puertas.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Ta bien",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Es bueno",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Puntualidad o facilidad de visualización de rutas",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Que es muy tardado, lento, incómodo, sucio y a veces saturado.",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Mantener en mejor estado las unidades y mejorar los horarios y puntualidad del servicio.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Que no tiene horarios fijos y aveces tardan demasiado en pasar, aveces he esperado como 1 hora en esperar un camión.",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Que tengan horarios y todos sepamos una hora aproximada a la que pasarán.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Esta bien",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Poner más camiones ya que los tiempos de espera son largos",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Considero que cumple su función de llevarte de punto A a punto B pero con algunas deficiencias.",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Que se cumplan con los horarios de llegada y salida, tener mas limpieza.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Prendan los aires",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Prendan los aires",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Básico",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Prendan los Aires y limpieza de unidades",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Nada",
      "tipo": "Opinión",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Pónganles aire",
      "tipo": "Sugerencia",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Está curioso aunque faltan cosas que mejorar, aunque aún así son un gran apoyo",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Que mejoren aires y las rutas sean mejores, así como la limpieza de los camiones",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Es muy bueno",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Mejor calidad",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "muy malo",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Un tanto moderado, los camiones si suelen pasar pero con 20 a mas de 40 minutos de retraso",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Que sean un poco puntual",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Está bien",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Más rutas",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Muy malo",
      "tipo": "Opinión",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Meterle más dinero Alós camiones y más ganas",
      "tipo": "Sugerencia",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Para cumplir con su función de transportarte, está bien; pero los horarios pueden ser problema para aquellos que lo usan.",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Una mejor visualización de las rutas y más atención a las problemáticas actuales del transporte público.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Esta bien solo que le falta puntualidad y aseo.",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Puntual ofrecer una app para ver los horarios puntuales en el tiempo que Ban y vienen por cada parada de camiones.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Está bien para la gente que lo necesita",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "tener aire para este calor",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Debe de mejorar",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Cambiar a unidades más eficientes y poner un sindicato de trabajadores de transporte para así mejorar la calidad del servicio y dignificar la importancia de estos transportes a los ciudadanos",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Bien",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Aire acondicionado",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Asen falta más camiones",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Falta que para los estudiantes este gratuito",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Escaso pero eficiente",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Más rutas",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Que deben de andar mas camiines y deja la rutas de antes",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Que pongan la rutas de antes",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Apesta, huele feo",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Más limpieza",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Inadecuado falta de rutas y unidades",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Meter más unidades de transporte",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "A algunos les falta aire acondicionado,  y ya en esta época si es necesario, los asientos no son los adecuados, pues se anda resbalando cuando se sientan.",
      "tipo": "Opinión",
      "ocupacion": "Otro"
    },
    {
      "texto": "Cambiar los asientos y poner aire acondicionado",
      "tipo": "Sugerencia",
      "ocupacion": "Otro"
    },
    {
      "texto": "Que haya mas camiones",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Faltan más unidades de transporte",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Más unidades",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "está bien",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "más inversión en las unidades",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Deficiente",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Más camiones y rutas",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Les falta una renovacion",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Mejores camiones y mas camiones",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Para mi zona no pasa ningún camión",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Abrir más rutas, antes existía la Ruta 3",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Malisimo",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Camiones todos los días",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Le hacen falta mejoras en la puntualidad y condiciones.",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Darle el servicio correspondiente a los aires acondicionados y verificar su buen funcionamiento.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Es bueno pero hay pocos camiones",
      "tipo": "Opinión",
      "ocupacion": "Otro"
    },
    {
      "texto": "Meter más camiones",
      "tipo": "Sugerencia",
      "ocupacion": "Otro"
    },
    {
      "texto": "Malon",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Q pacen más seguido",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Adecuado para su precio",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Enviar info sobre los horarios que hay y un mapa de las estaciones, incorporar el aire acondicionado a más unidades.",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Ineficiente",
      "tipo": "Opinión",
      "ocupacion": "Otro"
    },
    {
      "texto": "Moderado",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Nuevas rutas y hacer chequeo a camioneros para verificar si son aptos",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Está bien, pero si tiene sus decadencias",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Cambiar los camiones ya que algunos son pequeños y entra mucha gente",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Está un bien pero le falta sierras cosas por mejorar",
      "tipo": "Opinión",
      "ocupacion": "Otro"
    },
    {
      "texto": "Nada",
      "tipo": "Sugerencia",
      "ocupacion": "Otro"
    },
    {
      "texto": "Pues esiy útil para los estudiantes que tienen que ir a las preparatorias y universidades",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Creo que debería ser gratuito el camión como antes que tenías 2 pasajes gratis en la tarjeta que había antes",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Tarda mucho",
      "tipo": "Opinión",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Más camiones",
      "tipo": "Sugerencia",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Puede mejorar",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Se necesitan unidades nuevas y refrigeradas, no importa que suba el precio",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Tapen los baches",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Camiones dañados y sin aire",
      "tipo": "Opinión",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Simplemente con que tuvieran aire sería una mejor experiencia",
      "tipo": "Sugerencia",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Ocupan mejoras",
      "tipo": "Opinión",
      "ocupacion": "Otro"
    },
    {
      "texto": "Mejores rutas",
      "tipo": "Sugerencia",
      "ocupacion": "Otro"
    },
    {
      "texto": "Faltan rutas, por qué el tiempo de espera es demasiado largos",
      "tipo": "Opinión",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Implementar más camiones, aunque sea de los más pequeños",
      "tipo": "Sugerencia",
      "ocupacion": "Ambos"
    },
    {
      "texto": "Está bien, pero si hay retrasos",
      "tipo": "Opinión",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Que nos compartan el horario de los camiones",
      "tipo": "Sugerencia",
      "ocupacion": "Estudiante"
    },
    {
      "texto": "Pésimo, deja de pasar muy temprano",
      "tipo": "Opinión",
      "ocupacion": "Trabajador"
    },
    {
      "texto": "Ampliación de horario y rutas",
      "tipo": "Sugerencia",
      "ocupacion": "Trabajador"
    }
  ]
};