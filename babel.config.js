module.exports = {
    presets: [
        "@babel/preset-typescript",
        ["@babel/preset-env", { targets: { node: "19" } }],
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "@modules": "./src/modules",
                    "@config": "./src/config",
                    "@shared": "./src/shared",
                    "@errors": "./src/errors",
                    "@utils": "./src/utils"
                }
            }
        ],
        "babel-plugin-transform-typescript-metadata",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
    ]
}