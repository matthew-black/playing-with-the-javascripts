# Javascript Drills

At this point, we should be fairly comfortable solving problems in Ruby.  Sure, we sometimes need to look up methods and consult documentation, but we should have a solid grasp of Ruby syntax.  In other words, the language itself shouldn't be a roadblock.

We want to begin building familiarity with writing JavaScript.  This challenge presents a series of problems to give us practice using JavaScript to solve problems.

### Jasmine Tests
Tests have been written to provide feedback on whether our code is behaving as desired.  The tests use the Jasmine testing library.  We won't need to write tests, only read them.  We'll run the tests in the browser.  Instructions will be provided later.


## Releases
### Release 0:  Rectangle Functions
We'll begin by writing four functions related to rectangles:

* `area()` calculates the area of a rectangle.
* `perimeter()` calculates the perimeter of a rectangle.
* `diagonal()`, calculates the length of a rectangle's [diagonal](http://www.mathopenref.com/rectanglediagonals.html).
* `isSquare()` returns `true` or `false` depending on whether a rectangle is a square.

For our purposes, a rectangle is represented as a JavaScript object with two properties, `width` and `height`. Here's an example:

```javascript
var rectangle = { width: 10, height: 20 };
```

The tests are written in `spec/rectangle_spec.js`, and we'll write our code in `js/rectangle.js`.

To run the tests, open `RectangleSpecRunner.html` in the browser.


### Release 1:  A Valid Triangle
Write a function `validTriangle()` which takes as its input three
non-negative numbers.  Each number represents the length of a side of a triangle.  The function returns `true` if the three side lengths could
form a triangle and `false` otherwise.

For example:

```javascript
validTriangle(0,0,0) 
// => false                     a triangle can't have 0-length sides
validTriangle(1,1,1) 
// => true                      an equilateral triangle
validTriangle(3,4,5) 
// => true                      a right triangle
validTriangle(4,3,5) 
// => true                      the same right triangle
validTriangle(5,3,4) 
// => true                      the same right triangle
validTriangle(10, 10, 100) 
// => false                     no such triangle exists
```

The tests are written in `spec/triangle_spec.js`, and we'll write our code in `js/triangle.js`.

To run the tests, open `TriangleSpecRunner.html` in the browser.


*Note:*  The arguments don't correspond to specific sides.  Don't worry about handling negative inputs: garbage in, garbage out.


### Release 2:  Totals and Averages
We're going to write some functions that calculate values from an array of numbers:

1. `total()` sums all the values in the array.
2. `mean()` calculates the [mean][] of the values in the array.
3. `median()` calculates the [median][] of the values in the array.
4. `mode()` returns an object representing the [mode(s)][mode] of the
   array with the property being the mode and the value being the frequency.

The tests are written in `spec/average_spec.js`, and we'll write our code in `js/average.js`.

To run the tests, open `AverageSpecRunner.html` in the browser.


### Release 3: Pad an Array
Write a `pad()` function.  The function accepts between two and three arguments:  an array, a non-negative integer, and an optional value.  The array represents the starting point for the padded array.  The integer represents the minimum length of the returned array.  The optional value represents the value to insert if the size of the input array needs to be increased.  If the array's length is less than the minimum size, `pad()` returns a new array padded with the pad value up to the minimum size.

For example:

```javascript
var fruit = ["apple", "banana"];

pad(fruit, 5);           
// => ["apple", "banana", null, null, null]
pad(fruit, 5, "orange");           
// => ["apple", "banana", "orange", "orange", "orange"]
```


If the minimum size is less than or equal to the length of the input array, `pad()` returns an array with the same elements as the input array:

```javascript
var fruit = ["apple", "banana"];

pad(fruit, 1);
// => ["apple", "banana"]
```


In either case, `pad()` always returns a new object.  It should not modify the original array .

The tests are written in `spec/pad_spec.js`, and we'll write our code in `js/pad.js`.

To run the tests, open `PadSpecRunner.html` in the browser.


### Release 4:  Count Between
Write a function `countBetween()` which takes three arguments as input:

1. An array of integers: `[0, 2, 4, 7, 3, 1]`
2. A lower bound: `3`
3. An upper bound: `7`

The function returns the number of integers in the array that
are between the two bounds, including the bounds.  It should return 0 if the array is empty.

The tests are written in `spec/count_between_spec.js`, and we'll write our code in `js/count_between.js`.

To run the tests, open `CountBetweenSpecRunner.html` in the browser.


### Release 5:  Factorial
Write a `factorial` function which takes as its input a non-negative integer and calculates the factorial of that number.  The [factorial][] of a number is the product of all integers from 1 up to that number.  The factorial of 0 is defined to be 1.

For example:

```javascript
factorial(0)
// => 1
factorial(2)
// => 2             2 * 1 = 2
factorial(5) 
// => 120           5 * 4 * 3 * 2 * 1 = 120
```

The tests are written in `spec/factorial_spec.js`, and we'll write our code in `js/factorial.js`.

To run the tests, open `FactorialSpecRunner.html` in the browser.


### Release 6:  Longest String
Write a function `longestString()` which takes as its input an array of
strings and returns the longest string in the array.  If the input array is empty, `longestString()` should return `null`.

For example:

```javascript
longestString([])
// => null
longestString(['cat', 'applesauce', 'apples'])
// => "applesauce"
```

The tests are written in `spec/longest_string_spec.js`, and we'll write our code in `js/longest_string.js`.

To run the tests, open `LongestStringSpecRunner.html` in the browser.


### Release 7:  Times Table
Write a function called `timesTable()` which takes as its input an integer.  The integer represents a number of rows and columns in the times table. The method returns a string representing a times table with that number of rows and columns.

In the returned string, the values in the times table can be separated by any number of spaces or tabs, but each row must be on a new line.  It's ok if the columns don't perfectly line up.

For example, `timesTable(5)` should return a string that if printed would output following out to the screen:

```
1   2   3   4   5
2   4   6   8   10
3   6   9   12  15
4   8   12  16  20
5   10  15  20  25
```

The tests are written in `spec/times_table_spec.js`, and we'll write our code in `js/times_table.js`.

To run the tests, open `TimesTableSpecRunner.html` in the browser.


### Release 8:  Guessing Game
In this release we're going to write a constructor function to create custom `GuessingGame` objects.  We'll initialize new guessing games by passing in an integer called `answer`.

Define an instance method `guess()` which takes an integer called `guess`
as its input. `guess()` should return the string `'high'` if the `guess` is
larger than the `answer`, `'correct'` if the `guess` is equal to the `answer`, and `'low'` if the `guess` is lower than the `answer`.

Define an instance method `isSolved()` which returns `true` if the
most recent `guess` was correct and `false` otherwise.

For example:

```javascript
var game = new GuessingGame(10);

game.isSolved();   
// => false
game.guess(5);     
// => 'low'
game.guess(20);    
// => 'high'
game.isSolved();   
// => false
game.guess(10);    
// => 'correct'
game.isSolved()    
// => true
```


## Conclusion
How was working in JavaScript?  Did it feel different than working in Ruby?  If so, why?  Do we need to write more JavaScript code to build familiarity with the language?


[factorial]: http://en.wikipedia.org/wiki/Factorial
[mean]: https://en.wikipedia.org/wiki/Arithmetic_mean
[median]: https://en.wikipedia.org/wiki/Median
[mode]: https://en.wikipedia.org/wiki/Mode_(statistics)
