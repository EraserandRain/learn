
// 索引签名
type A = {
    [k: string]: number
}

// Record 泛型
type B = Record<string, number>

const example: A = {
    age: 30,
    score: 50
}

const example2: B = {
    age: 30,
    score: 50
}
