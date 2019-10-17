docker run \
    -d \
    --name postgres \
    --rm \
    -e POSTGRES_USER=yes \
    -e POSTGRES_PASSWORD=yes \
    -e POSTGRES_DB=practice-18 \
    postgres:latest
