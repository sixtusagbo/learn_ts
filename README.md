# Learn TypeScript

Here, I'm tryna add TypeScript to my developer toolbox 😌. I'll use TS as short for TypeScript.

## Contents

- [Installation](#installation)
- [Core Types](#core-types)
- [Type Inference](#type-inference)
- [How is type managed in TS vs JS?](#type-management)
- [TS Compiler](https://github.com/sixtusagbo/learn_ts/tree/ts-compiler)

## Installation

I installed TS with `npm install -g typescript` and compiled my first ts file with `tsc app.ts`.

## Core Types

There are the basic types of `number`, `string` and `boolean`. Note: all in lowercase, not the same as `String` in JavaScript.
Some of the core types are:

| Type                         | Example                                                    | Remarks                                                                           |
| ---------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `number`                     | `1`,`5.3`,`-10`                                            | All numbers, no distiction between integers or floats                             |
| `string`                     | `'Sixtus'`,`'Hi'`,`'Wow'`                                  | All text values (in quotes)                                                       |
| `boolean`                    | `true`, `false`                                            | Just these two, no "truthy" or "falsy" values.                                    |
| `object`                     | `{age: 30}`                                                | Any JavaScript object is valid                                                    |
| Array                        | `[1, 2, 4]`                                                | Any JavaScript array, type can be flexible - `any[]` or strict - `string[]`       |
| Tuple                        | `[1, 'admin']`                                             | Fixed length and Fixed element type                                               |
| Enums                        | `enum Roles {USER, ADMIN};`                                | Enumerated contant identifiers                                                    |
| `any`                        | \*                                                         | Any kind of value is valid, most flexible type, disables type checking.           |
| Unions                       | `input1: number            \| string`                      | When a variable can accept specific different types                               |
| Literals                     | `'as-text'`, `const num = 2.6;`                            | Specific version of a basic type                                                  |
| Type Aliases or Custom Types | `type Combinable = number             \| string;`          | Self explanatory                                                                  |
| `void`                       | `function say(): void => console.log('Hi');`               | Nothing                                                                           |
| `undefined`                  | `function doShit(): undefined {return;}`                   | Kinda like JavaScript undefined, not necessary.                                   |
| `unknown`                    | `let someInput: unknown;`                                  | More strict than `any`. Prefer this type than `any`.                              |
| `never`                      | `function fireError(): never => throw {message: 'error'};` | Make it clear that a function never returns anything, intended to crash or break. |

## Type Inference

TypeScript implicitly deduce type of variables in assigment operations and calcuations so I don't need to specify the type always. You can though it's redundant and not conventional.
For Instance:

```ts
let num1: number = 3; // redundant
const result = 12 + 3; // 15
```

## Type Management

TypeScript is statically typed. It uses static types that help you in development. JavaScript uses runtime types while TypeScript uses static types. TypeScript is compiled down to JavaScript for production, for instance `tsc app.ts`.
