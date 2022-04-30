module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --max-warnings 0', 'prettier --write'],
  '*.{css,md,yml,json}': ['prettier --write'],
}
