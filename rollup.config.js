import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
	input: "src/index.ts",
	output: {
		dir: "public",
		format: 'iife',
		sourcemap: "true",
		name: "REVS"
	},
	plugins: [
		typescript(),
		commonjs({
			include: ["src/index.js", "node_modules/canvas-render-engine-vs/**"]
		}),
		resolve({
			jsnext: true,
			main: false
		})
	]
};