class Link {
    iData
    next = null

    constructor(id) {
        this.iData = id
    }
}

class SortedList {
    first = null

    isEmpty() {
        return this.first === null
    }

    insert(id) {
        const newLink = new Link(id)
        let current = this.first
        let previous = null

        while (current !== null && current.iData < id) {
            previous = current
            current = current.next
        }

        if (previous === null) {
            this.first = newLink
        } else {
            previous.next = newLink
        }

        newLink.next = current

        return newLink
    }

    displayList() {
        let current = this.first

        while (current !== null) {
            console.log(current.iData)
            current = current.next
        }
    }

    remove() {
        const temp = this.first
        this.first = this.first.next
        return temp
    }
}

function sort(array) {
    for (let i = 0; i < array.length; i++) {
        list.insert(array[i])
    }

    let current = list.first
    let i = 0

    while(current !== null) {
        array[i++] = current.iData
        current = current.next
    }

    return array
}