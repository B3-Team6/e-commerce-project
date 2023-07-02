Tables

We created our migrations throughout the whole dev process, reason why there tables haven't been created at once in one initial schema;
We use Models to build our queries for our API calls. Creating Models also allowed us to create easy-to-memorize relation between two tables.

Seeds

Seeds are practical during development phase as they provide test data and enable an easy database point start.

Make sure all your tables are created. If your database is empty, run `npx knex --esm migrate:latest` to do so;
Run the command `npx knex seed:run` to run the seeds: this command empty the tables before adding new data;
You now have every data you need to enjoy the website locally !
