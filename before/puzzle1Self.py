# 줄 서있는 손님들의 모자 뒤집기
cap1 = ["F", "F", "B", "B", "B", "F", "B", "B", "B", "F", "F", "B", "F"]
cap2 = ["F", "F", "B", "B", "B", "F", "B", "B", "B", "F", "F", "F", "F"]
cap3 = ["F", "F", "B", "H", "B", "F", "B", "B", "B", "F", "H", "F", "F"]
emptyCap = []


######## 각주와 함께 보기 ########


# 함수 선언
def pleaseConform(caps):
    # 변수 선언과 초기화
    start = forward = backward = 0
    # 문자열'' 리스트[] 튜플 ()
    intervals = []
    # 변수 i가 1부터 caps의 길이까지 1씩 증가하며 아래의 코드를 반복실행한다
    for i in range(1, len(caps)):
        # caps의 시작 모자방향과 반대 방향 모자일 경우
        if caps[start] != caps[i]:
            # 리스트에 시작번호, i-1번의 번호, caps에서 시작번호의 모자방향 3가지를 튜플형태로로 저장한다
            intervals.append((start, i - 1, caps[start]))
            # 모자 방향에 따라 위의 설정한 forward, backward 변수 값을 +1 한다
            # 해당 변수는 각각 줄을 선 사람들 중 모자를 앞방향, 뒤방향으로 둔 사람들의 그룹(연속)의 개수를 의미한다
            if caps[start] == "F":
                forward += 1
            else:
                backward += 1
            # 시작번호를 바뀐 모자를 쓴 첫번째 사람의 번호로 초기화화
            start = i
    # 반복문이 종료되고, 마지막 그룹의 시작 번호와 끝번호(index이므로 길이-1), 모자방향을 저장
    intervals.append((start, len(caps) - 1, caps[start]))
    # 마지막 그룹의 방향 정보를 따로 처리하고 있음
    if caps[start] == "F":
        forward += 1
    else:
        backward += 1
    # 어떤 그룹이 적은 수인지를 flip 변수에 별도로 기록한다 적은 수의 그룹에게 모자를 뒤집으라고 하는 것이 효율적이기 때문에
    if forward < backward:
        flip = "F"
    else:
        flip = "B"
    # intervals 리스트에 저장된 것은 줄을 선 사람들의 모자 방향 별 그룹 정보이다
    # 각 그룹에 대하여 3번째 정보인(index로는 2임)  caps[start] 즉, 방향이 flip(모자를 뒤집어야하는 더 적은 수의 그룹)과 일치할 경우 아래의 조건문을 수행한다
    for t in intervals:
        if t[2] == flip:
            # n번 부터 m번 손님 모자를 뒤집어 주세요라는 내용을 출력한다
            print("People in positions", t[0], "through", t[1], "flip your caps!")


# 실행
# pleaseConform(cap1)


######## 최적화 해보기 ########
def pleaseConform2(caps):
    start = forward = backward = 0
    intervals = []
    # caps 리스트의 마지막 요소를 임의로 추가하여 for문 안의 조건문
    # if caps[start] != caps[i]:가 마지막 그룹의 경우에도 true가 되도록 만드는 것이다
    caps = caps + ["END"]
    # 이 경우 주석으로 묶인 별도의 코드 없이도 모든 그룹을 intervals에 저장할 수 있다
    for i in range(1, len(caps)):
        if caps[start] != caps[i]:
            intervals.append((start, i - 1, caps[start]))
            if caps[start] == "F":
                forward += 1
            else:
                backward += 1
            start = i
    # intervals.append((start, len(caps) - 1, caps[start]))
    # if caps[start] == "F":
    #     forward += 1
    # else:
    #     backward += 1
    if forward < backward:
        flip = "F"
    else:
        flip = "B"
    for t in intervals:
        if t[2] == flip:
            print("People in positions", t[0], "through", t[1], "flip your caps!")


# 실행
# pleaseConform2(cap1)

######## 더 간결한 알고리즘 ########
# 모자 뒤집기는 맨 앞사람의 모자 방향에 따라 결정되는 것이 핵심!
# 맨 앞사람의 모자방향 그룹이 더 적은 그룹일 가능성은 없다
# 따라서 앞사람의 모자방향에 따라 반대방향의 손님에게 모자를 뒤집어달라고 요청하면 훨씬 간결한 코드를 만들 수 있다


def pleaseConform3(caps):
    # + 는 두 개의 리스트를 합쳐서 새로운 리스트를 만들어주는 역할을 함 [] 형태로 리스트를 합쳐야함!
    caps = caps + [caps[0]]
    for i in range(1, len(caps)):
        # 이전 사람과 방향이 다름
        if caps[i] != caps[i - 1]:
            # 첫번째 사람과 방향이 다름
            if caps[i] != caps[0]:
                print("People in positions", i, end=" ")
            # 이전과 다르지만 첫번째 사람과 방향이 같음, 즉 앞번호가 앞그룹의 마지막
            else:
                print(" through", i - 1, "flip your caps!")


# pleaseConform3(cap1)


######## 연습해보기 ########
def pleaseConformPrac(caps):
    start = forward = backward = 0
    intervals = []
    caps = caps + ["END"]
    for i in range(1, len(caps)):
        if caps[start] != caps[i]:
            intervals.append((start, i - 1, caps[start]))
            if caps[start] == "F":
                forward += 1
            # elif로 조건 세부화
            elif caps[start] == "B":
                backward += 1
            start = i
    if forward < backward:
        flip = "F"
    else:
        flip = "B"
    for t in intervals:
        # H일 경우 반복문 패스
        if t[2] == "H":
            continue
        if t[2] == flip:
            # 연습1: 시작번호와 끝번호가 다를 경우 조건문을 추가하여 그룹이 1인인지 아닌지 판단
            if t[0] != t[1]:
                print("People in positions", t[0], "through", t[1], "flip your caps!")
            else:
                print("Person at position", t[0], "flip your caps!")


# pleaseConformPrac(cap1)
pleaseConformPrac(cap3)


# 연습2
def pleaseConformOnepass(caps):
    # 들어온 리스트가 비어있는지에 대한 검증
    if len(caps) == 0:
        return print("Empty List")
    caps = caps + [caps[0]]
    # 시작 구간을 저장
    first = 0
    for i in range(1, len(caps)):
        if caps[i] != caps[i - 1]:
            if caps[i] != caps[0]:
                first = i
            else:
                # 뒷번호에 대한 조건문을 추가하여 문장 출력
                last = i - 1
                if last != first:
                    print(
                        "People in positions", first, "through", last, "flip your caps!"
                    )
                else:
                    print("Person at position", first, "flip your caps!")


# pleaseConformOnepass(cap1)
# pleaseConformOnepass(emptyCap)
