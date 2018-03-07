# builtin packages
from sys import stdout
from time import sleep
import random
import math

#additional packages > install using pip install <NAMEOFPACKAGE>
import noise
from blessings import Terminal



interval = 0.001

term = Terminal()
width = term.width
height = term.height

#helper function
#credit due to Adam Luchjenbroers on StackOverflow <3
def map(value, leftMin, leftMax, rightMin, rightMax):
    # Figure out how 'wide' each range is
    leftSpan = leftMax - leftMin
    rightSpan = rightMax - rightMin

    # Convert the left range into a 0-1 range (float)
    valueScaled = float(value - leftMin) / float(leftSpan)

    # Convert the 0-1 range into a value in the right range.
    return rightMin + (valueScaled * rightSpan)

def center():
    print(width/2)
    noise_step = 1.0

    while True:
        move = map(noise.pnoise1(noise_step, 2), -0.5, 0.5, 0, 15)

        with term.location(math.floor(width/2+move), height):
            print("   o  \n")
        with term.location(math.floor(width/2+move), height):
            print("  /|\\\n")
        with term.location(math.floor(width/2+move), height):
            print("   | \n")
        with term.location(math.floor(width/2+move), height):
            print("  / \\  \n")


        noise_step+=0.1
        sleep(0.1)

def palette_drawing():

    while True:
        for x in range(width/2, height/2):
            col = map(x, 0, width-2, 0, 2)
            print(term.color(int(x))+"/", end="")
            stdout.flush()
            sleep(1)

try:
    center()

except KeyboardInterrupt:
    print(term.normal+"bye!")

    