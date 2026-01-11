# 001
n = input()
numbers = list(input())
sum = 0

for i in numbers:
    sum += int(i)

print(sum)

# 002
n = input()
mylist = list(map(int, input().split()))
mymax = max(mylist)
sum = sum(mylist)

print(sum * 100 / mymax / int(n))
