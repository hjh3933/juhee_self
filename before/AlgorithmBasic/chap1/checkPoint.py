# check1
x = 3


def calc(x):
    x += 4
    return x


print(x)
print(calc(x))
print(x)

# check2
a = [3]


def calc1(a):
    a[0] += 4
    return a


print(a)
print(calc1(a))
print(a)

# check3
b = [3]


def calc2(b):
    b = [4]
    return b


print(b)
print(calc2(b))
print(b)
