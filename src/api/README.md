# THE API SETUP DOCUMENTATION

The most important in this folder is in the `db`folder.

- There are the migrations

Migrations in a web project are used to manage controlled changes to the database structure. They ensure that the database schema stays synchronized with the evolving needs of the application over time and facilitate collaboration among developers.

To run the migrations, you have to do `npx knex migrate:latest`in the terminal.

- There are the seeds

Seeds are used to provide initial data to the database. They allow pre-populating the database with records or configuration data necessary for the proper functioning of the application.

To run the seeds, you have to do `npx knex seed:run`in the terminal.
