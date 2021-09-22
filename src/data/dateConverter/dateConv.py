import os
import json
from datetime import date
os.chdir('src/data/dateConverter')

f = open('1979.csv', 'r')
with open('out1.js', 'w') as out:
    array = []
    for line in f:
        dict = {}
        arr = line.split(',')
        d = date(int(arr[0].split('-')[0]),int(arr[0].split('-')[1]),int(arr[0].split('-')[2]))
        dict['date'] = d
        dict['value'] = int(arr[1][:-1])
        array.append(dict)
    json.dump('const ast79 = [', out)
    json.dump(array, out)
    json.dump(']; export default ast79;', out)
out.close()
f.close()