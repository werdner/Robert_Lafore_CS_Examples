class Node {
    iData

    constructor(key) {
        this.iData = key
    }

    getKey() {
        return this.iData
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

    remove() {
        const root = this.heapArray[0]
        this.heapArray[0] = this.heapArray[--this.currentSize]
        this.trickleDown(0)

        return root
    }

    trickleDown(index) {
        const bottom = this.heapArray[index]
        let largestChild

        while (index < this.currentSize / 2) {
            const leftChild = 2 * index + 1
            const rightChild = leftChild + 1

            if (rightChild < this.currentSize && this.heapArray[leftChild].getKey() < this.heapArray[leftChild + 1].getKey()) {
                largestChild = rightChild
            } else {
                largestChild = leftChild
            }

            if (this.heapArray[largestChild].getKey() <= bottom.getKey()) {
                break
            }

            this.heapArray[index] = this.heapArray[largestChild]
            index = largestChild
        }
        this.heapArray[index] = bottom
    }

    displayHeap() {
        for (let i = 0; i < this.currentSize; i++) {
            console.log(this.heapArray[i])
        }
    }
    
    incrementSize() {
        this.currentSize++
    }
}
