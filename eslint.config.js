import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignora a pasta "dist" no lint
  { ignores: ['dist'] },

  {
    // Configurações para arquivos JavaScript e JSX
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Suporte ao ES2020
      globals: globals.browser, // Globais do ambiente de navegador
      parserOptions: {
        ecmaVersion: 'latest', // A versão mais recente do ECMAScript
        ecmaFeatures: { jsx: true }, // Habilita suporte a JSX
        sourceType: 'module', // Suporte a ES Modules
      },
    },
    settings: {
      react: { version: '18.3' }, // Define a versão do React
    },
    plugins: {
      react, // Plugin para regras do React
      'react-hooks': reactHooks, // Plugin para hooks do React
      'react-refresh': reactRefresh, // Plugin para React Refresh
    },
    rules: {
      // Regras recomendadas pelo ESLint e pelos plugins utilizados
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Regras específicas personalizadas
      'react/jsx-no-target-blank': 'off', // Desativa o bloqueio de _blank sem rel="noopener"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportação de constantes
      ],

      // Adiciona regra personalizada para ignorar React no no-unused-vars
      'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }],
    },
  },
];
