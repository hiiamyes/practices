docker run \
-d \
--name postgres \
-p 5433:5432 \
--rm \
-v ~/postgresql/practice-09/data:/var/lib/postgresql/data \
-e POSTGRES_USER=yes \
-e POSTGRES_PASSWORD=yes \
-e POSTGRES_DB=practice-09 \
postgres:latest \

# psql -h localhost -U yes -d practice-09 -p 5433
# \l