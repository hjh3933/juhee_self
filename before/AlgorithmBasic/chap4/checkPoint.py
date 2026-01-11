# check1
# 10층 건물에서 1층에서 10층까지 이동할 때, 정지하는 층의 조합을 구하는 문제
case = []
goal = 10


def elevator(current, path):
    if current == goal:
        case.append(path[:])
        return
    for next_floor in range(current + 1, 11):
        path.append(next_floor)
        elevator(next_floor, path)
        path.pop()


elevator(1, [1])
print(len(case))

# check2
# 도시이름과 인구수가 주어진 표를 보고, 도시를 3개 선택하여 인구의 합계가 500만에 가장 가까운 조합과 그 인구수를 구하시오
cities = [
    ("부산광역시", 3416918),
    ("대전광역시", 1525849),
    ("울산광역시", 1147037),
    ("경상남도 창원시", 1044579),
    ("경기도 부천시", 828947),
    ("전라북도 전주시", 654963),
    ("경기도 안양시", 565392),
    ("경상북도 포항시", 506494),
    ("인천광역시", 2925967),
    ("광주광역시", 1496172),
    ("경기도 고양시", 1068641),
    ("경기도 성남시", 942649),
    ("경기도 화성시", 818760),
    ("충청남도 천안시", 652845),
    ("경상남도 김해시", 542713),
    ("제주시", 489202),
    ("대구광역시", 2453041),
    ("경기도 수원시", 1193894),
    ("경기도 용인시", 1061440),
    ("충청북도 청주시", 840047),
    ("경기도 남양주시", 702545),
    ("경기도 안산시", 650599),
    ("경기도 평택시", 521642),
]
count = 3
closest_diff = 5000000
goal = 5000000
resultList = []
resultSum = 0


# group = [(),(),()]
def calculator(current, group):
    global closest_diff, resultList, resultSum
    if len(group) == 3:
        sum = group[0][1] + group[1][1] + group[2][1]
        diff = abs(goal - sum)
        if closest_diff > diff:
            closest_diff = diff
            resultSum = sum
            resultList = group[:]
        return
    for i in range(current, len(cities)):
        group.append(cities[i])
        calculator(i + 1, group)
        group.pop()


calculator(0, [])
# 출력
print(resultList)
print(f"{resultSum}명")
