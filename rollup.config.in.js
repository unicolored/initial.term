import typescript from '@rollup/plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'initial-sh.ts',
  output: {
    file: 'dist/initial-sh.js',
    format: 'iife',
    name: 'InitialSh',
  },
  plugins: [typescript(), resolve()],
};
