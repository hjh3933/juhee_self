sched = [
    (6, 8),
    (6, 12),
    (6, 7),
    (7, 8),
    (7, 10),
    (8, 9),
    (8, 10),
    (9, 12),
    (9, 10),
    (10, 11),
    (10, 12),
    (11, 12),
]

sched2 = [
    (6.0, 8.0),
    (6.5, 12.0),
    (6.5, 7.0),
    (7.0, 8.0),
    (7.5, 10.0),
    (8.0, 9.0),
    (8.0, 10.0),
    (9.0, 12.0),
    (9.5, 10.0),
    (10.0, 11.0),
    (10.0, 12.0),
    (11.0, 12.0),
]

##### 각주와 같이 보기 #####


def bestTimeToParty(schedule):
    # 첫번째 튜플값으로 초기화
    start = sched[0][0]
    end = sched[0][1]
    # 전체 리스트를 돌면서 가장 빠른 입장시간과 가장 마지막 퇴장시간을 저장
    for c in schedule:
        start = min(c[0], start)
        end = max(c[1], end)
    # 시간별 참석자 연예인 수를 저장하는 count 리스트를 별도의 함수로 받아옴
    count = celebrityDensity(schedule, start, end)
    maxCount = 0
    # 최소, 최대 시간 범위의 count 리스트값 중 가장 큰 값을 찾아 maxCount에 저장
    for i in range(start, end + 1):
        if count[i] > maxCount:
            # 함수를 활용하는 방법
            # maxCount = max(count[start:end+1])
            # time = count.index(maxCount)
            maxCount = count[i]
            time = i
    # 해당 시간과 연예인 수에 대한 정보를 담은 문장을 출력
    print(
        "Best time to attend the party is at",
        time,
        "o'clock",
        ":",
        maxCount,
        "celebrities will be attending!",
    )


def celebrityDensity(sched, start, end):
    # 길이가 end+1인 count 리스트 생성하고 모두 0으로 초기화
    count = [0] * (end + 1)
    # for문을 통해 count리스트의 값을 0으로 초기화(명시적으로 초기화하는것 위에서 이미 0으로 초기화되어있긴함)
    for i in range(start, end + 1):
        count[i] = 0
        # sched 리스트의 입장시간이 i보다 빠르고 퇴장시간이 i보다 느리면 count[i]에 +1을 하여 참석중인 연예인 수를 추가함
        for c in sched:
            if c[0] <= i and c[1] > i:
                count[i] += 1
    return count


bestTimeToParty(sched)

##### 더 간결하게 수정해보기 #####
# 위의 코드는 시간대별 정보를 담은 리스트를 생성하기 때문에 입력 데이터의 시간이 분, 초로 달라지면 함수를
# 수정해야한다는 문제가 있다 아래의 코드는 연예인들의 참가시간별로 겹치는 인원수를 카운트해서 입력 데이터의 시간대로
# 리스트를 생성하고 최대값(인원수)이 되는 시간대를 별도로 추출하기 때문에 입력데이터가 변하더라도 함수의 수정없이
# 가장 많은 연예인이 참석하는 시간을 그대로 출력할 수 있다는 장점이 있다


def bestTimeToPartySmart(schedule):
    # 참가시간, 퇴장시간을 저장할 리스트
    times = []
    for c in schedule:
        times.append((c[0], "start"))
        times.append((c[1], "end"))
    # 참가시간 순으로 정렬
    sortList(times)
    # 최대 참석 인원과 해당하는 시간을 구하는 함수를 통해 값을 출력
    maxCount, time = chooseTime(times)
    print(
        "Best time to attend the party is at",
        time,
        "o'clock",
        ":",
        maxCount,
        "celebrities will be attending!",
    )


# 정렬 함수
def sortList(tlist):
    # 시간 리스트의 모든 요소에 대하여 중첩 for문을 통해 빠른시간 순으로 정렬
    for ind in range(len(tlist) - 1):
        iSm = ind
        for i in range(ind, len(tlist)):
            if tlist[iSm][0] > tlist[i][0]:
                iSm = i
        # 두 요소를 바꾸는 연산자
        tlist[ind], tlist[iSm] = tlist[iSm], tlist[ind]


def chooseTime(times):
    # 시간대별 인원수를 리스트값에 따라 계속해서 변동하며 기록
    rcount = 0
    # 최대 인원수
    maxCount = time = 0
    for t in times:
        if t[1] == "start":
            rcount = rcount + 1
        elif t[1] == "end":
            rcount = rcount - 1
        # 특정 시간대의 인원수가 최대 인원수를 넘어서는 시점에 maxCount를 새로 갱신
        # 해당 시간대 정보를 time 변수에 저장
        if rcount > maxCount:
            maxCount = rcount
            time = t[0]
    return maxCount, time


bestTimeToPartySmart(sched2)
