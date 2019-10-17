```sh
./scripts/start.sh
docker exec -it postgres bash
psql -U yes -d practice-18
```

```sql
CREATE TABLE items (
    id serial PRIMARY KEY,
    name text
);

insert into items (name) values ('backpack');

listen test;
notify test, 'items,1';
```
