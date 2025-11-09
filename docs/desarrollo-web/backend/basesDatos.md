# 🗄️ Bases de Datos

### Programacion declarativa?

La programacion declarativa se concentra en que cosas hay que hacer y no necesariamente en como hacerlas. Un ejemplo es SQL, donde se le dice a la base de datos que datos queremos, pero no como obtenerlos.

---

### Elementos de una base de datos

- **Tablas**: Contienen la información
- **Vistas**: Parecidas a la tabla, son para consultas, más rápidas
- **Índices**: Uno o más columnas de una tabla para encontrar la data más rápido, es como el índice de un libro
- **Triggers**: Disparadores que ejecutan código de SQL cuando se inserta, borra o se updatea un campo (CRUD (Create, Read, Update, Delete))
- **Procedures**: Pedazos de código SQL que se ejecuta
- **Constraints**: Previenen inconsistencia de datos en una columna
- **Reglas:** Se especifican valores válidos para ser insertados en una tabla o columna.

---

### Elementos de Data Control Language (DCL)

- **GRANT**: Da permisos a un usuario
- **REVOKE**: Quita permisos a un usuario
- **DENY**: Niega permisos a un usuario
- **COMMIT**: Guarda los cambios hechos en la base de datos
- **ROLLBACK**: Revierte los cambios hechos en la base de datos
- **SAVEPOINT**: Crea un punto de guardado en una transacción para poder hacer rollback a ese punto específico
- **TRANSACTION**: Inicia una transacción
- **SET TRANSACTION**: Configura las propiedades de la transacción actual
- **LOCK**: Bloquea una tabla o fila para evitar que otros usuarios la modifiquen mientras se está trabajando en ella
- **UNLOCK**: Desbloquea una tabla o fila que fue bloqueada previamente
- **EXPLAIN**: Muestra el plan de ejecución de una consulta SQL para optimización
- **ANALYZE**: Recopila estadísticas sobre la distribución de datos en una tabla para ayudar al optimizador de consultas a tomar decisiones informadas
- **MERGE**: Combina datos de dos tablas en una sola tabla
- **CALL**: Invoca un procedimiento almacenado en la base de datos
- **DESCRIBE**: Muestra la estructura de una tabla, incluyendo sus columnas y tipos de datos
- **SHOW**: Muestra información sobre la base de datos, como tablas, vistas, índices, etc.
- **USE**: Cambia la base de datos actual en uso
- **SET**: Configura opciones de sesión para la base de datos
- **HELP**: Proporciona ayuda sobre comandos y funciones de la base de datos