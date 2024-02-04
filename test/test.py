import os
import shutil

def crear_archivos_desde_txt(archivo_txt, carpeta_destino, archivo_existente):
    # Verificar si la carpeta de destino existe, si no, crearla
    if not os.path.exists(carpeta_destino):
        os.makedirs(carpeta_destino)

    # Leer nombres de archivos desde el archivo de texto
    with open(archivo_txt, 'r') as file:
        nombres_archivos = file.read().splitlines()

    # Crear archivos en la carpeta de destino
    for nombre_archivo in nombres_archivos:
        nombre_archivo_html = f'{nombre_archivo}.html'
        ruta_archivo_destino = os.path.join(carpeta_destino, nombre_archivo_html)

        # Copiar contenido del archivo existente
        shutil.copy(archivo_existente, ruta_archivo_destino)

        print(f'Se ha creado el archivo {nombre_archivo_html} en la carpeta {carpeta_destino}.')

# Llamar a la función con el nombre del archivo, la carpeta de destino y el archivo existente
crear_archivos_desde_txt('./nombres.txt', './', './test.html')
