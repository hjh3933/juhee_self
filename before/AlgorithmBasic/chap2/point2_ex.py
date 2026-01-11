# 1.
for i in range(1, 101):
    print(i, end=" ")
# 2.
for i in range(1, 101):
    if i % 3 == 0:
        print("Fizz", end=" ")
    else:
        print(i, end=" ")
# 3.
for i in range(1, 101):
    if i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
# 4-1.
for i in range(1, 101):
    if i % 3 == 0:
        if i % 5 == 0:
            print("FizzBuzz", end=" ")
        else:
            print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
# 4-2.
for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
