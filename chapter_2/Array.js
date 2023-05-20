class Array {
    #array;

    constructor() {
        this.#array = []
    }

    setElement(index, value) {
        this.#array[index] = value
    }

    getElement(index) {
        return this.#array[index]
    }

    getArray() {
        return this.#array
    }

    deleteElement(searchElement) {
        let i = 0

        while(i < this.#array.length) {
            if (this.#array[i] === searchElement) {
                break
            }

            i++
        }

        for (let k = i; k < this.#array.length - 1; k++) {
            this.#array[k] = this.#array[k + 1]
        }

        return true
    }
}

