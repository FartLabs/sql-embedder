import { parseArgs } from "@std/cli/parse-args";
import { expandGlob } from "@std/fs/expand-glob";
import { embedSql } from "./sql-embedder.ts";

if (import.meta.main) {
  await main();
}

/**
 * main is the entry point for the SQL embedder CLI tool.
 *
 * Searches for SQL files in the specified directory, parses them using tree-sitter,
 * ### Process SQL files in current directory
 * deno task generate
 *
 * ### Process SQL files in specific directory
 * deno task generate --dir ./queries
 * deno task generate -d ./queries
 * deno task start ./queries
 * ```
 */
export async function main() {
  const flags = parseArgs(Deno.args, {
    string: ["dir"],
    alias: { dir: "d" },
  });
  const inputDir = flags.dir ?? flags._[0] ?? ".";

  for await (
    const entry of expandGlob("**/*.sql", { root: String(inputDir) })
  ) {
    const sourceCode = await Deno.readTextFile(entry.path);
    const result = embedSql(sourceCode);

    const outPath = entry.path.replace(/(\.sql)$/, ".sql.ts");
    await Deno.writeTextFile(outPath, result);
  }
}
