let foo = require('../case.js');
let expect = require('chai').expect;

describe('function add', () => {
    function TestAdd(x) {
        let y, z
        y = x
        z = x + y
        it(`${x} + ${y} = ${z}`, () => {
            expect(foo.add(x, y)).to.be.equal(z)
        })
    }
    let x, y, z
    for (x = 1; x < 5; x++) {
        TestAdd(x)
    }
})

describe('function isEmpty', () => {
    let obj = new Object()
    it(`${obj} is Empty Object`, () => {
        expect(foo.isEmpty(obj)).true
    })
    let time = { ["8:30"]: "get up" }
    it(time + " is not Empty Object", () => {
        expect(foo.isEmpty(time)).false
    })
})