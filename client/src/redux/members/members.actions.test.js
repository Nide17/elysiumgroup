const members_actions = require("./members.actions")
// @ponicode
describe("members_actions.setMembers", () => {
    test("0", () => {
        let callFunction = () => {
            members_actions.setMembers()
        }
    
        expect(callFunction).not.toThrow()
    })
})
