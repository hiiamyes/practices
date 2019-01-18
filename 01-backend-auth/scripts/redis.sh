docker pull redis
docker run \
-d \
--name redis \
-p 6379:6379 \
--rm \
-v ~/docker/volumes/redis:/data \
redis:latest \
redis-server --appendonly yes # https://hub.docker.com/_/redis, https://redis.io/topics/persistence#append-only-file
