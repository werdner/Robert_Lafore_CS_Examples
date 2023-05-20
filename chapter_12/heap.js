class Node {
    iData

    constructor(id) {
        this.iData = id
    }

    getKey() {
        return this.iData
    }

    setKey(value) {
        this.iData = value
    }
}

class Heap {
    heapArray
    maxSize
    currentSize

    constructor(size) {
        this.maxSize = size
        this.currentSize = 0
        this.heapArray = new Array(size).fill(null)
    }

    isEpmty() {
        return this.currentSize === 0
    }

    insert(key) {
        // debugger
        if (this.currentSize === this.maxSize) {
            return false
        }

        const newNode = new Node(key)
        this.heapArray[this.currentSize] = newNode
        this.trickleUp(this.currentSize++)
        
        return true
    }

    trickleUp(index) {
        let parent = Math.floor((index - 1) / 2)
        const bottom = this.heapArray[index]

        while (index > 0 && this.heapArray[parent].getKey() < bottom.getKey()) {
            this.heapArray[index] = this.heapArray[parent]
            index = parent
            parent = Math.floor((parent - 1) / 2)
        }

        this.heapArray[index] = bottom
    }

    remove() {
        const root = this.heapArray[0]
        this.heapArray[0] = this.heapArray[--this.currentSize]
        this.trickleDown(0)

        return root
    }

    trickleDown(index) {
        let largeChild
        const top = this.heapArray[index]

        while (index < this.currentSize / 2) {
            const leftChild = 2 * index + 1
            const rightChild = leftChild + 1

            if (rightChild < this.currentSize && this.heapArray[leftChild].getKey() < this.heapArray[rightChild].getKey()) {
                largeChild = rightChild
            } else {
                largeChild = leftChild
            }

            if (top.getKey() >= this.heapArray[largeChild].getKey()) {
                break
            }

            this.heapArray[index] = this.heapArray[largeChild]
            index = largeChild
        }

        this.heapArray[index] = top
    }

    change(index, newValue) {
        if (index < 0 || index >= this.currentSize) {
            return false
        }

        const oldValue = this.heapArray[index].getKey()
        this.heapArray[index].setKey(newValue)

        if (oldValue < newValue) {
            this.trickleUp(index)
        } else {
            this.trickleDown(index)
        }

        return true
    }

    displayHeap() {
        console.log('Heap Array: ***')
        
        for (let i = 0; i < this.currentSize; i++) {
            if (this.heapArray[i] !== null) {
                console.log(this.heapArray[i].getKey())
            } else {
                console.log('---')
            }
        }

        console.log('End heap')
    }
}