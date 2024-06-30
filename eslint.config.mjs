import globals from "globals";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "modules"}},
  {languageOptions: { globals: globals.browser }},
];