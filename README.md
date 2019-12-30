# Preacher

## API

- Run a mysql docker container attached to the new network.
    ```
    docker run -d --name database \
        -p 3307:3306 \
        -e MYSQL_ROOT_PASSWORD=asd.123 \
        -e MYSQL_DATABASE=preacher \
        -e MYSQL_USER=preacher \
        -e MYSQL_PASSWORD=asd.123 \
        mysql:8.0.18
    ```
- Run preacher api.
    ```
    docker run -ti --name preacher-api \
        --rm \
        preacher:latest
    ```