# CLAUDE.md

## Project overview

A single-file Biome GritQL plugin (`prefer-arrow-function.grit`) that flags function declarations and suggests arrow functions instead.

## Structure

- `prefer-arrow-function.grit` — the plugin (GritQL pattern with `or` for two cases: regular and `export default`)
- `biome.json` — registers the plugin; disables `noUnusedVariables` for test files
- `__tests__/invalid.ts` — cases that **must** trigger the rule
- `__tests__/valid.ts` — cases that **must not** trigger the rule (arrow functions, generators)

## Commands

```sh
# Lint test files
npx @biomejs/biome lint __tests__/

# Expected: 5 errors from invalid.ts, 0 plugin errors from valid.ts
```

## Key decisions

- Generator functions are excluded by design — the GritQL pattern `function $name(...)` does not match `function* name(...)`.
- `export default function` needs its own pattern branch in the `or` block because GritQL treats it as a distinct syntax form.
- Auto-fix is not possible — GritQL plugins only support `register_diagnostic()`.
