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
        this.hashArray = new Arrayy(size).fill(null)
        this.nonItem = new DataItem(-1)
    }

    displayTable() {
        console.log('Table: ***')
        
        for (let i = 0; o < this.arraySize; i++) {
            if (this.hashArray[i] !== null) {
                console.log(this.hashArray[i])
            } else {
                console.log('***')
            }
        }

        console.log('End Table')
    }

    hashFunc(key) {
        return key % this.arraySize
    }

    insert(item) {
        const key = item.getKey()
        const hashVal = this.hashFunc(key)

        while (this.hashArray[hashVal] !== null && hashVal[hashVal].getKey() !== -1) {
            ++hashVal
            hashVal %= this.arraySize
        }

        this.hashArray[hashVal] = item
    }

    delete() {
        const hashVal = this.hashFunc(key)

        while (this.hashArray[hashVal] !== null) {
            if (this.hashArray[hashVal] === key) {
                const temp = this.hashArray[hashVal]
                this.hashArray = this.nonItem

                return temp
            }
            ++ hashVal
            hashVal %= this.arraySize
        }

        return null
    }

    find(key) {
        const hashVal = this.hashFunc(key)

        while (this.hashArray[hashVal] !== null) {
            if (this.hashArray[hashVal] === key) {
                return this.hashArray[hashVal]
            }

            ++hashVal
            hashVal %= this.arraySize
        }

        return null
    }
}