const rewire = require("rewire")
const file2 = rewire("./file2")
const lol = file2.__get__("lol")
// @ponicode
describe("lol", () => {
    test("0", () => {
        lol()
    })
})
