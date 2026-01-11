### 완전 탐색 알고리즘

**특정 문자열 찾기**

- 긴 문장에서 특정 문자열을 찾을 때, 검색엔진의 경우 빠른 검색을 제공하기 위해 N-gram등의 방법을 사용한다
- N-gram: 주어진 문장을 연속된 n개의 문자로 분할해 인덱스를 만드는 방법
  ex) "나는 누굴까?", n=2 -> "나는", "는 ", " 누", "누굴", "굴까", "까?"
- 앞에서부터 차례대로 일치하는 문자열을 찾는 방법 -> 검색대상 `텍스트`, 찾아낼 문자열 `패턴`
  ex) 텍스트: "DYITBOOK DYSHOP", 패턴 "DYS" 찾기
- 완전탐색 알고리즘: `Brute-force algorithm`, 무식하게 힘을 사용하는 방법

**알고리즘 구현하기**

- list(str): 문자열을 한 문자씩 저장한 리스트로 변환
- 일치여부 match를 True로 설정하고 중첩 반복문에서 일치여부를 검사하여 불일치하는 경우 False로 변경하도록함
- patter리스트의 모든 요소가 연속적으로 일치하는 경우 if match를 통해 위치를 출력한다
- 확실하고 간단하지만, 데이터의 크기가 커지는 경우 시간이 오래 걸린다

```python
for i in range(len(text)):
    match = True
    for j in range(len(pattern)):
        if text[i + j] != pattern[j]:
            match = False
            break
    if match:
        print(i)
        break
```

**[실습파일](point5_ex.py)**
