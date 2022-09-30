// Count 1+..+n
// T(n) = O(n)
function sum(n) {
    let sum = 0
    let i = 1
    for (; i <= n; i++) {
        sum += i
    }
    return sum
}

// Count 
// T(n) = O(n^2)
function cal(n) {
    let sum = 0 // 1
    let i = 1   // 1 
    for (; i <= n; ++i) { // n
        let j = 1         // n
        for (; j <= n; ++j) { // n^2
            sum += i * j      // n^2
        }
    }
    return sum
}




// Main
// console.log(sum(5))
console.log(cal(2))