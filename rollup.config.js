import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default [
	{
		input: 'src/main.js',
	  external: ['react', 'react-dom'],
		plugins: [
			babel({
				exclude: 'node_modules/**',
				  presets: [
					["@babel/env", { "modules": false }],
					"@babel/preset-react"
				  ]
			}),
			resolve(),
			commonjs()
		],
		exports: 'named',
		output: [
			{ name: pkg.name, file: pkg.main, format: 'cjs'  },
			{ name: pkg.name, file: pkg.module, format: 'es' }
		]
	}
];