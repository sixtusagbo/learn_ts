# TS Compiler

Well, I've already learnt that TS is compiled to JavaScript. Here, I'll be learning the TS Compiler configuration options.

The simplest way to run TS Compiler is without any options `tsc <filename>`.

## Watch Mode

The short option `-w` is used to run the compiler in watch mode. This makes the compiler to not just run once but to keep watching for file changes and rerun each time your file has changed.

Example: `tsc app.js -w`
