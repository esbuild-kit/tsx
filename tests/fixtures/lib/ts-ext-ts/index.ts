import fs from 'node:fs';

console.log(
	'loaded ts-ext-ts/index.ts',
	Boolean(fs),
	/:6:16/.test((new Error()).stack),
	typeof __dirname,
);

function valueNumber(value: number) {
	return value;
}

export default valueNumber(1234);
