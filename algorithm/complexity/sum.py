#!/usr/bin/python3

# T(n) = O(n)
def sum(n):
    sum = 0
    for i in range(0,n+1):
        sum += i
    return sum
    pass

# T(n) = O(n^2)
def cal(n):
    sum = 0
    for i in range(0,n):
        for j in range(0,n):
            sum += i*j
    return sum
    pass


if __name__ == '__main__':
    print(sum(5))
    print(cal(4))
