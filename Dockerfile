FROM nginx:1.29.7-alpine

COPY . /usr/share/nginx/html:ro

LABEL org.opencontainers.image.source="https://github.com/rexwithluv/ProyectoPokemon"


CMD ["nginx", "-g", "daemon off;"]