const actions = require("./actions")
// @ponicode
describe("actions.loadDataInitiation", () => {
    test("0", () => {
        let callFunction = () => {
            actions.loadDataInitiation("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.loadDataInitiation("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.loadDataInitiation("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.loadDataInitiation("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.loadDataInitiation("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actions.loadDataInitiation(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.closeModal", () => {
    test("0", () => {
        let callFunction = () => {
            actions.closeModal()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.openModal", () => {
    test("0", () => {
        let callFunction = () => {
            actions.openModal()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fakeSubmission", () => {
    test("0", () => {
        let callFunction = () => {
            actions.fakeSubmission("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.fakeSubmission("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.fakeSubmission("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.fakeSubmission("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.fakeSubmission("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actions.fakeSubmission(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
