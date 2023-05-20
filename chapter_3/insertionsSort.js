function insertionSort(arr) {
    let inner, out

    for (out = 1; out < arr.length; out++) {
        const temp = arr[out]
        inner = out

        while(inner > 0 && arr[inner - 1] > temp) {
            arr[inner] = arr[inner - 1]
            inner--
        }

        arr[inner] = temp
    }

    return arr
}

function improvedSort(arr) {
    let inner, out, temp

    for (out = 1; out < arr.length; out++) {
        inner = out
        temp = arr[out]

            while(inner > 0 && arr[inner - 1] >= temp) {
                if (temp === arr[inner - 1]) {
                    temp = -1
                }

                arr[inner] = arr[inner - 1]
                inner--
            }

            arr[inner] = temp
    }
    
    return arr
}

window.improvedSort = improvedSort