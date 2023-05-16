

import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import {readdir, unlink} from 'fs/promises'
import { join, parse } from "path";

const clear = () => ({
  name: 'clear',
  buildStart: async () => {
    const files = await readdir('./exports')
    for (const file of files) {
      if (parse(file).ext) await unlink(join('./exports', file))
    }
  }
})
export default [{
  input: ['./src/list.ts', './src/drawer.ts', './src/controller.ts'],
  output: [{
    format: 'es',
    dir: './exports'
  }],
  plugins: [
    clear(),
    nodeResolve(),
    typescript({compilerOptions: { declaration: true, declarationDir: 'exports/types' }})
  ]
}]