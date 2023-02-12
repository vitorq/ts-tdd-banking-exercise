import { functionCall } from "../src/main";



describe("this is just a placeholder for test suite", () => {
    test.todo("this is just a placeholder for todo test");
    test('it should pass', () => {
        expect(0).toBe(0);
    });
    test('it should fail', () => {
        expect(0).toBe(1);
    });
    test('it should pass capturing the error', () => {
        expect(()=>{functionCall()}).toThrow("error message");
    });
});
