# Learn TypeScript

Here, I'm tryna add TypeScript to my developer toolbox 😌.

## Core Types

There are the basic types of `number`, `string` and `boolean`. Note: all in lowercase, not the same as `String` in JavaScript.
The core types are:

| Type      | Example                   | Remarks                                               |
| --------- | ------------------------- | ----------------------------------------------------- |
| `number`  | `1`,`5.3`,`-10`           | All numbers, no distiction between integers or floats |
| `string`  | `'Sixtus'`,`'Hi'`,`'Wow'` | All text values (in quotes)                           |
| `boolean` | `true`, `false`           | Just these two, no "truthy" or "falsy" values.        |
| `object`  | `{age: 30}`               | Any JavaScript object is valid                        |

## Type Inference

TypeScript implicitly deduce type of variables in assigment operations and calcuations so I don't need to specify the type always. You can though it's redundant and not conventional.
For Instance:

```ts
let num1: number = 3; // redundant
const result = 12 + 3; // 15
```
