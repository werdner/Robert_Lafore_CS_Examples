class PriorityQ {
    #maxSize
    #queue
    length = 0

    constructor(size) {
        this.#maxSize = size
        this.#queue = new Array(size)
    }

    insert(val) {
        if (this.length === this.#maxSize) {
            console.log('WARN', this)
            return
        }


        if (this.length === 0) {
            this.#queue[this.length++] = val
        } else {
            let i
            for (i = this.length; i > 0; i--) {
                if (this.#queue[i - 1] > val) {
                    break
                }

                this.#queue[i] = this.#queue[i - 1]
            }

            this.#queue[i] = val
            this.length++
        }
    }

    remove() {
        const index = this.length--
        return this.#queue[index - 1]
    }

    peak() {
        return this.#queue[this.length]
    }
}