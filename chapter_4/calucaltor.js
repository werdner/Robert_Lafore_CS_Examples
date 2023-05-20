class StackX {
    #maxSize
    #stackArray = []
    #top = -1

    constructor(size) {
        this.#maxSize = size
    }

    push(char) {
        if (this.#top < this.#maxSize - 1) {
            this.#stackArray[++this.#top] = char
        } else {
            console.warn("Stack is full")
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.warn("Stack is empty")
        } else {
            return this.#stackArray[this.#top--]
        }
    }

    peak() {
        return this.#stackArray[this.#top]
    }

    isEmpty() {
        return this.#top === -1
    }

    size() {
        return thhis.#top + 1
    }
}

class ParsePostfix {
    theStack
    input

    constructor(input) {
        this.input = input
    }

    doParse() {
        this.theStack = new StackX(this.input.length)
        let char
        let i
        let num1, num2, interAns

        for (i = 0; i < this.input.length; i++) {
            char = this.input.charAt(i)

            if (char >= '0' && char <= '9') {
                this.theStack.push(char)
            } else {
                num2 = this.theStack.pop()
                num1 = this.theStack.pop()

                switch (char) {
                    case '+': {
                        interAns = Number(num1) + Number(num2)
                        break
                    } case '-': {
                        interAns = Number(num1) - Number(num2)
                        break
                    } case '/': {
                        interAns = Number(num1) / Number(num2)
                        break
                    } case '*': {
                        interAns = Number(num1) * Number(num2)
                        break
                    } default:
                        interAns = 0
                        break
                }

            this.theStack.push(interAns)
            }
        }
        interAns = this.theStack.pop()
        return interAns
    }
}

class IntToPostfix {
    input
    stackSize
    theStack
    output = ''

    constructor(input) {
        this.input = input
        this.stackSize = this.input.length
        this.theStack = new StackX(this.stackSize)
    }

    gotOperator(opThis, prec1) {
        while(!this.theStack.isEmpty()) {
            const opTop = this.theStack.pop()

            if (opTop === '(') {
                this.theStack.push(opTop)
                break
            } else {
                let prec2

                if (opTop === '+' || opTop === '-') {
                    prec2 = 1
                } else {
                    prec2 = 2
                }

                if (prec2 < prec1) {
                    this.theStack.push(opTop)
                    break
                } else {
                    this.output += opTop
                }
            }
        }

        this.theStack.push(opThis)
    }

    gotPartner() {
        while(!this.theStack.isEmpty()) {
            const context = this.theStack.pop()

            if (context === '(') {
                break
            } else {
                this.output += context
            }
        }
    }

    doTrans() {
        for (let i = 0; i < this.input.length; i++) {
            const char = this.input.charAt(i)

            switch(char) {
                case '+':
                case '-':
                    this.gotOperator(char, 1)
                    break
                case '*':
                case '/':
                    this.gotOperator(char, 2) 
                    break
                case '(':
                    this.theStack.push(char)
                    break
                case ')':
                    this.gotPartner()
                    break
                default:
                    this.output += char
                    break

            }
        }

        while(!this.theStack.isEmpty()) {
            this.output += this.theStack.pop()
        }

        return this.output
    }
}

const postfixExpresion = new IntToPostfix('2+2-3')
const result = postfixExpresion.doTrans()