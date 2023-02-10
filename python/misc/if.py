#!/usr/bin/env python3

# '''
# 英制单位与公制单位互换
# '''
# value = float(input('input length: '))
# unit = input('input unit(in or cm): ')
# if unit == 'in':
#     print(str(value)+unit+' = '+str(value*2.54)+'cm')
# elif unit == 'cm':
#     print(str(value)+unit+' = '+str('{0:.2f}'.format(value/2.54))+'in')
# else:
#     print('Error!Please input available unit.')

'''
输入三条边长如果能构成三角形就计算周长和面积
'''
import math
length = []
length.append(float(input('input a: ')))
length.append(float(input('input b: ')))
length.append(float(input('input c: ')))
length.sort()
if length[2] > length[0]+length[1]:
    print('Unavailable Triangle')
else:
    p = (length[0]+length[1]+length[2])/2
    perimeter = 2*p
    area = math.sqrt(p*(p-length[0])*(p-length[1])*(p-length[2]))
    print(
        'Perimeter: '+'{0:.2f}'.format(perimeter)+'\n'
        'Area: '+'{0:.2f}'.format(area)
    )
