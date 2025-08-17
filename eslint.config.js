// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      // ❌ Block console.log
      // ✅ Allow console.warn & console.error
      "no-console": ["error", { allow: ["warn", "error"] }],
      // Optional: remove unused variable warnings
      // "no-unused-vars": "off"
    }
  }
];