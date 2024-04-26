#!/usr/bin/env python3

'''
输入圆的半径计算计算周长和面积。
'''
import math
radius = float(input('input radius: '))
perimeter = radius*2*math.pi
area = radius**2*math.pi
print(
    'Perimeter: '+'{0:.2f}'.format(perimeter)+';\n'
    'Area: '+'{0:.2f}'.format(area)+';'
)

# '''
# 输入年份判断是不是闰年。
# '''
# year = int(input('input year: '))
# is_leap = year % 4 == 0 and year % 100 != 0 or year % 400 == 0
# print(is_leap)