docker run -d --rm --name pg95 postgres:9.5
# docker exec -it pg95 bash
# psql -U postgres
# show timezone; // UCT
docker cp pg95:/usr/share/postgresql/postgresql.conf.sample .
docker stop pg95
