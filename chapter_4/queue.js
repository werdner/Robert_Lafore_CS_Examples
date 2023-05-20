class Queue {
    #queue = []
    #front = 0
    #rear = -1
    #maxSize

    count = 0

    constructor(s) {
        this.#maxSize = s
    }

    insert(val) {
        if (this.#rear === this.#maxSize - 1) {
            this.#rear = -1
        }

        if (this.count === this.#maxSize) {
            console.log('WARN', this.#queue)
            return
        }

        this.#queue[++this.#rear] = val
        this.count++
    }

    remove() {
        const temp = this.#queue[this.#front++]

        if (this.count === 0) { {
            console.log('WARN', this.#queue)
            return
        }

        }

        if (this.#front === this.#maxSize) {
            this.#front = 0
        }

        if (this.count > 0) {
            this.count--
        }

        return temp
    }
}
