v = int(input())
t= int(input())

if(v>0):
    m = (0 + v * t) % 109
else:
    m = (109 + v * t) % 109


print(m)