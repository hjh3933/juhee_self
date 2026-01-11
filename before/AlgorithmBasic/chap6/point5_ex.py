# 완전탐색 알고리즘
text = list("DYITBOOK DYSHOP")
pattern = list("DYS")

for i in range(len(text)):
    match = True
    for j in range(len(pattern)):
        # 일치하지 않으면 False로 변경 후 중단, 위의 for문에 의해 다음 요소부터 재검색
        if text[i + j] != pattern[j]:
            match = False
            break
    # 모든 문자가 일치하면 출력
    if match:
        print(i)
        break
