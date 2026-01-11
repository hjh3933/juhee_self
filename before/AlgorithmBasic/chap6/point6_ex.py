text = list("DYITBOOK DYSHOP")
pattern = list("DYS")
skip = {}

for i in range(len(pattern) - 1):
    skip[pattern[i]] = len(pattern) - i - 1

# patter의 마지막 요소 인덱스
i = len(pattern) - 1

while i < len(text):
    match = True
    for j in range(len(pattern)):
        # 뒤에서부터 반복문을 통해 하나씩 앞으로 이동하며 비교한다
        if text[i - j] != pattern[len(pattern) - 1 - j]:
            # 일치하지 않으면 바로 for문을 나간다
            match = False
            break
    # patter의 모든 요소 일치 = match가 True
    if match:
        # i는 patter의 맨 뒷자리이므로 len(pattern)만큼 빼고 +1을 한 위치 출력(시작위치)
        print(i - len(pattern) + 1)
        break
    # 일치하지 않는 경우(for문 탈출), text[i]가 D, Y 중에 하나면 해당하는 만큼(skip에 미리 저장해둔 대로) 건너뜀
    if text[i] in skip:
        i += skip[text[i]]
    # S, 기타 문자인 경우 패턴의 문자 수만큼 건너뜀
    else:
        i += len(pattern)
