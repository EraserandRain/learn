#!/usr/bin/env python3

class Deco(object):
    def __init__(self, func):
        self.func = func

    def __call__(self):
        print('halo')
        self.func()


@Deco
def foo():
    print('message')


if __name__ == "__main__":
    foo()
