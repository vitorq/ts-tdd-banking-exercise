# TDD Banking Exercise

* For this exercise you need to have previous experience in coding.
* You need to know how to use a terminal.
* You need to be somewhat familiar with Javascript and Tyepscript syntax, but no need to be an expert.
* No previous knowledge of jest testing framework is needed, it will be explained during the exercise.

## Environment setup
1. Clone the [github repository exercise](https://github.com/vitorq/ts-tdd-banking-exercise)
2. Install [Node.js](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) 
3. Install [typescript](https://www.typescriptlang.org/download)
4. In the project folder run the command in your terminal

    ```console
    npm test 
    ```

    You should see the following output in your terminal

```console

    FAIL  test/main.spec.ts this is just a placeholder for test suite
    ✓ it should pass (1 ms)
    ✕ it should fail (1 ms)
    ✓ it should pass capturing the error (1 ms)
    ✎ todo this is just a placeholder for todo test

    ● this is just a placeholder for test suite › it should fail

 expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: 0

      20 |     });
      21 |     test('it should fail', () => {
    > 22 |         expect(0).toBe(1);
         |                   ^
      23 |     });
      24 |     test('it should pass capturing the error', () => {
      25 |         expect(()=>{functionCall()}).toThrow("error message");

      at Object.<anonymous> (test/main.spec.ts:22:19)
    ----------|---------|----------|---------|---------|-------------------
    File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    ----------|---------|----------|---------|---------|-------------------
    All files |     100 |      100 |     100 |     100 |                   
     main.ts  |     100 |      100 |     100 |     100 |                   
    ----------|---------|----------|---------|---------|-------------------
    Test Suites: 1 failed, 1 total
    Tests:       1 failed, 1 todo, 2 passed, 4 total
    Snapshots:   0 total
    Time:        0.858 s 
```  
If that's whay you see, you are ready to start.

The `main.spec.ts` file has a series of test implemented to show the basic syntax of the jest framework

The `main.ts` file has a dummy function used to illustrate how to implement a test.

 
