# check1
def year(n):
    if n % 400 == 0:
        return True
    elif (n % 100 != 0) and (n % 4 == 0):
        return True
    else:
        return False


for i in range(1950, 2051):
    if year(i):
        print(i, end=" ")

# check2
print("\n")
king_years = {
    1450: "문종",
    1418: "세종",
    1400: "태종",
    1398: "정종",
    1392: "태조",
}


def who_regions(year):
    for key in sorted(king_years.keys(), reverse=True):
        if year >= key:
            king = king_years[key]
            print(f"{king} {year - key + 1}년")
            break


who_regions(1400)  # 태종 1년
who_regions(1399)  # 정종 2년
