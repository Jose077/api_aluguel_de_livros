module.exports = {
    host: process.env.DB_HOST || "database",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "loja_livros",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    type: "postgres",
    ssl: true,
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations"
    }
}