# RockaRolla

RockaRolla is a concatenative stack-based die-rolling domain-specific
language and runtime.

**Note:** This documentation is currently tentative of a library in progress.

## The Stack
### Reading Operators

In the [list of operators](#operators), there will be a line indicating
how it's meant to be used.
Using [`d`](#d) for example, we have the line:

    d ( n n -- r )

* `d` is the operator itself.
  Inside the parentheses are the arguments along with their types.
* The first `n` is the second value on the stack.

## Operators

### Math
#### `+`
    + ( n n -- n )

Pops the top two numbers from the stack, adds them, and pushes the result.

#### `-`
    - ( n n -- n )

Pops the top two numbers from the stack, subtracts them, and pushes the result.

#### `*`
    * ( n n -- n )

Pops the top two numbers from the stack, multiplies them, and pushes the result.

#### `/`
    / ( n n -- n )

Pops the top two numbers from the stack and pushes the product.

#### `%`
    % ( n n -- n )

Pops the top two numbers from the stack and pushes the remainder.
This is also known as the modulo operator.


### Dice
#### `d`
    d ( n n -- r )

Rolls a die.
The result is a die roll, not a result.
Depending on the game played, a roll may be adjusted,
such as the "roll 4d6, keep highest 3" attribute roll
for _Pathfinder_.

#### `sum`
    sum ( r -- n )

Pushes the sum of the die roll

### Stack
#### Pushing

Pushing a value onto the stack is as simple as declaring it.
For example, `3 4 +` pushes `3` and then `4` at the top.
When `+` or any operator is pushed, however, it then executes
on its operands and, if applicable, pushes the result on top.

#### `pop`
    pop ( -- )

Removes the value at the top of the stack.

#### `copy`
    copy ( x -- x x )

Take the value on top of the stack and make a copy of it.

## Examples

* _Old-School Essentials_: `3 6 d sum`
* _D&D 3-5e_, _Pathfinder_: `4 6 d 3 kh sum`
* Advantage rolls in _D&D_ 5e: `2 20 d 1 kh sum`
