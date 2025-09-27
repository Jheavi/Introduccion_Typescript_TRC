const a: string = "Hello, World!";
const b: number = 1;
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: symbol = Symbol("foo");
// const g: bigint = 100n; // esto nos dará un error porque tenemos que configurar el target de TypeScript a ES2020. Lo veremos en el siguiente apartado.
const h: any = "Hello, World!";
const i: unknown = "Hello, World!";
const j: string[] = ["Hello", "World"];
const k: Array<string> = ["Hello", "World"];
// definimos una función que recibe un number y devuelve un boolean
const l: (param: number) => boolean = (param: number) => param > 0;
