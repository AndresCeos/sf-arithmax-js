module.exports = {
  "root": true,
  "plugins": [
    "security"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:security/recommended",
    "airbnb",
    "airbnb/hooks"
  ],
  "ignorePatterns": [".eslintrc.cjs", "playwright.config.ts"],
  "rules": {
    "max-len": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
    "semi": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-no-bind": "off",
    "comma-dangle": "off",
    "max-classes-per-file": "off",
    "no-mixed-spaces-and-tabs": "off", // TODO re-enable this
    "no-tabs": "off", // TODO re-enable this
    "no-mixed-spaces-and-tabs": "off", // TODO re-enable this
    "react/function-component-definition": "off", // TODO re-enable this
    "no-undef": "off", // TODO re-enable this
    "import/no-unresolved": "off", // TODO re-enable this
    "react/no-unescaped-entities": "off", // TODO re-enable this
    "import/extensions": "off", // TODO re-enable this
    "default-case": "off", // TODO re-enable this
    "jsx-a11y/label-has-associated-control": "off", // TODO re-enable this
    "func-names": "off", // TODO re-enable this
    "no-unused-vars": "off", // TODO re-enable this
    "no-restricted-globals": "off", // TODO re-enable this
    "no-return-assign": "off", // TODO re-enable this
    "no-use-before-define": "off", // TODO re-enable this
    "no-return-await": "off", // TODO re-enable this
    "class-methods-use-this": "off", // TODO re-enable this
    "security/detect-object-injection": "off", // TODO re-enable this
    "no-underscore-dangle": "off", // TODO re-enable this
    "no-unused-expressions": "off", // TODO re-enable this
    "prefer-rest-params": "off", // TODO re-enable this
    "no-plusplus": "off", // TODO re-enable this
    "no-multi-assign": "off", // TODO re-enable this
    "no-unused-expressions": "off", // TODO re-enable this
    "react/prop-types": "off", // TODO re-enable this
    "vars-on-top": "off", // TODO re-enable this
    "react/button-has-type": "off", // TODO re-enable this
    "react/jsx-props-no-spreading": "off", // TODO re-enable this
    "no-case-declarations": "off", // TODO re-enable this
    "react/jsx-no-constructed-context-values": "off", // TODO re-enable this
    "no-restricted-syntax": "off", // TODO re-enable this
    "no-shadow": "off", // TODO re-enable 
    "no-throw-literal": "off", // TODO re-enable this
    "no-var": "off", // TODO re-enable this
    "indent": "off", // TODO re-enable this
    "arrow-parens": "off", // TODO re-enable this
    "react/jsx-indent": "off", // TODO re-enable this
    "jsx-quotes": "off", // TODO re-enable this
    "react/jsx-indent-props": "off", // TODO re-enable this
    "import/order": "off", // TODO re-enable this
    "react/no-unknown-property": "off", // TODO re-enable this
    "react/jsx-one-expression-per-line": "off", // TODO re-enable this
    "prefer-destructuring": "off", // TODO re-enable this
    "eol-last": "off", // TODO re-enable this
    "arrow-body-style": "off", // TODO re-enable this
    "object-curly-newline": "off", // TODO re-enable this
    "no-multiple-empty-lines": "off", // TODO re-enable this
    "import/newline-after-import": "off", // TODO re-enable this
    "implicit-arrow-linebreak": "off", // TODO re-enable this
    "react/jsx-curly-newline": "off", // TODO re-enable this
    // "import/extensions": [
    //   "error",
    //   "ignorePackages",
    //   {
    //     "js": "never",
    //     "jsx": "never",
    //     "ts": "never",
    //     "tsx": "never"
    //   }
    // ]
  },
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "browser": true,
    "node": true,
  }
};