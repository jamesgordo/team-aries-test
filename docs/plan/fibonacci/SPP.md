# Software Project Plan (SPP)
## Feature: High-Performance Fibonacci Utility

### Phase 1: Setup & Core Logic
1.  **Create Module:** Initialize `fibonacci.py` in the project root.
2.  **Implement `fib(n)`:**
    -   Import `functools.lru_cache`.
    -   Decorate the `fib` function with `@lru_cache(maxsize=None)` to enable memoization.
    -   Implement base cases:
        -   If `n == 0`, return 0.
        -   If `n == 1`, return 1.
        -   If `n < 0`, raise `ValueError`.
    -   Implement recursive step: `return fib(n-1) + fib(n-2)`.

### Phase 2: CLI Implementation
3.  **Add Argument Parsing:**
    -   Import `argparse`.
    -   Create an `ArgumentParser` in a `main()` function or `if __name__ == "__main__":` block.
    -   Add an argument `n` (type `int`, help "The Fibonacci number to calculate").
4.  **Integration:**
    -   Parse arguments.
    -   Call `fib(n)` with the parsed value.
    -   Print the result.
5.  **Error Handling:**
    -   Wrap execution in a `try/except` block to catch `ValueError` (for negative inputs) or other unexpected errors.

### Phase 3: Verification
6.  **Test Run:**
    -   Execute `python3 fibonacci.py 10` -> Expected output: `55`.
    -   Execute `python3 fibonacci.py 35` -> Expected output: `9227465` (should be instant).
    -   Execute `python3 fibonacci.py -1` -> Expected error message.
