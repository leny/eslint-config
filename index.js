/* leny/eslint-config
 *
 * /index.js - ESLint shared configuration
 *
 * coded by leny@flatLand!
 * started at 16/02/2021
 */

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: ["./tsconfig.json"],
        tsconfigRootDir: process.cwd(),
    },
    plugins: ["prettier", "@typescript-eslint", "react", "react-hooks", "unicorn"],
    settings: {
        react: {
            version: "16.8",
        },
    },
    rules: {
        // Possible Errors
        "for-direction": ERROR,
        "getter-return": ERROR,
        "no-async-promise-executor": ERROR,
        "no-await-in-loop": ERROR,
        "no-compare-neg-zero": ERROR,
        "no-cond-assign": [ERROR, "except-parens"],
        "no-console": [WARNING],
        "no-constant-condition": ERROR,
        "no-control-regex": ERROR,
        "no-debugger": WARNING,
        "no-dupe-args": ERROR,
        "no-dupe-keys": ERROR,
        "no-duplicate-case": ERROR,
        "no-empty": ERROR,
        "no-empty-character-class": ERROR,
        "no-ex-assign": ERROR,
        "no-extra-boolean-cast": ERROR,
        "no-extra-parens": [
            WARNING,
            "all",
            {
                ignoreJSX: "all",
                enforceForArrowConditionals: false,
                nestedBinaryExpressions: false,
            },
        ],
        "no-extra-semi": ERROR,
        "no-func-assign": ERROR,
        "no-inner-declarations": ERROR,
        "no-invalid-regexp": ERROR,
        "no-irregular-whitespace": ERROR,
        "no-misleading-character-class": ERROR,
        "no-obj-calls": ERROR,
        "no-prototype-builtins": ERROR,
        "no-regex-spaces": ERROR,
        "no-sparse-arrays": ERROR,
        "no-template-curly-in-string": ERROR,
        "no-unexpected-multiline": ERROR,
        "no-unreachable": ERROR,
        "no-unsafe-finally": ERROR,
        "no-unsafe-negation": ERROR,
        "require-atomic-updates": ERROR,
        "use-isnan": ERROR,
        "valid-typeof": ERROR,

        // Best Practices
        "accessor-pairs": [ERROR],
        "array-callback-return": ERROR,
        "block-scoped-var": WARNING,
        "class-methods-use-this": WARNING,
        "consistent-return": ERROR,
        curly: [ERROR, "all"],
        "default-case": ERROR,
        "dot-notation": ERROR,
        eqeqeq: [ERROR, "smart"],
        "guard-for-in": ERROR,
        "max-classes-per-file": ERROR,
        "no-alert": ERROR,
        "no-caller": ERROR,
        "no-case-declarations": ERROR,
        "no-div-regex": ERROR,
        "no-else-return": ERROR,
        "no-empty-function": ERROR,
        "no-empty-pattern": ERROR,
        "no-eval": ERROR,
        "no-extend-native": ERROR,
        "no-extra-bind": ERROR,
        "no-extra-label": ERROR,
        "no-fallthrough": ERROR,
        "no-floating-decimal": ERROR,
        "no-global-assign": ERROR,
        "no-implicit-globals": ERROR,
        "no-implied-eval": ERROR,
        "no-invalid-this": ERROR,
        "no-iterator": ERROR,
        "no-labels": ERROR,
        "no-lone-blocks": ERROR,
        "no-loop-func": ERROR,
        "no-multi-spaces": ERROR,
        "no-multi-str": ERROR,
        "no-new": ERROR,
        "no-new-func": ERROR,
        "no-new-wrappers": ERROR,
        "no-octal": ERROR,
        "no-octal-escape": ERROR,
        "no-param-reassign": ERROR,
        "no-proto": ERROR,
        "no-redeclare": ERROR,
        "no-return-assign": [ERROR, "except-parens"],
        "no-return-await": ERROR,
        "no-script-url": ERROR,
        "no-self-assign": ERROR,
        "no-self-compare": ERROR,
        "no-sequences": ERROR,
        "no-throw-literal": ERROR,
        "no-unmodified-loop-condition": ERROR,
        "no-unused-expressions": [ERROR, {allowShortCircuit: true}],
        "no-useless-call": ERROR,
        "no-useless-catch": ERROR,
        "no-useless-concat": ERROR,
        "no-useless-escape": ERROR,
        "no-useless-return": ERROR,
        "no-with": ERROR,
        "prefer-promise-reject-errors": ERROR,
        radix: [ERROR, "as-needed"],
        "require-await": ERROR,

        // Variables
        "no-delete-var": ERROR,
        "no-label-var": ERROR,
        "no-shadow": ERROR,
        "no-shadow-restricted-names": ERROR,
        "no-undef": ERROR,
        "no-undef-init": ERROR,
        "no-undefined": ERROR,
        "no-unused-vars": [ERROR, {args: "after-used"}],
        "no-use-before-define": ERROR,

        // Node.js and CommonJS
        "global-require": ERROR,
        "no-buffer-constructor": ERROR,
        "no-mixed-requires": WARNING,
        "no-new-require": ERROR,
        "no-path-concat": ERROR,
        "no-sync": WARNING,

        // ECMAScript 6
        "arrow-body-style": [ERROR, "as-needed"],
        "arrow-parens": [ERROR, "as-needed"],
        "arrow-spacing": ERROR,
        "constructor-super": ERROR,
        "generator-star-spacing": ERROR,
        "no-class-assign": ERROR,
        "no-confusing-arrow": [WARNING, {allowParens: true}],
        "no-const-assign": ERROR,
        "no-dupe-class-members": ERROR,
        "no-duplicate-imports": ERROR,
        "no-new-symbol": ERROR,
        "no-this-before-super": ERROR,
        "no-useless-computed-key": ERROR,
        "no-useless-constructor": ERROR,
        "no-useless-rename": ERROR,
        "no-var": ERROR,
        "object-shorthand": WARNING,
        "prefer-arrow-callback": WARNING,
        "prefer-const": WARNING,
        "prefer-rest-params": ERROR,
        "prefer-spread": ERROR,
        "prefer-template": ERROR,
        "require-yield": ERROR,
        "rest-spread-spacing": [ERROR, "never"],
        "symbol-description": ERROR,

        // Prettier
        "prettier/prettier": [
            ERROR,
            {
                singleQuote: false,
                tabWidth: 4,
                trailingComma: "all",
                arrowParens: "avoid",
                bracketSpacing: false,
                jsxBracketSameLine: true,
            },
        ],

        // React
        "react/button-has-type": WARNING,
        "react/no-access-state-in-setstate": WARNING,
        "react/no-array-index-key": ERROR,
        "react/no-children-prop": ERROR,
        "react/no-danger": ERROR,
        "react/no-danger-with-children": ERROR,
        "react/no-deprecated": ERROR,
        "react/no-direct-mutation-state": ERROR,
        "react/no-find-dom-node": ERROR,
        "react/no-is-mounted": ERROR,
        "react/no-multi-comp": ERROR,
        "react/no-redundant-should-component-update": ERROR,
        "react/no-render-return-value": ERROR,
        "react/no-typos": ERROR,
        "react/no-string-refs": ERROR,
        "react/no-this-in-sfc": ERROR,
        "react/no-unescaped-entities": ERROR,
        "react/no-unknown-property": ERROR,
        "react/no-will-update-set-state": ERROR,
        "react/prefer-es6-class": ERROR,
        "react/require-render-return": ERROR,
        "react/self-closing-comp": ERROR,
        "react/void-dom-elements-no-children": ERROR,

        // React:jsx
        "react/jsx-closing-bracket-location": [
            ERROR,
            {
                selfClosing: "tag-aligned",
                nonEmpty: "after-props",
            },
        ],
        "react/jsx-closing-tag-location": ERROR,
        "react/jsx-equals-spacing": ERROR,
        "react/jsx-first-prop-new-line": ERROR,
        "react/jsx-handler-names": ERROR,
        "react/jsx-key": ERROR,
        "react/jsx-max-depth": [WARNING, {max: 5}],
        "react/jsx-no-comment-textnodes": ERROR,
        "react/jsx-no-duplicate-props": ERROR,
        "react/jsx-no-literals": ERROR,
        "react/jsx-no-target-blank": ERROR,
        "react/jsx-no-undef": ERROR,
        "react/jsx-curly-brace-presence": [
            ERROR,
            {props: "always", children: "ignore"},
        ],
        "react/jsx-pascal-case": ERROR,
        "react/jsx-props-no-multi-spaces": ERROR,
        "react/jsx-tag-spacing": [
            ERROR,
            {beforeSelfClosing: "always", beforeClosing: "never"},
        ],
        "react/jsx-uses-vars": ERROR,
        "react/jsx-wrap-multilines": [
            ERROR,
            {
                declaration: "parens-new-line",
                assignment: "parens-new-line",
                return: "parens-new-line",
                arrow: "parens",
                condition: "parens",
                logical: "parens",
                prop: "parens",
            },
        ],
        // cf. https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
        "react/jsx-uses-react": OFF,
        "react/react-in-jsx-scope": OFF,

        // React Hooks
        "react-hooks/rules-of-hooks": ERROR,
        "react-hooks/exhaustive-deps": WARNING,

        // Unicorn: additional rules
        "unicorn/error-message": ERROR,
        "unicorn/filename-case": [ERROR, {case: "kebabCase"}],
        "unicorn/new-for-builtins": ERROR,
        "unicorn/no-abusive-eslint-disable": WARNING,
        "unicorn/no-array-instanceof": ERROR,
        "unicorn/no-for-loop": WARNING,
        "unicorn/prefer-includes": ERROR,
        "unicorn/prefer-query-selector": ERROR,
        "unicorn/throw-new-error": ERROR,
    },
    // typescript
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            rules: {
                // eslint rules overrides
                "no-confusing-arrow": OFF,

                "no-extra-parens": OFF,
                "no-duplicate-imports": OFF,

                // typescript rules
                "@typescript-eslint/adjacent-overload-signatures": ERROR,
                "@typescript-eslint/array-type": [
                    ERROR,
                    {default: "generic", readonly: "generic"},
                ],
                "@typescript-eslint/await-thenable": WARNING,
                "@typescript-eslint/ban-ts-comment": OFF,
                "@typescript-eslint/consistent-generic-constructors": [
                    ERROR,
                    "constructor",
                ],
                "@typescript-eslint/consistent-type-exports": [
                    ERROR,
                    {fixMixedExportsWithInlineTypeSpecifier: false},
                ],
                "@typescript-eslint/consistent-type-imports": [
                    ERROR,
                    {
                        prefer: "type-imports",
                        disallowTypeAnnotations: true,
                        fixStyle: "separate-type-imports",
                    },
                ],
                "@typescript-eslint/explicit-function-return-type": [
                    ERROR,
                    {
                        allowHigherOrderFunctions: true,
                    },
                ],
                "@typescript-eslint/explicit-member-accessibility": [
                    ERROR,
                    {
                        accessibility: "explicit",
                        overrides: {
                            constructors: "no-public",
                        },
                    },
                ],
                "@typescript-eslint/explicit-module-boundary-types": [
                    ERROR,
                    {
                        allowArgumentsExplicitlyTypedAsAny: true,
                        allowHigherOrderFunctions: true,
                    },
                ],
                "@typescript-eslint/member-ordering": OFF,
                "@typescript-eslint/method-signature-style": [ERROR, "method"],
                "@typescript-eslint/naming-convention": [
                    WARNING,
                    {selector: "default", format: ["camelCase"]},
                    {
                        selector: "memberLike",
                        modifiers: ["protected", "private"],
                        format: ["camelCase"],
                        leadingUnderscore: "require",
                    },
                    {
                        selector: "variable",
                        modifiers: ["const"],
                        format: ["camelCase", "UPPER_CASE"],
                    },
                    {selector: "typeLike", format: ["PascalCase"]},
                    {selector: "class", format: ["PascalCase"]},
                    {
                        selector: "parameter",
                        format: ["camelCase", "PascalCase"],
                    },
                    {
                        selector: "parameter",
                        modifiers: ["unused"],
                        format: null,
                    },
                    {
                        selector: "enumMember",
                        format: ["UPPER_CASE", "PascalCase"],
                    },
                    {
                        selector: [
                            "classProperty",
                            "objectLiteralProperty",
                            "typeProperty",
                            "classMethod",
                            "objectLiteralMethod",
                            "typeMethod",
                            "accessor",
                            "enumMember",
                        ],
                        format: null,
                        modifiers: ["requiresQuotes"],
                    },
                ],
                "@typescript-eslint/no-base-to-string": WARNING,
                "@typescript-eslint/no-confusing-non-null-assertion": WARNING,
                "@typescript-eslint/no-confusing-void-expression": ERROR,
                "@typescript-eslint/no-duplicate-enum-values": ERROR,
                "@typescript-eslint/no-dynamic-delete": WARNING,
                "@typescript-eslint/no-empty-interface": [
                    ERROR,
                    {
                        allowSingleExtends: true,
                    },
                ],

                "@typescript-eslint/no-explicit-any": OFF,
                "@typescript-eslint/no-extra-non-null-assertion": ERROR,
                "@typescript-eslint/no-extraneous-class": WARNING,
                "@typescript-eslint/no-floating-promises": [
                    ERROR,
                    {ignoreIIFE: true, ignoreVoid: true},
                ],
                "@typescript-eslint/no-for-in-array": ERROR,
                "@typescript-eslint/no-import-type-side-effects": ERROR,
                "@typescript-eslint/no-inferrable-types": OFF,
                "@typescript-eslint/no-invalid-void-type": WARNING,
                "@typescript-eslint/no-meaningless-void-operator": WARNING,
                "@typescript-eslint/no-misused-new": ERROR,
                "@typescript-eslint/no-misused-promises": ERROR,
                "@typescript-eslint/no-namespace": ERROR,
                "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ERROR,
                "@typescript-eslint/no-non-null-asserted-optional-chain": ERROR,
                "@typescript-eslint/no-non-null-assertion": OFF,
                "@typescript-eslint/no-redundant-type-constituents": WARNING,
                "@typescript-eslint/no-require-imports": ERROR,
                "@typescript-eslint/no-this-alias": [
                    ERROR,
                    {
                        allowDestructuring: true,
                        allowedNames: ["self"],
                    },
                ],
                "@typescript-eslint/no-type-alias": OFF,
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
                    ERROR,
                    {
                        allowComparingNullableBooleansToTrue: true,
                        allowComparingNullableBooleansToFalse: true,
                    },
                ],
                "@typescript-eslint/no-unnecessary-condition": WARNING,
                "@typescript-eslint/no-unnecessary-qualifier": WARNING,
                "@typescript-eslint/no-unnecessary-type-constraint": WARNING,
                "@typescript-eslint/no-unsafe-assignment": WARNING,
                "@typescript-eslint/no-unsafe-call": WARNING,
                "@typescript-eslint/no-unsafe-member-access": WARNING,
                "@typescript-eslint/no-unsafe-return": WARNING,
                "@typescript-eslint/no-unused-vars": [
                    ERROR,
                    {args: "after-used"},
                ],
                "@typescript-eslint/no-useless-empty-export": ERROR,
                "@typescript-eslint/no-var-requires": ERROR,
                "@typescript-eslint/non-nullable-type-assertion-style": WARNING,
                "@typescript-eslint/parameter-properties": [
                    ERROR,
                    {
                        allow: ["public"],
                    },
                ],
                "@typescript-eslint/prefer-enum-initializers": ERROR,
                "@typescript-eslint/prefer-for-of": WARNING,
                "@typescript-eslint/prefer-includes": WARNING,
                "@typescript-eslint/prefer-literal-enum-member": WARNING,
                "@typescript-eslint/prefer-optional-chain": WARNING,
                "@typescript-eslint/prefer-readonly": WARNING,
                "@typescript-eslint/prefer-readonly-parameter-types": OFF,
                "@typescript-eslint/prefer-string-starts-ends-with": WARNING,
                "@typescript-eslint/prefer-ts-expect-error": WARNING,
                "@typescript-eslint/switch-exhaustiveness-check": WARNING,
                "@typescript-eslint/typedef": [
                    ERROR,
                    {
                        propertyDeclaration: true,
                        parameter: true,
                        memberVariableDeclaration: true,
                        arrayDestructuring: false,
                        arrowParameter: false,
                        objectDestructuring: false,
                    },
                ],
                "@typescript-eslint/unbound-method": OFF,

                // eslint rules extensions
                "default-param-last": OFF,
                "@typescript-eslint/default-param-last": WARNING,

                "dot-notation": OFF,
                "@typescript-eslint/dot-notation": ERROR,

                "no-dupe-class-members": OFF,
                "@typescript-eslint/no-dupe-class-members": ERROR,

                "no-empty-function": OFF,
                "@typescript-eslint/no-empty-function": ERROR,

                "no-extra-semi": OFF,
                "@typescript-eslint/no-extra-semi": ERROR,

                "no-implied-eval": OFF,
                "@typescript-eslint/no-implied-eval": ERROR,

                "no-invalid-this": OFF,
                "@typescript-eslint/no-invalid-this": ERROR,

                "no-loop-func": OFF,
                "@typescript-eslint/no-loop-func": WARNING,

                "no-loss-of-precision": OFF,
                "@typescript-eslint/no-loss-of-precision": ERROR,

                "no-magic-numbers": OFF,
                "@typescript-eslint/no-magic-numbers": WARNING,

                "no-shadow": OFF,
                "@typescript-eslint/no-shadow": [
                    ERROR,
                    {ignoreTypeValueShadow: true},
                ],

                "no-throw-literal": OFF,
                "@typescript-eslint/no-throw-literal": ERROR,

                "no-unused-expressions": OFF,
                "@typescript-eslint/no-unused-expressions": ERROR,

                "no-unused-vars": OFF,
                "@typescript-eslint/no-unused-vars": WARNING,

                "no-useless-constructor": OFF,
                "@typescript-eslint/no-useless-constructor": WARNING,

                "no-return-await": OFF,
                "@typescript-eslint/return-await": ERROR,
            },
        },
    ],
};

