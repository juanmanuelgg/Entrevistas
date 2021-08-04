```bash
# Create user and put the passwod: passwoddatabase
createuser userdatabase -P
createdb testdb --owner userdatabase
```

```sql
CREATE TABLE IF NOT EXISTS public.todo_list
(
    id bigint NOT NULL,
    title character varying NOT NULL,
    sumary character varying NOT NULL,
    deleted boolean NOT NULL,
    archived boolean NOT NULL,
    PRIMARY KEY (id)
);
ALTER TABLE public.todo_list OWNER to userdatabase;

CREATE TABLE IF NOT EXISTS public.todo_item
(
    id bigint NOT NULL,
    fk_todo_list bigint NOT NULL,
    task character varying NOT NULL,
    completed boolean NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT `todo_list_fk` FOREIGN KEY (`fk_todo_list`) REFERENCES `todo_list` (`id`)
);
ALTER TABLE public.todo_item OWNER to userdatabase;
```

```bash
psql -h 127.0.0.1 -p 5432 -U userdatabase database < insert-data.sql

cat insert-data.sql | heroku pg:psql --app app_name
```