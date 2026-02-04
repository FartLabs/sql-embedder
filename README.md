# sql-embedder

[![JSR](https://jsr.io/badges/@fartlabs/sql-embedder)](https://jsr.io/@fartlabs/sql-embedder)
[![JSR score](https://jsr.io/badges/@fartlabs/sql-embedder/score)](https://jsr.io/@fartlabs/sql-embedder/score)
[![GitHub Actions](https://github.com/FartLabs/sql-embedder/actions/workflows/publish.yaml/badge.svg)](https://github.com/FartLabs/sql-embedder/actions/workflows/publish.yaml)

Embed SQL into TypeScript source code.

<img width="1184" height="673" alt="Image" src="https://github.com/user-attachments/assets/acea427e-3a13-422e-96af-c108f24027a4" />

`sql-embedder` is a tool to make developing and distributing TypeScript
applications easier when you need access to SQL databases at runtime. Generates
statically analyzable modules.

## Usage

You can run `sql-embedder` directly:

```sh
# Process SQL files in current directory
deno jsr:@fartlabs/sql-embedder

# Process SQL files in a specific directory
deno jsr:@fartlabs/sql-embedder --dir ./queries
deno jsr:@fartlabs/sql-embedder -d ./queries
deno jsr:@fartlabs/sql-embedder ./queries
```

### Installation

#### Per-project

Add a [`deno task`](https://docs.deno.com/runtime/reference/cli/task/) to your
`deno.json` for convenient use within your project:

```json
{
  "tasks": {
    "generate": "deno jsr:@fartlabs/sql-embedder src"
  }
}
```

Then run:

```sh
deno task generate
```

#### Global installation

For global use across all projects, install `sql-embedder` as a command:

```sh
deno install -A --name sql-embedder jsr:@fartlabs/sql-embedder
```

Then use it anywhere:

```sh
sql-embedder ./queries
```

### AI coding agents

Install the [skill](https://skills.sh) to teach AI coding agents to edit the
source `.sql` files instead of the generated `.sql.ts` files:

```sh
npx skills add fartlabs/sql-embedder
```

## Development

Format and lint the code:

```sh
deno fmt
deno lint
```

Demonstrate the example:

```sh
deno task generate
```

---

Developed with 🧪 [**@FartLabs**](https://github.com/FartLabs)
