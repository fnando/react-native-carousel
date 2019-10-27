module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],

  plugins: ["@typescript-eslint", "import", "react", "react-hooks"],

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
    react: {
      pragma: "React",
    },
  },

  rules: {
    "arrow-parens": ["error", "always"],
    "import/namespace": "off",
    "import/named": "off",
    "react/jsx-child-element-spacing": "off",
    "react/jsx-max-depth": "off",
    "react/display-name": ["off", { ignoreTranspilerName: false }],
    "react/forbid-dom-props": ["off", { forbid: [] }],
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "react/jsx-space-before-closing": ["off", "always"],
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "lines-between-class-members": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-key": "off",
    "react/no-multi-comp": "off",
    "react/sort-prop-types": [
      "off",
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],

    "no-console": ["warn", { allow: ["assert"] }],
    "no-debugger": "warn",
    "react/no-unused-prop-types": "warn",
    "react/sort-comp": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/no-unused-state": "warn",
    "arrow-body-style": "warn",
    "valid-jsdoc": ["warn"],
    "prefer-const": "warn",
    "import/first": "warn",
    "import/order": "warn",
    "object-shorthand": "warn",
    "react/no-access-state-in-setstate": "warn",
    "require-await": "warn",
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],

    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "react/no-typos": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-filename-extension": ["error", { extensions: ["tsx"] }],
    "react/jsx-no-comment-textnodes": "error",
    "react/no-danger-with-children": "error",
    "react/style-prop-object": "error",
    "react/no-unescaped-entities": "error",
    "react/no-children-prop": "error",
    "react/jsx-boolean-value": ["error", "never", { always: [] }],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
    "react/jsx-no-literals": ["off", { noStrings: true }],
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-will-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-is-mounted": "error",
    "react/jsx-uses-vars": "error",
    "react/no-danger": "error",
    "react/no-set-state": "error",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/no-deprecated": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-indent": ["error", 2],
    "react/no-array-index-key": "off",
    "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
    "react/destructuring-assignment": ["error", "always"],
    "react/jsx-props-no-multi-spaces": "error",
    "react/no-unsafe": "error",
    "react/jsx-fragments": ["error", "syntax"],
    "react/static-property-placement": ["error", "property assignment"],
    "react/prefer-read-only-props": "off",

    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "enforce",
        custom: "enforce",
        exceptions: [],
      },
    ],

    "react/jsx-curly-newline": [
      "error",
      {
        multiline: "consistent",
        singleline: "consistent",
      },
    ],

    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],

    "react/require-default-props": [
      "error",
      {
        forbidDefaultForRequired: true,
      },
    ],

    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true },
    ],

    "react/jsx-sort-default-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],

    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    "react/jsx-max-props-per-line": [
      "error",
      { maximum: 1, when: "multiline" },
    ],

    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],

    "react/forbid-prop-types": [
      "error",
      {
        forbid: ["any", "array", "object"],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    "react/prop-types": [
      "error",
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],

    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],

    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      },
    ],

    "class-methods-use-this": "off",

    "react/boolean-prop-naming": [
      "error",
      {
        propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
        rule: "^(is|has|must|will|did|should)[A-Z]([A-Za-z0-9]?)+",
      },
    ],

    "react/jsx-no-bind": [
      "error",
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],

    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "no-array-constructor": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-var-requires": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "off",
  },
};
