class Partition {
    theArray
    nElements

    constructor(max) {
        this.theArray = new Array(max)
        this.nElements = 0
    }

    insert(value) {
        this.theArray[this.nElements++] = value
    }

    display() {
        for (let i = 0; i < this.nElements; i++) {
            console.log(this.theArray[i])
        }
    }

    get size() {
        return this.nElements
    }

    partition(left, right, pivot) {
        let leftPtr = left - 1
        let rightPtr = right + 1

        while(true) {
            while (leftPtr < right && this.theArray[++leftPtr] < pivot) {}
            while (rightPtr > left && this.theArray[--rightPtr] > pivot) {}

            if (leftPtr >= rightPtr) {
                break
            } else {
                this.swap(leftPtr, rightPtr)
            }
        }

        return leftPtr
    } 

    swap(dex1, dex2) {
        const temp = this.theArray[dex1]
        this.theArray[dex1] = this.theArray[dex2]
        this.theArray[dex2] = temp
    }
}

const partition = new Partition(5)
console.log(partition)


function drawTree(rows) {
    let stars = ''
    let spaces = ''
    let result = ''
    const maxNodes = 1 * (2 ** rows - 1)
    debugger

    let  i = 1
    let k = 1

    while (i <= rows) {
        if (k ===  1) {
            stars += 'X'
        } else {
            k *= 2

            for (j = 0; j < k; j++) {
                stars += j
            }
        }

        for (i = maxNodes - k; i > 0; --i) {
            spaces += '-'
        }

        let part = 
        spaces = ''

        for (l = 0; l < part; l++) {
            spaces += '-'
        }

        for (let i = 0; i < k; i++) {
            result += spaces + 'X' + spaces
        }

        console.log(result)
        spaces = ''
        result = ''

        i++
    }
    
}

drawTree(3)