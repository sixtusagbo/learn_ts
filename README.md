# Learn TypeScript

Here, I'm tryna add TypeScript to my developer toolbox 😌.

## Contents

- [Installation](#installation)
- [Core Types](#core-types)
- [Type Inference](#type-inference)
- [How is type managed in TS vs JS?](#type-management)
- [TS Compiler](./ts-compiler/README.md)

## Installation

I installed TS with `npm install -g typescript` and compiled my first ts file with `tsc app.ts`.

## Core Types

There are the basic types of `number`, `string` and `boolean`. Note: all in lowercase, not the same as `String` in JavaScript.

## Type Inference

TypeScript implicitly deduce type of variables in assigment operations and calcuations so I don't need to specify the type always. You can though it's redundant and not conventional.
For Instance:

```ts
let num1: number = 3; // redundant
const result = 12 + 3; // 15
```
