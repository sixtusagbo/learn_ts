# TS Compiler

I'll use TS as short for TypeScript. Well, I've already learnt that TS is compiled to JavaScript. Here, I'll be learning the TS Compiler configuration options.

The simplest way to run TS Compiler is without any options `tsc <filename>`.

## Contents

- [Watch Mode](#watch-mode)
- [Multiple Files](#multiple-files)
- [Excluding Files](#excluding-files)
- [Including Files](#including-files)
- [Compiler Options](#compileroptions)
  - [Target](#target)
  - [Source Maps](#sourcemap)

## Watch Mode

The short option `-w` is used to run the compiler in watch mode. This makes the compiler to not just run once but to keep watching for file changes and rerun each time your file has changed.

Example: `tsc app.js -w`

## Multiple Files

In order to compile multiple files, I need to initialize the directory as a TS project with `tsc --init`. Then I can run just `tsc` to compile all ts files. Of course, this can be combined with other options as well, like running in watch mode - `tsc -w`;

## Excluding Files

To exclude files, you set the `exclude` key in the `tsconfig.json` file. It takes an array of file paths to exclude. The `node_modules` directory is excluded by default, you don't need to set that.

Example:

```json
"exclude": [
  "somefile.ts",
  "somedir/",
  // wildcards are supported too
  "*.dev.ts"
]
```

## Including Files

Just like you can specify files to exclude, you can also specify files to include and it will only compile those files. When you set exclude and include options, it runs it this way - **all included files minus the excluded files**, so any files excluded will still not be compiled even if you set them in the include.

To include files, you set the `include` key in the `tsconfig.json` file. It takes an array of file paths to exclude.

Example:

```json
"include": [
  "app.ts",
  "somefile.ts"
]
```

There's also a `files` option, it works like include but does not accept directory paths.

## `compilerOptions`

This is included by default when you run `tsc --init`. It takes an object that contains options on how your file should be compiled. Although this file is well commented, you have the description of the options next attached to them, I'll look at some of them here:

- ### `target`
  Here you can specify the JavaScript(ECMAScript) version you want your code to be compiled down to. Whether you want an older version like `"es5"` or a modern version like `"es2015"`.
  Example:

```json
"compilerOptions": {
  // es5, es6, es2015, es2016, es2017 and so on.
  "target": "es2015"
  // ...
}
```

- ### `sourceMap`
  Source maps help with debugging using dev tools during development.

```json
"compilerOptions": {
  // ...
  "sourceMap": true
  // ...
}
```
