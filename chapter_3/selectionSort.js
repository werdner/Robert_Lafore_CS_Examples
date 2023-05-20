function swap(arr, first, last) {
    const temp = arr[first]

    arr[first] = arr[last]
    arr[last] = temp

    return true
}

function selectionSort(arr) {
    let out = 0

    while(out < arr.length - 1) {
        let min = out

        for (let inner = out + 1; inner < arr.length; inner++) {
            if (arr[inner] < arr[min]) {
                min = inner
            }
        }

        if (out !== min) {
            swap(arr, out, min)
        }
        out++
    }

    return arr
}

function selectionSort2(arr) {
    let out, inner, min

    for (out = 0; out < arr.length - 1; out++) {
        min = out

        for (inner = out + 1; inner < arr.length; inner++) {
            if (arr[inner] < arr[min]) {
                min = inner
            }
        }

        swap(arr, out, min)
    }

    return arr
} 

console.time()
selectionSort([5, 4, 3, 2, 1])
console.timeEnd()