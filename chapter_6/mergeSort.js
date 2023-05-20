class DArray {
    theArray
    nElems

    constructor(max) {
        this.theArray = new Array(max)
        this.nElems = 0
    }

    insert(value) {
        this.theArray[this.nElems++] = value
    }

    display() {
        for (let i = 0; i < this.theArray.length; i++) {
            console.log(this.theArray[i])
        }
    }

    mergeSort() {
        const workSpace = new Array(this.nElems)
        this.recMergeSort(workSpace, 0, this.nElems - 1)
    }

    merge(workSpace, lowPtr, highPtr, upperBound) {
        let j = 0
        let lowerBound = lowPtr
        let mid = highPtr - 1
        let n = upperBound - lowerBound + 1

        while (lowPtr <= mid && highPtr <= upperBound) {
            if (this.theArray[lowPtr] < this.theArray[highPtr]) {
                workSpace[j++] = this.theArray[lowPtr++]
            } else {
                workSpace[j++] = this.theArray[highPtr++]
            }
        }

        while (lowPtr <= mid) {
            workSpace[j++] = this.theArray[lowPtr++]
        }

        while (highPtr <= upperBound) {
            workSpace[j++] = this.theArray[highPtr++]
        }

        console.log(workSpace)

        for (let i = 0; i < n; i++) {
            this.theArray[lowerBound + i] = workSpace[i]
        }
    }

    recMergeSort(workSpace, lowerBound, upperBound) {
        if (lowerBound === upperBound) {
            return
        }

        let mid = Math.floor((lowerBound + upperBound) / 2)
        this.recMergeSort(workSpace, lowerBound, mid)
        this.recMergeSort(workSpace, mid + 1, upperBound)
        
        this.merge(workSpace, lowerBound, mid + 1, upperBound)
    }
}

// const dArray = new DArray(5)
// console.log(dArray)

// for (let i = 5; i > 0; i--) {
//     dArray.insert(i)
// }

// dArray.mergeSort()

/////////////////////////////////////////////////////////////////

class StackX {
    maxSize
    stackArray
    top

    constructor(maxSize) {
        this.maxSize = maxSize
        this.stackArray = new Array(maxSize)
        this.top = -1
    }

    get isFull() {
        return this.top === this.maxSize - 4
    }

    get isEmpty() {
        return this.top === -1
    }

    push(val) {
        if (this.isFull) {
            console.warn('Stack is full')
            return
        }

        this.stackArray[++this.top] = val
    }

    pop() {
        if (this.isEmpty) {
            console.warn('Stack is empty')
            return
        }

        return this.stackArray[this.top--]
    }

    peak() {
        if (this.isEmpty) {
            console.warn('Stack is empty')
            return
        }

        return this.stackArray[this.top]
    }
}

class Params {
    n
    returnAddress

    constructor(nn, ra) {
        this.n = nn
        this.returnAddress = ra
    }
}

class MergeSort {
    theArray
    theStack
    theWorkSpace
    theseParams
    lowerPointer
    highPointer

    constructor(arr) {
        this.codePart = 1
        this.theArray = arr
        this.theStack = new StackX(10000)
        this.theWorkSpace = []
    }

    mergeSort() {

    }

    recMergeSort() {
        let lowerBound = 0
        let upperBound = this.theArray.length - 1
        let mid = Math.floor((lowerBound + upperBound) / 2)

        while (lowerBound < upperBound) {
            const newparams = new Params({lowerBound, upperBound: mid})
            this.theStack.push(newparams)

            upperBound = mid
            mid = Math.floor((lowerBound + upperBound) / 2)
        }

        const params = this.theStack.pop()
    }

    step() {
        const {lowerBound, upperBound} = this.theStack.peak()
        let mid = Math.floor((lowerBound + upperBound) / 2)

        while (lowerBound < upperBound) {
            const newparams = new Params({lowerBound, upperBound: mid})
            this.theStack.push(newparams)

            upperBound = mid
            mid = Math.floor((lowerBound + upperBound) / 2)
        }

        const params = this.theStack.pop()

        if (params.lowerBound === 0 && params.upperBound === this.theArray.length - 1) {
            return true
        }

        this.lowerPointer = params.lowerBound

        return false
    }

    merge() {
        let j = 0
        let size1 = this.highPointer - this.lowerPointer + 1
        let size2 = this.workSpace.length
    }
}

function mergeSort(arr) {
    const length = arr.length
    let subArray = 1
    let left
    let mid
    let right

    while(subArray < length) {
        debugger
        left = 0
        while(left + subArray < length) {
            mid = left + subArray - 1
            right = Math.min(left + (2 * subArray) - 1, length - 1)
            merge(arr, left, mid, right)
            left += subArray * 2
        }

        subArray *= 2
    }

    return arr
}

function merge(arr, leftBound, mid, rightBound) {
    let i = leftBound
    let j = mid + 1
    let k = 0
    const temp = new Array(rightBound - leftBound + 1)

    while(i <= mid && j <= rightBound) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++]
        } else {
            temp[k++] = arr[j++]
        }
    }

    while(i <= mid) {
        temp[k++] = arr[i++]
    }

    while(j <= rightBound) {
        temp[k++] = arr[j++]
    }

    for (let p = 0; p < temp.length; p++) {
        arr[leftBound + p] = temp[p]
    }
}

console.log(mergeSort([6, 5, 4, 3, 2, 1]))