# biome-plugin-prefer-arrow-function

Biome [GritQL plugin](https://biomejs.dev/linter/plugins/) that reports function declarations and suggests using arrow functions instead.

Biome's built-in [`useArrowFunction`](https://biomejs.dev/linter/rules/use-arrow-function/) rule only converts **function expressions** (`const foo = function() {}`). This plugin covers the gap by detecting **function declarations** (`function foo() {}`).

> Requires Biome v2.0+

## Detected patterns

```js
function foo() {}                   // plain declaration
function foo(a, b) { return a + b } // with params
export function foo() {}            // named export
export default function foo() {}    // default export
async function foo() {}             // async
```

## Excluded patterns

```js
function* gen() {}          // generator — no arrow equivalent
export function* gen() {}   // exported generator
```

## Usage

### In this repo (for testing)

```sh
npm install
npx @biomejs/biome lint __tests__/
```

### In another project

Point to the `.grit` file from your `biome.json`:

```jsonc
{
  "plugins": [
    // relative or absolute path to the .grit file
    "../biome-plugin-prefer-arrow-function/prefer-arrow-function.grit"
  ]
}
```

Then run `biome lint` as usual.

## Limitations

- GritQL plugins currently support **diagnostics only** — no auto-fix.
- Generator functions (`function*`) are naturally excluded because the pattern doesn't match the `*` syntax.

## References

- [biomejs/biome#7108](https://github.com/biomejs/biome/discussions/7108) — original feature request
- [Biome Linter Plugins docs](https://biomejs.dev/linter/plugins/)
- [GritQL reference](https://biomejs.dev/reference/gritql/)
