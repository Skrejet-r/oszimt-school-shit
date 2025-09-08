
## if-else Statement
The `if-else` statement is used to execute a block of code based on whether a condition evaluates to true or false.

### Syntax:
```java
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

### Example:
```java
int number = 10;

if (number > 0) {
    System.out.println("The number is positive.");
} else {
    System.out.println("The number is not positive.");
}
```

## else if Ladder
The `else if` ladder allows testing multiple conditions. If one condition evaluates to true, its corresponding block executes, and the rest are skipped.

### Syntax:
```java
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if none of the above conditions are true
}
```

### Example:
```java
int number = 0;

if (number > 0) {
    System.out.println("The number is positive.");
} else if (number < 0) {
    System.out.println("The number is negative.");
} else {
    System.out.println("The number is zero.");
}
```

## switch-case Statement
The `switch` statement provides a more readable alternative to the `if-else` ladder when evaluating a single variable against multiple possible values.

### Syntax:
```java
switch (variable) {
    case value1:
        // Code to execute if variable equals value1
        break;
    case value2:
        // Code to execute if variable equals value2
        break;
    default:
        // Code to execute if variable does not match any case
}
```

### Example:
```java
int day = 3;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}
```

### Key Points:
1. **if-else**: Used when you need to check conditions that might not be related.
2. **else if ladder**: Useful for checking multiple, mutually exclusive conditions.
3. **switch**: Ideal for checking a single variable against a list of discrete values, especially for enums or integers.
4. **break**: Essential in `switch` to prevent fall-through (execution of subsequent cases).
5. **default**: Provides a fallback for unmatched cases in `switch`.
