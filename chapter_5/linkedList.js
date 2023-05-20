class Link {
    iData
    dData
    next = null

    constructor(iData, dData) {
        this.iData = iData
        this.dData = dData
    }

    display() {
        console.log('Data1: ' + this.iData, 'Data1: ' + this.dData)
    }
}

class LinkList {
    first

    constructor() {
        this.first = null
    }

    isEmpty() {
        return this.first === null
    }

    insertFirst(id, dd) {
        const newLink = new Link(id, dd)
        newLink.next = this.first
        this.first = newLink
    }

    deleteFirst() {
        const temp = this.first
        this.first = this.first.next

        return temp
    }

    displayList() {
        let current = this.first

        while (current !== null) {
            current.display()
            current = current.next
        }
    }

    delete(key) {
        let current = this.first
        let previous = this.first

        while(current.iData !== key) {
            if (current.next === null) {
                return null
            } else {
                previous = current
                current = current.next
            }
        }

        if (current === this.first) {
            this.first = this.first.next
        } else {
            previous.next = current.next
        }

        return current
    }
}

class PriorityLinkedList {
    first

    constructor() {
        this.first = null
    }

    peek() {
        console.log(this.first)
    }

    insert(id, dd) {
        const newLink = new Link(id, dd)
        let previous = this.first
        let current = this.first

        if (this.isEmpty()) {
            this.first = newLink

            return
        }

        while (current !== null && current.iData < id) {
            previous = current
            current = current.next
        }

        previous.next = newLink
        newLink.next = current
    }

    remove() {
        const temp = this.first

        if (this.isEmpty()) {
            return false
        } else {
            this.first = this.first.next
        }

        return temp
    }

    isEmpty() {
        return this.first === null
    }
}