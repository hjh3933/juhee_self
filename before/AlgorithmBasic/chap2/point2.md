### FizzBuzz

**FizzBuzz문제**

- 1부터 100까지의 정수를 순서대로 출력하되, 3의 배수일 경우 Fizz, 5의 배수일 경우 Buzz, 3과 5의 공배수일 경우 FizzBuzz를 출력하도록 한다
- 반복문과 조건문을 사용하는 기초적인 알고리즘 문제이다
- 순차적으로 코드를 작성해나가며 문제를 풀 수 있다

**1. 100까지의 정수 출력하기**

- for문을 사용해 print()하여 출력한다
- range(a,b)는 마지막 수를 포함하지 않기 때문에 b는 실제 출력할 수의 +1로 설정해야한다
- print()에서 `end=" "`를 사용하여 줄바꿈 없이도 공백을 통해 여러개의 출력값을 구분할 수 있다

```python
   for i in range(1, 101):
       print(i, end=" ")
```

**2. 3의 배수인 경우 Fizz 출력하기**

- if문을 통해 조건을 추가한다
- `i % 3` 나머지 연산을 통해 나머지가 0인 경우 3의 배수인 것을 확인할 수 있다
- else문을 통해 조건에 해당하지 않는 경우 숫자를 출력하도록 한다

```python
   for i in range(1, 101):
    if i % 3 == 0:
        print("Fizz", end=" ")
    else:
        print(i, end=" ")
```

**3. 5의 배수인 경우 Buzz 출력하기**

- elif문을 통해 순차적으로 적용할 조건을 제시하고 조건에 맞게 처리할 수 있다
- `i % 5` 나머지 연산을 통해 나머지가 0인 경우 5의 배수인 것을 확인할 수 있다
- 다만 아래의 elif 조건문은 if문 조건에 맞지 않는 즉, 3의 배수가 아닌 숫자들만을 대상으로 처리하기 때문에 3과 5의 공배수인 경우는 해당 조건문을 거치지 않는다

```python
   for i in range(1, 101):
    if i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
```

**4. 3과 5의 공배수인 경우 FizzBuzz 출력하기**

- 첫번째 방법: 3의 배수인 경우인 if 실행문에서 다시 한번 if문을 사용하여 5의 배수인 경우 FizzBuzz를, 아닌 경우 Fizz를 출력하도록 한다
- 올바르게 결과를 출력하지만 더 복잡한 조건을 가진 문제의 경우 계속해서 if문을 중첩해 표현하는 것은 코드를 알아보기 어렵게 만들 수 있다

```python
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
```

- 두번째 방법: 3과 5의 공배수라는 특수한 경우를 `and`연산자를 사용해 **먼저** 처리하여 하나의 if문으로 출력한다
- 들여쓰기가 줄어들어 코드를 읽고 이해하기 쉽다

```python
for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz", end=" ")
    elif i % 3 == 0:
        print("Fizz", end=" ")
    elif i % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(i, end=" ")
```

**[실습파일](point2_ex.py)**
