import { call } from '../src/main';

/**
 * Create a code that simulates basic banking transactions.
 * 1. Deposit money to a bank account.
 * 2. Withdraw money from a bank account.
 * 3. Transfer money from one bank account to the other
 * 4. Record bank account transactions
 * 5. Retrieve bank account transactions
 *
 */

describe('this is just a placeholder for test suite', () => {
  test.todo('this is just a placeholder for todo test');
  test('it should pass', () => {
    expect(0).toBe(0);
  });
  test('it should fail', () => {
    expect(0).toBe(1);
  });
  test('it should pass capturing the error', () => {
    expect(() => {
      call();
    }).toThrow('error message');
  });
});
