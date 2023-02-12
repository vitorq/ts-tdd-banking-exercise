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

## Considerations
 
 Below you will find a code exercise that can help you to practice Test Driven Development.

 Each item is a requirement and you need to write tests before start coding a piece of code that satisfies that requirement.

 Go through the requirements one at the time, resist the urge over design a solution to more than is required for each step. 
 
 Think about a few scenarios first, make them fail, write the simplest possible code that make them past, then refactor your code.

 The exercise is focused only on the core rules, no real database integration or UI is required.

 ## The challenge

 Create a code that simulates basic banking transactions.

 1. Deposit money to a bank account.
    - Each deposity must go to only one specific bank account.
    - Deposits to non-existent bank accounts are not allowed.
    - Deposits must have a positive money value (>0), any other case is not allowed
 2. Withdraw money from a bank account.
    - Withdraws can be made from only one specific account at the time.
    - Only the account holder's, or someone with account access, can perform this operation.
    - The withdraw can only be done if the account has enough balance in it.
 3. Transfer money from one bank account to the other.
    - Transfers can only be made between two accounts at the time
    - The tranfers is only made if the sender has enough balance in their account.
    - Only the account holder's, or someone with account access, can perform this operation.
 4. Retrieve bank account transactions.
    - Each account transaction must have the type of the operation performed, the date, and the value (+ if it adds to the balance, - if detracts from the value)
 5. Perform bank transactions between different currencies.
    - add the capability of performing all previous transactions (deposit, withdraw, transfer) considering different currencies and their exchange rates.
    - Each bank account must now have a default currency for their balance.
    - Transactions must describe in which currency their value is.
 6. Lend money to individuals, charging interest attached to time.
    - Account holders can borrow money from the bank, each account holder must have a limit of how much they can borrow before paying their debt.
    - Each loan has an interest rate that behaves like compound interest every month, until the data of their payment.
 
