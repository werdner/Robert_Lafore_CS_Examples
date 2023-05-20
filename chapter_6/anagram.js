class Anagram {
    word
    size
    result = []

    constructor(word) {
        this.word = word.split('')
        this.size = word.length
    }

    rotate(newSize) {
        let i
        let position = this.size - newSize
        const temp = this.word[position]

        for (i = position + 1; i < this.size; i++) {
            this.word[i - 1] = this.word[i]
        }

        this.word[i - 1] = temp
    }

    doAnagram(newSize = this.size) {
        if (newSize === 1) {
            return
        }

        for (let i = 0; i < newSize; i++) {
            this.doAnagram(newSize - 1)
            this.result.push(this.word.join(''))
            this.rotate(newSize)
        }
    }

    getResult() {
        console.log(this.result)
    }
}