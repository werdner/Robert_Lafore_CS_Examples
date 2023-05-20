class Node {
    iData
    leftChild = null
    rightChild = null

    constructor(id) {
        this.iData = id
    }

    display() {
        console.log(this.iData)
    }
}

class Tree {
    root

    constructor() {
        this.root = null
    }

    find(key) {
        let current = this.root

        if (this.root === null) {
            return null
        }

        while (current.iData !== key) {
            if (current.iData > key) {
                current = current.leftChild
            } else {
                current = current.rightChild
            }

            if (current === null) {
                return null
            }
        }

        return current
    }

    insert(id) {
        const newNode = new Node(id)

        if (this.root === null) {
            this.root = newNode
        } else {
            let current = this.root
            let parent

            while (true) {
                parent = current
                
                if (id < current.iData) {
                    current = current.leftChild

                    if (current === null) {
                        parent.leftChild  = newNode
                        return
                    }
                } else {
                    current = current.rightChild

                    if (current === null) {
                        parent.rightChild = newNode
                        return
                    }
                }
            }
        }
    }
 
    delete(key) {
        let parentNode = this.root
        let current = this.root
        let isLeftChild = true

        while (current.iData !== key) {
            parentNode = current

            if (key < current.iData) {
                isLeftChild = true
                current = current.leftChild
            } else {
                isLeftChild = false
                current = current.rightChild
            }

            if (current === null) {
                return null
            }
        }

        if (current.leftChild === null && current.rightChild === null) {
            if (this.root === current) {
                this.root = null
            } else if (isLeftChild) {
                parentNode.leftChild = null
            } else {
                parentNode.rightChild = null
            }
        } else if (current.leftChild === null) {
            if (this.root === current) {
                this.root = current.rightChild
            } else if (isLeftChild) {
                parentNode.leftChild = current.rightChild
            } else {
                parentNode.rightChild = current.rightChild
            }
        } else if (current.rightChild === null) {
            if (this.root === current) {
                this.root = current.leftChild
            } else if (isLeftChild) {
                parentNode.leftChild = current.leftChild
            } else {
                parentNode.rightChild = current.leftChild
            }
        } else {
            const successor = this.getSuccessor(current)

            if (this.root === current) {
                this.root = successor
            } else if (isLeftChild) {
                parentNode.leftChild = successor
            } else {
                parentNode.rightChild = successor
            }
        }

        return true
    }

    getSuccessor(deleteNode) {
        let parentSuccessor = deleteNode
        let successor = deleteNode
        let current = deleteNode.rightChild

        while (current !== null) {
            parentSuccessor = successor
            successor = current
            current = current.leftChild
        }

        if (deleteNode.rightChild !== current) {
            parentSuccessor.leftChild = successor.rightChild
            successor.rightChild = deleteNode.rightChild
            successor.leftChild = deleteNode.leftChild
        }

        return successor
    }


    traverse(type) {
        switch (type) {
            case 'preOrder':
                this.preOrder(this.root)
                break
            case 'inOrder':
                this.inOrder(this.root)
                break
            default:
                this.postOrder(this.root)
        }
    }

    preOrder(localRoot) {
        if (localRoot !== null) {
            localRoot.display()
            this.preOrder(localRoot.leftChild)
            this.preOrder(localRoot.rightChild)
        }
    }

    inOrder(localRoot) {
        if (localRoot !== null) {
            this.inOrder(localRoot.leftChild)
            localRoot.display()
            this.inOrder(localRoot.rightChild)
        }
    }

    postOrder(localRoot) {
        if (localRoot !== null) {
            this.postOrder(localRoot.leftChild)
            this.postOrder(localRoot.rightChild)
            localRoot.display()
        }
    }
}