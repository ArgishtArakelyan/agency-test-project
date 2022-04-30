/**
 * Base Eslint Config
 */
module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base'),
    require.resolve('eslint-config-airbnb/rules/react'),
    require.resolve('eslint-config-airbnb/rules/react-a11y'),
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    document: true,
    history: true,
    window: true,
  },
  rules: {
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    // Standard Indentation of 2 spaces
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'warn',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    // Sometimes this is useful to give meaning to private props
    'no-underscore-dangle': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        // Forcing Destructuring for assignment expressions
        // can lead to un-cleaner/messier code so we turn this off.
        /* Example
          // With On
          const [_, name] = this.props.data.field.split('.')
          this.name = name;
          // With Off
          this.name = this.props.data.field.split('.')[1];
      */
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'import/prefer-default-export': 'warn',
    'import/extensions': 'off',
    // Always wrap arrow functions in parens. No x => x
    'arrow-parens': ['error', 'always'],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        // Primarily to support emotions "injectGlobal" template
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        // Allow "unused" underscore.
        // const isOld = (_name, age) => age > 1;
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // It is useful to add comments into invocation occasionally.
    'function-paren-newline': 'off',
    // Should use a common logger for logs
    // This could even be a wrapper around `console.log`
    'no-console': 'warn',
    // Inline requires can be useful in node for
    // dynamically loading a module.
    'global-require': 'off',
    // Use prettier if you want something this strict
    'lines-between-class-members': 'off',
    // Running eslint --fix with this on removes
    // comments inside of line break
    'implicit-arrow-linebreak': 'off',
    // Require consistent line-break or no line-breaks
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true },
        ObjectPattern: { consistent: true },
        ImportDeclaration: { consistent: true },
        ExportDeclaration: { consistent: true },
      },
    ],
    // Use Prettier for brace formatting
    'brace-style': 'off',
    // Should be using something like prettier for strict formatting
    'operator-linebreak': 'off',
    // Turn off Airbnb restricted syntax
    // We don't have the same restrictions.
    'no-restricted-syntax': 'off',
    // Use what makes sense.
    // Such as: Camel case for vars, snake-case for constants
    camelcase: 'off',
    // This is fine an can lead to clearer code
    // Should be case by case in a code review.
    'no-param-reassign': 'off',
    // Throwing errors is preferred but not required
    'no-throw-literal': 'off',
    'prefer-promise-reject-errors': 'off',
    // Choice to use `const` if var isn't reassigned.
    'prefer-const': [
      'error',
      {
        // Destructuring is excluded from this since you only get one keyword.
        destructuring: 'all',
      },
    ],
    // Use Typescript to catch return types.
    'consistent-return': 'off',
    'max-classes-per-file': 'off',
    // Standard Indentation of 2 spaces
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    // This is up the user, and code reviews.
    // Single lookups shouldn't require an intermediate variable
    'react/destructuring-assignment': 'off',
    // This could lead to react no rerendering when it should.
    // index should be used if nothing else unique is available.
    'react/no-array-index-key': 'warn',
    'react/require-default-props': 'off',
    // You can use jsx outside of a file.jsx file
    'react/jsx-filename-extension': 'off',
    // You would need componentDidMount setState for Server Side Rendering
    'react/no-did-mount-set-state': 'off',
    // This is fine for simple text.
    // Use prettier to strict format your code
    'react/jsx-one-expression-per-line': 'off',
    // The JSX A11y Docs explain that Static elements such as <div> and <span>
    // should not have mouse/keyboard event listeners.
    // Instead use something more semantic, such as a button or a link.
    // However, there are often times when you truly do need to interact with
    // the layout and things like inputs and buttons are not suitable.
    // (e.g. - drag and drop elements in an admin panel, loosing focus on a modal or popover, etc.)
    'jsx-a11y/no-static-element-interactions': 'off',
    // Allowing special link prop "to" not to throw error. (https://github.com/ReactTraining/react-router/issues/5598)
    // Allow prop spreading
    'react/jsx-props-no-spreading': 'off',
    // Either syntax is fine
    'react/jsx-fragments': 'off',
    // No need to force placement
    'react/static-property-placement': 'off',
    // Use Prettier
    'react/jsx-curly-newline': 'off',
    // Doesn't really matter where you initialize state.
    // If you are trying the catch state errors, use Typescript.
    'react/state-in-constructor': 'off',
    // Enable rules of hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    // Typescript handles module resolutions
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    // Use Typescript's no-use-before-define to avoid false positives
    'no-use-before-define': 'off',
    // Use Typescript's no-shadow to avoid false positives,
    'no-shadow': 'off',
  },
};
