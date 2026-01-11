# 함수선언과 사용
def add(a, b):
    return a + b


x = 3
y = 5
print(add(x, y))  # 8을 출력


# 값에 의한 전달(불변형)
def change1(a):
    a += 3
    print(a)


change1(x)  # 6을 출력
print(x)  # 3을 출력(변하지않음)


# 참조에 의한 전달(가변형)
def change2(a):
    a[0] = "zero"
    print(a[0])


list1 = [4, 3, 5, 7, "hi"]
print(list1[0])  # 4출력
change2(list1)  # zero출력
print(list1[0])  # zero출력

# 변수의 범위
aa = 30


def cha():
    bb = 15
    # aa += 10  # 오류발생
    print(aa)  # 30 출력


cha()

# print(bb)  # 오류발생 "bb" is not defined


def chaNew():
    bb = 15
    global aa  # 전역 변수 aa를 가져온다
    aa += 10
    print(aa)  # 40 출력


chaNew()


# 클래스
class User:
    def __init__(self, name, password):
        self.name = name
        self.password = password

    def introduce(self):
        print("Hi~ i'm", self.name)

    def logout(self):
        print("logout")


# 객체 생성과 사용
juhee = User("juhee", "1234")
print(juhee.name)
juhee.introduce()


# 상속
class GuestUser(User):
    def __init__(self):
        super().__init__("guest", "guest1234")

    # init을 overriding하지 않고 적을 경우 인스턴스 생성시에 name과 password(부모클래스의 변수)를 직접 넣으면 된다


b = GuestUser()
b.logout()
