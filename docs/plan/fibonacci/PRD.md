# Product Requirements Document (PRD)
## Project: Team Aries Test
## Feature: High-Performance Fibonacci Utility

### 1. Overview
A standalone Python utility designed to calculate the N-th Fibonacci number efficiently. The implementation must leverage recursion combined with memoization to achieve O(n) time complexity, avoiding the exponential time complexity of naive recursive solutions.

### 2. Objectives
- Provide a correct and performant calculation of Fibonacci numbers.
- Enable usage via command-line interface (CLI).
- Ensure code is readable and follows standard Python practices.

### 3. Functional Requirements
#### 3.1 Core Logic
- **Function Name:** `fib(n)`
- **Input:** Integer `n` (n >= 0).
- **Output:** The N-th Fibonacci number as an integer.
- **Algorithm:** Recursive implementation with memoization (caching results of subproblems).
- **Performance:** O(n) time complexity.

#### 3.2 CLI Interface
- The script must be executable from the command line.
- **Arguments:** A single integer argument `n`.
- **Output:** Print the result to `stdout`.
- **Error Handling:** Gracefully handle non-integer inputs or negative numbers (print error message to `stderr` and exit with non-zero status).

### 4. Non-Functional Requirements
- **Language:** Python 3.x
- **Dependencies:** Standard library only (e.g., `functools`, `sys`, `argparse`).
- **Code Style:** PEP 8 compliant.

### 5. Constraints
- The implementation must use recursion. Iterative solutions are not permitted for this specific task as per requirements (though they are also O(n), the requirement specifies "recursion with memoization").
