class Link {
    iData
    next
    previous

    constructor(id) {
        this.iData = id
        this.next = null
        this.previous = null
    }

    display() {
        return this.iData
    }
}

class ListIterator {
    current
    previous
    ourList

    constructor(list) {
        this.ourList = list
        this.reset()
    }

    reset() {
        this.current = this.ourList.first
        this.previous = null
    }

    atEnd() {
        return this.current.next === null
    }

    nextLink() {
        this.previous = this.current
        this.current = this.current.next
    }

    getCurrent() {
        return this.current
    }

    insertAfter(id) {
        const newLink = new Link(id)

        if (this.ourList.isEmpty) {
            this.ourList.first = newLink
            this.current = newLink
        } else {
            newLink.next = this.current.next
            this.current.next = newLink
            this.nextLink()
        }
    }

    insertBefore(id) {
        const newLink = new Link(id)

        if (this.previous === null) {
            newLink.next = this.ourList.first
            this.ourList.first = newLink
            this.reset()
        } else {
            newLink.next = this.previous.next
            this.previous.next = newLink
            this.current = newLink
        }
    }

    deleteCurrent() {
        const value = this.current.iData

        if (this.previous === null) {
            this.ourList.first = this.ourList.first.next
            this.reset()
        } else {
            this.previous.next = this.current.next

            if (this.atEnd()) {
                this.reset()
            } else {
                this.current = this.current.next
            }
        }

        return value
    }
}

class DoubleLinkedList {
    first
    last

    constructor() {
        this.first = null
        this.last = null
    }

    get isEmpty() {
        return this.first === null
    }

    getIterator() {
        return new ListIterator(this)
    }

    insertFirst(id) {
        const newLink = new Link(id)

        if (this.isEmpty) {
            this.last = newLink
        } else {
            this.first.previous = newLink
        }

        newLink.next = this.first
        this.first = newLink
    }

    insertLast(id) {
        const newLink = new Link(id)

        if (this.isEmpty) {
            this.first = newLink
        } else {
            this.last.next = newLink
            newLink.previous = this.last
        }
        
        this.last = newLink
    }

    deleteFirst() {
        const temp = this.first

        if (this.first.next = null) {
            this.last = null
        } else {
            this.first.next.previous = null
        }

        this.first = this.first.next
        return temp
    }

    deleteLast() {
        const temp = this.last

        if (this.first.next === null) {
            this.first = null
        } else {
            this.last.previous.next = null
        }

        this.last = this.last.previous

        return temp
    }

    insertAfter(key, id) {
        const newLink = new Link(id)
        let current = this.first

        while (current.iData !== key) {
            current = current.next

            if (current === null) {
                return false
            }
        }

        if (current === this.last) {
            newLink.next = null
            this.last = newLink
        } else {
            newLink.next = current.next
            current.next.previous = newLink
        }

        newLink.previous = current
        current.next = newLink

        return true
    }

    deleteKey(key) {
        if (this.isEmpty) {
            return false
        }

        let current = this.first
        
        while (current.iData !== key) {
            current = current.next

            if (current === null) {
                return false
            }
        }

        if (current === this.first) {
            this.first = current.next
        } else {
            current.previous.next = current.next
        }

        if (current === this.last) {
            this.last = current.previous
        } else {
            current.next.previous = current.previous
        }

        return current
    }

    displayForward() {
        let current = this.first

        while (current !== null) {
            console.log(current.display())
            current = current.next
        }
    }

    displayBackward() {
        let current = this.last

        while (current !== null) {
            console.log(current.display())
            current = current.previous
        }
    }
}

class Iterator {
    first
    current

    constructor(link) {
        this.first = link
        this.current = link
    }

    atEnd() {
        return this.current.next === null
    }

    reset() {
        this.current = this.first
    }

    nextLink() {
        if (this.atEnd()) {
            this.reset()
        } else {
            this.current = this.current.next
        }

        return this.current
    }

    insertAfter(id) {
        const newLink = new LikedList(id)

        newLink.next = this.current.next
        this.current.next = newLink

        this.current = this.current.next
    }

    deleteAfter() {
        const previous = this.current
        const temp = this.current.next

        this.current = this.nextLink()
        previous.next = this.current.next

        this.nextLink()
        
        return temp
    }
}

class LikedList {
    iData
    next

    constructor(id) {
        this.iData = id
        this.next = null
    }

    display() {
        console.log(tihs.iData)
    }

    getIterator() {
        return new Iterator(this)
    }
}


function josephus(amount, k) {
    const list = new LikedList(0)
    const iterator = list.getIterator()

    for (let i = 1; i < amount; i++) {
        console.log(i)
        iterator.insertAfter(i)
    }

    iterator.reset()

    while (iterator.current.next !== null) {
        iterator.nextLink()
        iterator.deleteAfter()
    }

    return iterator.current.iData
}