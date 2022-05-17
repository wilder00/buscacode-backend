## tema de docker

Docker fue utilizado para cargar una base de datos en local con una imagen.

### correr docker

```
docker compose up
docker compose --env-file [dir_name] up
#correr un servicio especifico
docker compose up -d pgadmin
```

### Entrar dentro del contenedor:

```
docker-compose exec postgres bash
```

dentro del contenedor podemos conectarnos a postgress de la siguiente manera:

```
psql -h localhost -d reppi -U admin
```

## Datos

- la carpeta lib se encarga de las conexiones con terceros
