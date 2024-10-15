# Gestion de Tickets

### Requerimientos

1. Debe haber distintos tipos de usuarios (admin, supervisor, tecnico, general).
2. Todos los usuarios deben iniciar sesion y depende el role verán una interfaz u otra.
3. El usuario admin crea usuarios.
4. El Usuario general puede crear tickets (indicando el problema y un detalle). Además puede ver los tickets que activos y cerrados.
5. El Usuario tecnico debe gestionar uno o muchos tickets (añade comentarios de progreso, comentario de cierre de ticket y cambiar el estado del ticket a cerrado o en progreso).
6. El Usuario supervisor puede revisar todos los tickets del sistema para su posterior informe de gestión.

### Schema

> [!NOTE]
> Primera versión del schema

-   _Creado en [dbdiagram](https://dbdiagram.io/d)_

```
Enum role {
  admin
  supervisor
  tecnico
  general
}

Enum status {
  abierto
  cerrado
  progreso
}

Enum type {
  close
  in_progress
}

Enum problem {
  networking
  hardware
  software
  otros
}

Table user {
  id_user varchar [primary key]
  username varchar [not null, unique]
  password varchar
  role role [not null]
  token varchar
}

Table ticket {
  id_ticket varchar [primary key]
  created_at timestamp [not null, default: `CURRENT_TIMESTAMP`]
  closed_at timestamp
  user_id varchar [ref: > user.id_user]
  status status [default: `abierto`]
  title varchar [not null]
  problem problem [not null]
  detalle varchar [not null]
}

Table comment {
  id_comment varchar [primary key]
  ticket_id varchar [ref: > ticket.id_ticket]
  user_id varchar [ref: > user.id_user]
  body varchar [not null]
  comment_date timestamp [not null, default: `CURRENT_TIMESTAMP`]
  comment_type type
}
```
