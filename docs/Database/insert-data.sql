-- Insert data into todo_list
INSERT INTO public.todo_list (id, title, sumary, deleted, archived) VALUES (1, 'Web App', 'Lista de tareas para crear una Web App', false, false)
INSERT INTO public.todo_list (id, title, sumary, deleted, archived) VALUES (2, 'Chequeo diario', 'Lista de chequeo que repito siempre', false, false)
INSERT INTO public.todo_list (id, title, sumary, deleted, archived) VALUES (3, 'Titulo', 'Resumen', false, false)
INSERT INTO public.todo_list (id, title, sumary, deleted, archived) VALUES (4, '', '', false, false)
INSERT INTO public.todo_list (id, title, sumary, deleted, archived) VALUES (5, 'Todo-List small', 'Small Todo list', false, false)
INSERT INTO public.todo_list (id, title, sumary, deleted, archived) VALUES (6, 'Todo-List medium', 'Medium Todo list', false, false)
INSERT INTO public.todo_list (id, title, sumary, deleted, archived) VALUES (7, 'Todo-List Big', 'Big Todo list', false, false)
-- Insert data into todo_item
INSERT INTO public.todo_item (id, fk_todo_list, task, completed) VALUES(1, 1, 'Crear un TODO-List-Item CRUD', false);
INSERT INTO public.todo_item (id, fk_todo_list, task, completed) VALUES(2, 1, 'Crear un esquema para los Todo-List-Item en la base de datos', false);
INSERT INTO public.todo_item (id, fk_todo_list, task, completed) VALUES(3, 1, 'Crear un API-REST-Spring-boot', false);
INSERT INTO public.todo_item (id, fk_todo_list, task, completed) VALUES(4, 1, 'Ir creando y completando la historia en github', false);
INSERT INTO public.todo_item (id, fk_todo_list, task, completed) VALUES(5, 1, 'Iniciar un espacio en Heroku', false);
INSERT INTO public.todo_item (id, fk_todo_list, task, completed) VALUES(6, 1, 'Crear los diferenetes entornos (desarrollo / producción) en local y en Heroku', false);
INSERT INTO public.todo_item (id, fk_todo_list, task, completed) VALUES(7, 1, 'Conectar la base de datos en los diferentes ambientes (devl/prod)', false);