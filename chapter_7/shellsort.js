class ArraySh {
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

    shellSort() {
        let inner, outter
        let temp
        let h = 1

        while(h <= this.nElements / 3) {
            h = h * 3 + 1

            while(h > 0) {
                for (outter = h; outter < this.nElements; outter++) {
                    temp = this.theArray[outter]
                    inner = outter

                    while(inner >  h - 1 && this.theArray[inner - h] >= temp) {
                        this.theArray[inner] = this.theArray[inner - h]
                        inner -= h
                    }
                    this.theArray[inner] = temp
                }
                h = (h - 1) / 3
            }
        }
    }
}