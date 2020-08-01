<h1 align="center">
    <img alt="ecoleta-header" title="ecoleta" src="../.docs/backend.png" width="260px" />
</h1>

## <img src="../.docs/label.svg" width="24px"> Node Version

This project uses a specific version of NodeJS: <b>version 12!</b>

If you are running another version on you machine, it is recommended that you install a derivation of version 12.

If you are using the <b><a href="https://github.com/nvm-sh/nvm">nvm manager</a></b>, just run `nvm use` in the directory and it will set the correct version.


## <img src="../.docs/label.svg" width="24px"> About the server

The application's server, like the rest of it, uses Typescript as the main language.

The database chosen was SQLite, but since a query builder (<b><a href="http://knexjs.org/">Knex</a></b>) is used, you can change the database to any other relational database of your choice.


## <img src="../.docs/label.svg" width="24px"> Run server

To run the server, access the project folder on the terminal and run the <b>`dev`</b> script.

<b>If you are creating a database without content</b>, run the scripts `knex:migrate` and `knex:seed` in that respective order so that the tables and data that are previously available are created.

---

Made with ❤ by Julia Bresolin! <br>
<small>[Follow me on social networks!](https://linktr.ee/juliabresolin)</small>

