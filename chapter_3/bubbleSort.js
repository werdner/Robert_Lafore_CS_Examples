function swap(arr, first, last) {
    const temp = arr[first]

    arr[first] = arr[last]
    arr[last] = temp

    return true
}

function bubbleSort(arr) {
    let length = arr.length

    while(length > 1) {
        for (let i = 0; i < length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
    
        }

        length--
    }

    return arr
}

function improvedBubble(arr) {
    let out
    let length = arr.length - 1

    while(length > 0) {
        for (out = 0; out < length; out++) {
            if (arr[out] > arr[out + 1]) {
                const temp = arr[out]
                arr[out] = arr[out + 1]
                arr[out + 1] = temp
            }
        }

        for (out = length - 1; out > 1; out--) {
            if (arr[out - 1] > arr[out]) {
                const temp = arr[out - 1]
                arr[out - 1] = arr[out]
                arr[out] = temp
            }
        }

        length--
    }

    return arr
}