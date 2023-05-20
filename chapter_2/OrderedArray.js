function binarySearch(target, arr) { 
    let lower = 0
    let max = arr.length - 1

    while(true) {
        const curr = Math.floor((lower + max) / 2)

        if (arr[curr] === target) {
            return curr
        } else if (lower > max) {
            return arr
        } else if (arr[curr] < target) {
            lower = curr + 1
        } else {
            max = curr - 1
        }
    }
}

function merge(array1, array2) {
    const result = []
    let left = 0
    let right = 0
    
    while(left < array1.length && right < array2.length) {
        if (array1[left] < array2[right]) {
            result.push(array1[left])
            left++
        } else {
            result.push(array2[right])
            right++
        }
    }

    if (left < array1.length) {
        while (left < array1.length) {
            result.push(array1[left])
            left++
        }
    } else {
        while (right < array2.length) {
            result.push(array2[right])
            right++
        }
    }

    return result
}


class OrderedArray {
    #arr

    constructor(arr) {
        this.#arr = arr ?? []
    }

    find(val) {
        return binarySearch(val)
    }

    insert(val) {
        let i = 0

        while (i < this.#arr.length) {
            if (this.#arr[i] > val) {
                break
            }

            i++
        }

        for (let k = this.#arr.length; k > i; k--) {
            this.#arr[k] = this.#arr[k - 1]
        }

        this.#arr[i] = val
        return this.#arr
    }

    delete(val) {
        const target = this.find(val, this.#arr)

        if (Array.isArray(target)) {
            return false
        }

        for (let i = target; i < this.#arr.length - 1; i++) {
            this.#arr[i] = this.#arr[i + 1]
        }

        delete this.#arr[this.#arr.length - 1]

        return true
    }
}