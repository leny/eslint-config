# @leny/eslint-config

> Personal, taylored by years ESLint config

* * *

## About

It's been years I use ESLint. I've taylored my config for that time. I'm finally creating this to stop copy/paste it everytime.

## Usage

To use these rules, you simply need to configure your `.eslintrc.js` to look like this:

```javascript
module.exports = {
	extends: "@leny"
};
```

> cf. the official ESLint documentation [page about shareable configs](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config).

### NOTE

This module only contains the eslint config. You need to be sure to also install the following **dev dependencies** in your project:

- `@babel/eslint-parser`
- `eslint`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-unicorn`
- `prettier`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

* * *
February 2021, [leny](https://github.com/leny)
