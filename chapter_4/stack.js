class Stack {
    #stack
    #top = -1

    constructor(size) {
        this.#stack = new Array(size)
    }

    push(val) {
        this.#stack[++this.#top] = val
    }

    pop() {
       return this.#stack[this.#top--]
    }

    peak() {
        return this.#stack[this.#top]
    }
}