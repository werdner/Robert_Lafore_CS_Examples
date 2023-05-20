class DataItem {
    iData

    constructor(id) {
        this.iData = id
    }

    getKey() {
        return this.iData
    }
}

class HashTable {
    hashArray
    arraySize
    nonItem

    constructor(size) {
        this.arraySize = size
        this.hashArray = new Array(size).fill(null)
        this.nonItem = new DataItem(-1)
    }

    display() {
        console.log('Table: ***')

        if (this.hashArray[i] !== null) {
            for (let i = 0; i < this.arraySize; i++) {
                console.log(this.hashArray[i].getKey())
            }
        } else {
            console.log('***')
        }

        console.log('END')
    }

    hashFunc(key) {
        return key % this.arraySize
    }

    hashFunc2(key) {
        return 5 - key % 5
    }

    isnert(key, item) {
        let hashVal = this.hashFunc(key)
        let stepSize = this.hashFunc2(key)

        while (this.hashArray[hashVal] !== null && this.hashArray[hashVal].getKey() !== -1) {
            hashVal += stepSize
            hashVal %= this.arraySize
        }

        this.hashArray = item
    }

    delete(key) {
        let hashVal = this.hashFunc(key)
        let stepSize = this.hashFunc2(key)

        while (this.hashArray[hashVal] !== null) {
            if (this.hashArray[hashVal].getKey() === null) {
                const temp = this.hashArray[hashVal]
                this.hashArray[hashVal] = this.nonItem
                return temp
            }

            hashVal += stepSize
            hashVal %= this.arraySize
        }
    }

    find(key) {
        let hashVal = this.hashFunc(key)
        let stepSize = this.hashFunc2(key)

        while (this.hashArray[hashVal] !== null && this.hashArray[hashVal] !== -1) {
            if (this.hashArray[hashVal].getKey() === key) {
                return this.hashArray[hashVal]
            }

            hashVal += stepSize
            hashVal %= this.arraySize
        }

        return null
    }
}