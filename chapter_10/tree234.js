class DataItem {
    dData

    constructor(dData) {
        this.dData = dData
    }

    displayItem() {
        console.log(`/${this.dData}`)
    }
}

class Node {
    static ORDER = 4
    numItems = 0
    parent
    childArray
    itemArray

    constructor() {
        this.childArray = new Array(Node.ORDER).fill(null)
        this.itemArray = new Array(Node.ORDER - 1).fill(null)
    }

    connectChild(childNum, child) {
        this.childArray[childNum] = child

        if (child !== null) {
            child.parent = this
        }
    }

    disconnectChild(childNum) {
        const tempNode = this.childArray[childNum]
        this.childArray[childNum] = null
        return tempNode
    }

    getChild(childNum) {
        return this.childArray[childNum]
    }

    getParent() {
        return this.parent
    }

    isLeaf() {
        return (this.childArray[0] === null) ? true : false
    }

    getNumItems() {
        return this.numItems
    }

    getItem(index) {
        return this.itemArray[index]
    }

    isFull() {
        return (this.numItems === Node.ORDER - 1) ? true : false
    }

    findItem(key) {
        for (let i = 0; i < Node.ORDER - 1; i++) {
            if (this.itemArray[i] === null) {
                break
            } else if (this.itemArray[i].dData === key) {
                return i
            }
        }

        return -1
    }

    insertItem(newItem) {
        this.numItems++
        const newKey = newItem.dData

        for (let i = Node.ORDER - 2; i >= 0; i--) {
            if (this.itemArray[i] === null) {
                continue
            } else {
                const itsKey = this.itemArray[i].dData

                if (newKey < itsKey) {
                    this.itemArray[i + 1] = this.itemArray[i]
                } else {
                    this.itemArray[i + 1] = newItem
                    return i + 1
                }
            }
        }

        this.itemArray[0] = newItem
        return 0
    }

    removeItem() {
        const temp = this.itemArray[this.numItems - 1]
        this.itemArray[this.numItems - 1] = null
        this.numItems--
        return temp
    }

    displayNode() {
        for (let i = 0; i < this.numItems; i++) {
            this.itemArray[i].displayItem()
            console.log('/')
        }
    }
}

class Tree234 {
    root

    constructor() {
        this.root = new Node()
    }

    find(key) {
        const currentNode = this.root
        let childNumber

        while (true) {
            if ((childNumber - currentNode.findItem(key) != -1)) {
                return childNumber
            } else if (currentNode.isLeaf()) {
                return -1
            } else {
                currentNode = this.getNextChild(currentNode, key)
            }
        }
    }

    insert(dValue) {
        let currentNode = this.root
        const tempItem = new DataItem(dValue)
        debugger

        while (true) {
            if (currentNode.isFull()) {
                this.split(currentNode)
                currentNode = currentNode.getParent()
                currentNode = this.getNextChild(currentNode, dValue)
            } else if (currentNode.isLeaf()) {
                break
            } else {
                currentNode = this.getNextChild(currentNode, dValue)
            }
        }

        currentNode.insertItem(tempItem)
    }

    split(thisNode) {
        let itemB, itemC
        let child2, child3
        let itemIndex

        itemC = thisNode.removeItem()
        itemB = thisNode.removeItem()
        child2 = thisNode.disconnectChild(2)
        child3 = thisNode.disconnectChild(3)
        const newRight = new Node()

        if (thisNode === this.root) {
            this.root = new Node()
            parent = this.root
            this.root.connectChild(0, thisNode)
        } else {
            parent = thisNode.getParent()
        }

        itemIndex = parent.insertItem(itemB)
        let n = parent.getNumItems()

        for (let i = n - 1; i > itemIndex; i--) {
            const temp = parent.disconnectChild(i)
            parent.connectChild(i + 1, temp)
        }

        parent.connectChild(itemIndex + 1, newRight)

        newRight.insertItem(itemC)
        newRight.connectChild(0, child2)
        newRight.connectChild(1, child3)
    }

    getNextChild(theNode, theValue) {
        let i
        let numItems = theNode.getNumItems()

        for (i = 0; i < numItems; i++) {
            if (theValue < theNode.getItem(i).dData) {
                return theNode.getChild(i)
            }
        }
        return theNode.getChild(i)
    }

    displayTree() {
        this.recDisplayTree(this.root, 0, 0)
    }

    recDisplayTree(thisNode, level, childNumber) {
        console.log('level=' + level + ' child=' + childNumber + ' ')
        thisNode.displayNode()

        let numItems = thisNode.getNumItems()

        for (let i = 0; i < numItems + 1; i++) {
            const nextNode = thisNode.getChild(i)
            if (nextNode !== null) {
                this.recDisplayTree(nextNode, level + 1, i)
            } else {
                return
            }
        }
    }
}