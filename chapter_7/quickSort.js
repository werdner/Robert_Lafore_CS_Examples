class ArrayIns {
    theArray
    nElements

    constructor(max) {
        this.theArray = new Array(max)
        this.nElements = 0
    }

    insert(val) {
        this.theArray[this.nElements++] = val
    }

    display() {
        let i = 0

        while (i < this.nElements) {
            console.log(this.theArray[i])
            i++
        }
    }

    quickSort() {
        this.recQuickSort(0, this.nElements - 1)
    }

    recQuickSort(left, right) {
        if (right - left + 1 <= 3) {
            this.manualSort(left, right)
            return
        }

        const median = this.medianOf3(left, right)

        const partition = this.partitionIt(left, right, median)
        this.recQuickSort(left, partition - 1)
        this.recQuickSort(partition + 1, right)
    }

    medianOf3(left, right) {
        const center = Math.floor((left + right) / 2)

        if (this.theArray[left] > this.theArray[center]) {
            this.swap(left, center)
        } 
        if (this.theArray[left] > this.theArray[right]) {
            this.swap(left, right)
        }
        if (this.theArray[center] > this.theArray[right]) {
            this.swap(center, right)
        }

        this.swap(center, right - 1)
        return this.theArray[right - 1]
    }

    partitionIt(left, right, pivot) {
        let leftPtr = left - 1
        let rightPtr = right

        while (true) {
            while(this.theArray[++leftPtr] < pivot) {}
            while(this.theArray[--rightPtr] > pivot) {}
    
            if (leftPtr >= rightPtr) {
                break
            }
    
            this.swap(leftPtr, rightPtr)
        }

        this.swap(leftPtr, right)
        return leftPtr
    }

    swap(left, right) {
        const temp = this.theArray[left]
        this.theArray[left] = this.theArray[right]
        this.theArray[right] = temp
    }

    manualSort(left, right) {
        const size = right - left + 1

        if (size <= 1) {
            return
        } else if (size === 2) {
            if (this.theArray[left] > this.theArray[right]) {
                this.swap(left, right)
                return
            }
        } else {
            if (this.theArray[left] > this.theArray[right - 1]) {
                this.swap(left, right - 1)
            }
            if (this.theArray[left] > this.theArray[right]) {
                this.swap(left, right)
            }
            if (this.theArray[right - 1] > this.theArray[right]) {
                this.swap(right - 1, right)
            }
        }
    }
}
