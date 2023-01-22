import { handleSubmit } from "../src/client/js/formHandler"

// This function takes two arguments  a  description and test a callback function.  
describe("Testing the submit functionality", () => {
//actual test as a callback function
    test("Testing the handleSubmit() function", () => {
       
        expect(handleSubmit).toBeDefined();
    })
});