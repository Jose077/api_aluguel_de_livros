module.exports = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "loja_livros",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    type: "postgres",
    ssl: process.env.NODE_ENV == "production" ? true : false,
    migrations: [process.env.NODE_ENV == "production" ? "./dist/shared/infra/typeorm/migrations/*.js": "./src/shared/infra/typeorm/migrations/*.ts"],
    entities: [process.env.NODE_ENV == "production" ? "./dist/modules/**/entities/*.js": "./src/modules/**/entities/*.ts"],
    cli: {
      migrationsDir: process.env.NODE_ENV == "production" ? "./dist/shared/infra/typeorm/migrations" : "./src/shared/infra/typeorm/migrations"
    }
}