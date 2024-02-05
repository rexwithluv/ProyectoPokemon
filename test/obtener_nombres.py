import os

def escribir_nombres_archivos(ruta_directorio, nombre_archivo_salida):
    try:
        # Obtener la lista de nombres de archivos en el directorio
        nombres_archivos = os.listdir(ruta_directorio)

        # Crear o abrir el archivo de salida en modo escritura
        with open(nombre_archivo_salida, 'w') as archivo_salida:
            # Escribir cada nombre de archivo (sin extensión) en una línea
            for nombre_archivo in nombres_archivos:
                nombre_sin_extension, _ = os.path.splitext(nombre_archivo)
                archivo_salida.write(f"\"{nombre_sin_extension}\"" + ',')

        print(f'Se han escrito los nombres de los archivos (sin extensión) en "{nombre_archivo_salida}".')

    except Exception as e:
        print(f'Ocurrió un error: {e}')

# Ruta del directorio que quieres explorar
directorio_a_explorar = '../pokemon'

# Nombre del archivo de salida
archivo_salida = 'nombres.txt'

# Llamar a la función con la ruta del directorio y el nombre del archivo de salida
escribir_nombres_archivos(directorio_a_explorar, archivo_salida)
