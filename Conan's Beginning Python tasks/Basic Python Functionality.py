import math


#Conan Tasks

# ---- Task 1 (Calculating the areas of a cir, tri, and square) -------- #


def calcTri(b,h):
    return (1/2) * (b * h)
print ("Triangle = Base: 5, Height: 5: Output= " , calcTri(5,5))

def calcSquare(l,w):
    return l * w
print("Square = Length: 5, Width: 6: Output= " , calcSquare(5,6))

def calcCircle(r):
    return 2 * (math.pi * (r^2))
print ("Circle = radius: 4: Output = " , calcCircle(4))

# --- Task 2 (Output the average, heighest and lowest grades ---- #

grades = [15, 100, 90 , 22, 30, 40]

def findHeighest(grades):
    return print(max(grades))

findHeighest(grades)


def findLowest(grades):
    return print(min(grades))
findLowest(grades)


def findAverage(grades):
    gradeAverage = sum(grades) / len(grades)
    return print(gradeAverage)

findAverage(grades)


























