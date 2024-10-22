type FnA = (a: number, b: string) => number

const a: FnA = (x, y) => {
    return 123
}

type FnReturnVoid = () => void
type FnReturnUndefined = () => undefined
const f1 : FnReturnVoid = ()=>{
    console.log("hello");
}
const f2: FnReturnUndefined = ()=> {
    console.log("hello");
}