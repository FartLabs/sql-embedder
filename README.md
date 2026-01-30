# sql-embedder

[![JSR](https://jsr.io/badges/@fartlabs/sql-embedder)](https://jsr.io/@fartlabs/sql-embedder)
[![JSR score](https://jsr.io/badges/@fartlabs/sql-embedder/score)](https://jsr.io/@fartlabs/sql-embedder/score)
[![GitHub Actions](https://github.com/FartLabs/sql-embedder/actions/workflows/publish.yaml/badge.svg)](https://github.com/FartLabs/sql-embedder/actions/workflows/publish.yaml)

Embed SQL into TypeScript source code.

`sql-embedder` is a tool to make developing and distributing Deno applications
easier when you need access to SQL databases at runtime. No need for
`--allow-net` or `--allow-read` or `--unstable-text-imports` permissions to load
them! Generates statically analyzable modules.

## Development

Format and lint the code:

```sh
deno fmt
deno lint
```

Demonstrate the example:

```sh
deno task start
```

---

Developed with 🧪 [**@FartLabs**](https://github.com/FartLabs)
