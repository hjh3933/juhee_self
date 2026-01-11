### 거스름돈 계산하기

**1. 거스름돈 계산**

- 상품의 가격과 지불 금액의 차액(거스름돈)을 구하고 해당 거스름돈을 화폐단위로 나누어 거스름돈의 최소 매수를 출력하는 문제이다
- `input('사용자에게 표시될 문장')` 함수를 통해 키보드로 입력값을 받을 수 있다. 입력값은 문자열이기 때문에 거스름돈 계산 시에는 형변환이 필요하다

```python
insert_price = input("insert: ")
product_price = input("product: ")
change = int(insert_price) - int(product_price)
print(change)
```

**2. 화폐단위 별 매수 출력**

- 5000, 1000, 500, 100, 50, 10, 5, 1원의 단위가 존재한다고 가정한다
- 첫번째 방법: 큰 단위부터 거스름돈의 정수 몫(매수), 나머지(new 거스름돈)를 계산해 내려가면서 매수를 출력한다
- `//`,`%` 연산을 사용, 코드가 길어지고 반복 작업이 계속되는 양상을 보인다

```python
r5000 = change // 5000  # 매수
q5000 = change % 5000  # 나머지
print("5000: " + str(r5000))

r1000 = q5000 // 1000  # 매수
q1000 = q5000 % 1000  # 나머지
print("1000: " + str(r1000))

# ...1원까지 반복
```

- 두번째 방법: 화폐단위를 리스트의 각 요소로 설정하고 반복문을 통해 모든 화폐단위에 대해 순차적으로 몫과 나머지를 계산, 출력한다
- 화폐단위의 추가, 삭제 등의 수정이 쉽고 코드가 훨씬 간결해 이해하기 쉬워진다

```python
coin = [5000, 1000, 500, 100, 50, 10, 5, 1]
for i in coin:
    r = change // i
    change %= i  # 계속 갱신된다
    print(str(i) + ": " + str(r))
```

**3. 잘못된 입력 처리**

- 상품가격보다 낮은 금액을 지불할 경우 또는 30,000과 같이 문자형식을 입력할 경우 계산 도중 오류가 발생할 수 있기 때문에 실행 전에 미리 처리를 해주어야 한다
- 책에서는 `isdecimal()` 메서드로 정수 입력값이 맞는지 검증하고, 잘못된 입력값일 경우 `import sys` 모듈을 사용하여 코드를 강제 종료하였다.

```python
import sys  # 보통 import문은 코드 맨 위에 작성함

# 1번 코드의 수정
insert_price = input("insert: ")
if not insert_price.isdecimal():
    print("정수를 입력하세요")
    sys.exit()

product_price = input("product: ")
if not product_price.isdecimal():
    print("정수를 입력하세요")
    sys.exit()

change = int(insert_price) - int(product_price)
if change < 0:
    print("금액이 부족합니다")
    sys.exit()
```

**4. divmod() 함수 활용**

- `divmod(a,b)`를 입력하면 각각 `a//b`와 `a%b`의 결과를 한번에 출력하는 함수이다
- `r, change = divmod(a, b)`는 계산된 몫과 나머지를 r과 change 변수에 대입한다
- 파이썬의 divmod() 함수를 사용하여 코드를 아래와 같이 수정할 수 있다

```python
for i in coin:
    r, change = divmod(change, i)
    print(str(i) + ": " + str(r))
```

**[실습파일](point3_ex.py)**
