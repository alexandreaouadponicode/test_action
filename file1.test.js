const rewire = require("rewire")
const file1 = rewire("./file1")
const test = file1.__get__("test")
// @ponicode
describe("test", () => {
    test("0", () => {
        test("", "")
    })

    test("1", () => {
        test("\"#'{7855663]}ééàà", "123456789")
    })

    test("2", () => {
        test("Ponicponicodeponiponicoooooooooode18774563", "\"#'{7855663]}ééàà")
    })

    test("3", () => {
        test("123456789", "p")
    })

    test("4", () => {
        test("Thank you for using PONICODE! Get to 80% coverage super fast !", "\"#'{7855663]}ééàà")
    })

    test("5", () => {
        test("\"#'{7855663]}ééàà", "Ponicponicodeponiponicoooooooooode18774563")
    })
})
