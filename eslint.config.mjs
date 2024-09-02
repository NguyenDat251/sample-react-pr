import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jest from "eslint-plugin-jest";

export default [
  { files: ["src/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { jest } },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // React version. "detect" automatically picks the version you have installed.
        // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
        // Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
      },
    },
  },
];
