class Params {
    n
    returnAddress

    constructor(nn, ra) {
        this.n = nn
        this.returnAddress = ra
    }
}

class StackX {
    maxSize
    stackArray
    top

    constructor(maxSize) {
        this.maxSize = maxSize
        this.stackArray = new Array(maxSize)
        this.top = -1
    }

    get isFull() {
        return this.top === this.maxSize - 4
    }

    get isEmpty() {
        return this.top === -1
    }

    push(val) {
        if (this.isFull) {
            console.warn('Stack is full')
            return
        }

        this.stackArray[++this.top] = val
    }

    pop() {
        if (this.isEmpty) {
            console.warn('Stack is empty')
            return
        }

        return this.stackArray[this.top--]
    }

    peak() {
        if (this.isEmpty) {
            console.warn('Stack is empty')
            return
        }

        return this.stackArray[this.top]
    }
}

class StackTriangle {
    theNumber
    theAnswer
    theStack
    codePart
    theseParams

    constructor(number) {
        this.theNumber = number
    }

    recTriangle() {
        this.theStack = new StackX(10000)
        this.codePart = 1

        while(this.step() === false) {}
        return this.theAnswer
    }

    step() {
        switch (this.codePart) {
            case 1:
                this.theseParams = new Params(this.theNumber, 6)
                this.theStack.push(this.theseParams)
                this.codePart = 2
                break
            case 2:
                this.theseParams = this.theStack.peak()
                if (this.theseParams.n === 1) {
                    this.theAnswer = 1
                    this.codePart = 5
                } else {
                    this.codePart = 3
                }
                break
            case 3:
                const newParams = new Params(this.theseParams.n - 1, 4)
                this.theStack.push(newParams)
                this.codePart = 2
                break
            case 4:
                this.theseParams = this.theStack.peak()
                this.theAnswer = this.theAnswer + this.theseParams.n
                this.codePart = 5
                break
            case 5:
                this.theseParams = this.theStack.peak()
                this.codePart = this.theseParams.returnAddress
                this.theStack.pop()
                break
            case 6:
                return true
        }

        return false
    }
}

class StackTriangle2 {
    theNumber
    theArray
    theAnswer

    constructor(number) {
        this.theNumber = number
        this.theArray = new StackX(1000)
        this.theAnswer = 0
    }

    stackTriangle() {
        while (this.theNumber > 0) {
            this.theArray.push(this.theNumber)
            --this.theNumber
        }

        while (!this.theArray.isEmpty) {
            const newN = this.theArray.pop()
            this.theAnswer += newN
        }

        return this.theAnswer
    }
}

const stacktriangle = new StackTriangle(200)
console.log(stacktriangle)

console.log(stacktriangle.recTriangle())

const stackTriangle2 = new StackTriangle2(4)
console.log(stackTriangle2.stackTriangle())

