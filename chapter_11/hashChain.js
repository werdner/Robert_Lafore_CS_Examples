class Link {
    iData
    next

    constructor(id) {
        this.iData = id
        this.next = null
    }

    getKey() {
        return this.iData
    }

    displayLink() {
        console.log(this.iData)
    }
}

class SortedList {
    first

    constructor() {
        this.first = null
    }

    insert(theLink) {
        const key = theLink.getKey()
        let previous = null
        let current = this.first

        while (current !== null && current.getKey() < key) {
            previous = current
            current = current.next
        }

        if (previous === null) {
            this.first = theLink
        } else {
            previous.next = theLink
        }

        theLink.next = current
    }

    delete(key) {
        let previous = null
        let current = this.first

        while (current !== null && key !== current.getKey()) {
            previous = current
            current = current.next
        }

        if (previous === null) {
            this.first = this.first.next
        } else {
            previous.next = current.next
        }
    }

    find(key) {
        let current = this.first

        while (current !== null && current.getKey() <= key) {
            if (current.getKey() === key) {
                return current
            }

            current = current.next
        }

        return null
    }

    displayList() {
        let current = this.first

        while (current !== null) {
            console.log(current.displayLink())
            current = current.next
        }
    }
}

class HashTable {
    hashArray
    arraySize

    constructor(size) {
        this.arraySize = size
        this.hashArray = new Array(size).fill(new SortedList())
    }

    displayTable() {
        for (let i = 0; i < this.arraySize; i++) {
            this.hashArray[i].displayList()
        }
    }

    hashFunc(key) {
        return key % this.arraySize
    }

    insert(theLink) {
        const key = theLink.getKey()
        const hashVal = this.hashFunc(key)
        this.hashArray[hashVal].insert(theLink)
    }

    delete(key) {
        const hashVal = this.hashFunc(key)
        this.hashArray[hashVal].delete(key)
    }

    find(key) {
        const hash = hashFunc(key)

        return this.hashArray[hash].find(key)
    }
}
