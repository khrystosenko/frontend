# Email templates for Roomit.tv

This directory contains MJML framework email templates.

Here you can find out how to compile MJML templates into HTML markup.


## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js >= 4.2.x](http://nodejs.org/) (with NPM)

## Installation

* `npm install -g mjml`

## Compiling

> Compile the file and output the result in `input.html`

```bash
$> mjml -r input.mjml
```

> Redirect the result to a file

```bash
$> mjml -r input.mjml -o output.html
```

> Watch a file and compile every time the file changes

```bash
$> mjml -w input.mjml -o output.html
```

## Further Reading / Useful Links

* [MJML](https://mjml.io)
