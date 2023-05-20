class Link {
    iData
    next

    constructor(id) {
        this.iData = id
        this.next = null
    }

    display() {
        return this.iData
    }
}

class FirstLastList {
    first = null
    last = null

    isEmpty() {
        return this.first === null
    }

    insertFirst(id) {
        const newLink = new Link(id)

        if (this.isEmpty()) {
            this.last = newLink
        }

        newLink.next = this.first
        this.first = newLink
    }

    insertLast(id) {
        const newLink = new Link(id)

        if (this.isEmpty()) {
            this.first = newLink
        } else {
            this.last.next = newLink
        }

        this.last = newLink
    }

    displayList() {
        let current = this.first

        while (current !== null) {
            console.log(current.iData)
            current = current.next
        }

        console.log('#########')
    }
}

const list = new FirstLastList()
console.log(list)

for (let i = 0; i < 4; i++) {
    list.insertLast('EL: ' + i)
}

list.displayList()