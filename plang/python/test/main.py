#!/usr/bin/env python3
class Student(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def hello(self):
        print(f"my name is {self.name},{self.age} years old")


if __name__ == "__main__":
    jack = Student('Jack', 18)
    jack.hello()
