import os


def reemplazar_contenido(plantilla, carpeta_destino):
    # Leer contenido de la plantilla
    with open(plantilla, "r") as file_plantilla:
        contenido_plantilla = file_plantilla.read()

    # Iterar sobre los archivos en la carpeta destino
    for nombre_archivo in os.listdir(carpeta_destino):
        ruta_archivo = os.path.join(carpeta_destino, nombre_archivo)

        # Verificar si es un archivo y no un directorio
        if os.path.isfile(ruta_archivo):
            # Escribir el contenido de la plantilla en el archivo destino
            with open(ruta_archivo, "w") as file_destino:
                file_destino.write(contenido_plantilla)
                print(f"Contenido de {nombre_archivo} actualizado.")


# Rutas a la plantilla y carpeta destino
plantilla = "test/test.html"
carpeta_destino = "pokemon/"

# Llamar a la función para reemplazar contenido
reemplazar_contenido(plantilla, carpeta_destino)
