class Person:
    def __init__(self, name):
        self.otroname = name

    def say_hi(self):
        print('Hello, my name is', self.otroname)

Person('Vanessa').say_hi()

