declare type Add = (a: number, b: number) => number;
export const add: Add = (a, b) => a + b;

declare type Logger = (msg: string) => void;
// Returns a function
export function createLogger(header: string): Logger {
	return (msg: string) => {
		console.log(`${header} ${msg}`);
	};
}

//----------------------------------------------------------------

interface A {
	x: string;
	y: string;
}

export type B = Omit<A, 'x'> & { x: number };

export const testB: B = { x: 0, y: '1' };

//----------------------------------------------------------------

interface CatArgs {
	legs: number;
}

interface FishArgs {
	fins: number;
}

type CarOrFishArgs = CatArgs | FishArgs;
type Animal = Cat | Fish;

type Type = 'Cat' | 'Fish';

class Cat {
	_legs: number;

	constructor(args: CatArgs) {
		const { legs } = args;
		this._legs = legs;
	}
}

class Fish {
	_fins: number;

	constructor(args: FishArgs) {
		const { fins } = args;
		this._fins = fins;
	}
}
export function getAnimal(type: 'Cat', args: CatArgs): Cat;
export function getAnimal(type: 'Fish', args: FishArgs): Fish;
export function getAnimal(type: Type, args: CarOrFishArgs): Animal {
	switch (type) {
		case 'Cat':
			return new Cat(args as CatArgs);
		case 'Fish':
			return new Fish(args as FishArgs);
		default:
			return undefined;
	}
}
