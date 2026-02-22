# Python fundamentals

### 1. Print statement
print("Hello, World!")

### 2. Variables and Data Types
x = 10          # integer
y = 3.14        # float
name = "Alice"  # string
is_valid = True # boolean

### 3. Lists and indexing
my_list = [1, 2, 3, 4]
print(my_list[0])      # 1
my_list.append(5)      # Add element

### 4. Dictionaries
my_dict = {"a": 1, "b": 2}
print(my_dict["a"])    # 1
my_dict["c"] = 3       # Add key-value pair

### 5. Conditional statements
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")

### 6. Loops
for i in range(3):
    print(i)           # 0, 1, 2

while x > 0:
    print(x)
    x -= 1

### 7. Functions
def greet(name):
    return f"Hello, {name}!"

print(greet("Bob"))

### 8. List comprehensions
squares = [n**2 for n in range(5)]  # [0, 1, 4, 9, 16]

### 9. Exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")

### 10. Classes
class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print(f"Hi, I'm {self.name}")

p = Person("Charlie")
p.say_hello()
