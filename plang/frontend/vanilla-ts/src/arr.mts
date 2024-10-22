type A = string[]
type B = Array<string>

const a: A = ['1', '2']
const b: B = ['1', '2']

type C = [string, string, number]
const noError: C = ['a', 'b', 1]
const error: C = ['a', 'b']

type D = [string[], number[]]
const d: D = [['a', 'b'], [1, 2]]

type F = [1, 2, 3]
const f: F = [1, 2, 3]
const errf: F = [4, 5, 6]
