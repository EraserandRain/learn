#!/usr/bin/env python3

# '''
# 输出乘法口诀表(九九表)
# '''
# for i in range(1,10,1):
#     for j in range(1,10,1):
#         # print(str(i)+'*'+str(j)+'='+str(i*j))
#         print('%d*%d=%d' % (i,j,i*j))

# '''
# 输入一个正整数判断它是不是素数
# '''
# from math import sqrt
# num = int(input('input positive int: '))
# end = int(sqrt(num))
# if num > 0:
#     for i in range(2, int(end+1), 1):
#         if num % i == 0:
#             print('%d is not prime number.' % num)
#             exit()
#         else:
#             continue
#     print('%d is prime number.' % num)
# else:
#     print('Please input positive int.')

# '''
# 输入两个正整数计算最大公约数(greatest common divisor,gcd)和最小公倍数(least common multiple,lcm)
#     -- lcm = num1 * num2 / gcd
# '''
# def gcd(a, b):
#     return gcd(b, a % b) if a % b else b
# def lcm(a, b):
#     return a*b/gcd(a, b)
# num1 = int(input('input num1 (positive int): '))
# num2 = int(input('input num2 (positive int): '))
# print('GCD is %d' % gcd(num1, num2))
# print('LCM is %d' % lcm(num1, num2))

'''
打印三角形图案
'''


def printTriangle():
    for i in range(row):
        for _ in range(i+1):
            print('*', end='')
        print()
    print()
    for i in range(row):
        for j in range(row):
            print(' ', end='') if j<row-i-1 else print('*', end='')
        print()
    print()
    for i in range(row):
        for _ in range(row-i-1):
            print(' ',end='')
        for _ in range(2*i+1):
            print('*',end='')
        print()


row = int(input('input row: '))
printTriangle()
