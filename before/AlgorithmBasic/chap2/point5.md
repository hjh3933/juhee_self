### 소수 판정하기

**소수**

- 소수란, 1과 자기자신만을 약수로 가지는 수
- 소수 판정: n을 1부터 n까지 나누어 나머지가 0이 되는지 확인한다. 1과 n을 제외한 수로 나눠지는 경우 소수가 아니다
- 제곱근 √n
  - 약수는 `a \* b = n` 의 형태이다
  - `a, b > √n` 일 경우 `(n = a *  b) > (√n * √n = n)`이라는 모순이 발생한다
  - 즉, 약수 a, b 둘 중 하나의 수는 반드시 √n 이하의 숫자일 수 밖에 없고, 다른 수와의 곱(몫)으로 표현되는 약수의 대칭적인 특징으로 인해 2부터 √n까지의 수만 고려하면 n이 소수인지의 여부를 빠르게 판별할 수 있다
  - 시간복잡도는 `O(n) -> O(√n)`으로 감소한다

**소수판별 프로그램**

- `math.sqrt(n)` 함수를 통해 제곱근을 구할 수 있다
- is_Prime(n) 함수는 n이 1이하의 숫자인 경우에는 false를 리턴한다
- 이후 for문을 통해 n을 2부터 √n까지의 수로 나누어 나머지가 0이 되는 경우 -> false
- √n까지의 어떤 수로도 나머지가 0이 되지 않는 경우 true를 리턴한다

```python
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True
```

- 처리시간: time 모듈을 import, `time.time()`으로 함수의 앞 뒤에 시간을 출력하도록 하고 `-` 연산을 통해 처리시간을 구할 수 있다

```python
start = time.time()
is_prime_time(100000)
end = time.time()

print("\n")
print(f"{end - start:.5f} sec")  # float형으로 소수점 5자리까지 출력, 0.19705 sec
```

**에라토스테네스의 체**

- 더 효율적으로 소수를 판별하는 알고리즘
- 지정된 범위 내에서 2로 나누어 떨어지는 수, 3으로, ... n으로 나누어 떨어지는 수들을 순차적으로 제거하는 방법이다
  <img src="./chap2_img/image1.png" width="300">
- 프로그램 작성 순서
  1. [2] 만 작성된 소수리스트를 생성하고, 검색상한을 √n으로 지정한다
  2. 2부터 n까지의 수 중에서 홀수로만 이루어진 리스트를 작성한다(2를 제외한 짝수는 소수가 될 수 없음)
  3. 홀수 리스트에 모든 요소에 대하여, 0번 요소로 나누었을 때 나머지가 0이 아닌 경우만 홀수 리스트에 다시 대입하는 과정을 반복한다(홀수리스트[0]이 검색상한을 넘어서기 전까지!)
  4. 반복할 때마다 홀수리스트의 0번 요소를 소수리스트에 추가하여 반복이 완료된 이후 소수리스트를 출력한다
- 처리시간이 `0.19705 sec -> 0.09009 sec`로 크게 감소하였다

```python
def get_prime(n):
    if n <= 1:
        return []
    prime = [2]
    limit = int(math.sqrt(n))

    # 홀수 리스트 작성 - 리스트 내포
    data = [i + 1 for i in range(2, n, 2)]
    while limit >= data[0]:
        prime.append(data[0])
        data = [j for j in data if j % data[0] != 0]
    return prime + data

start2 = time.time()
get_prime(100000)
end2 = time.time()

print("\n")
print(f"{end2 - start2:.5f} sec")  # 0.09009 sec
```

**SymPy 라이브러리**

- 코딩 테스트에서는 표준 라이브러리만 사용가능해서 사용할 수 없음
- `pip install sympy`를 통해 SymPy 라이브러리를 다운로드하면 간단하게 소수를 구할 수 있다
- `[i for i in sieve.primerange(1, n)]`: n까지의 정수 중 소수만 리스트의 요소로 반환
- `isprime(n)`: n이 소수이면 True, 아니면 False를 반환

**[실습파일](point5_ex.py)**
