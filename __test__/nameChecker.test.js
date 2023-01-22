import { checkForName } from "../src/client/js/nameChecker"
   
describe("Testing the checking functionality", () => {
//function test using for callbackfunction
    test("Testing the checkForName() function", () => {
        expect(checkForName).toBeDefined();
    })
});