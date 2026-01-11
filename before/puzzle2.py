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


def bestTimeToParty(schedule):
    start = sched[0][0]
    end = sched[0][1]
    for c in schedule:
        start = min(c[0], start)
        end = max(c[1], end)
    count = celebrityDensity(schedule, start, end)
    maxCount = 0
    for i in range(start, end + 1):
        if count[i] > maxCount:
            # 함수를 활용하는 방법
            # maxCount = max(count[start:end+1])
            # time = count.index(maxCount)
            maxCount = count[i]
            time = i
    print(
        "Best time to attend the party is at",
        time,
        "o'clock",
        ":",
        maxCount,
        "celebrities will be attending!",
    )


def celebrityDensity(sched, start, end):
    count = [0] * (end + 1)
    for i in range(start, end + 1):
        count[i] = 0
        for c in sched:
            if c[0] <= i and c[1] > i:
                count[i] += 1
    return count


bestTimeToParty(sched)
