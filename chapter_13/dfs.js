class StackX {
    theStack
    currentSize
    maxSize

    constructor(size) {
        this.theStack = new Array(size)
        this.currentSize = 0
        this.maxSize = size
    }

    push(value) {
        if (this.isFull()) {
            console.warn('Stack is full')
        } else {
            this.theStack[this.currentSize++] = value
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.warn('Stack is empty')
        } else {
            return this.theStack[--this.currentSize]
        }
    }

    peak() {
        return this.theStack[this.currentSize - 1]
    }

    isFull() {
        return this.currentSize === this.maxSize - 1
    }

    isEmpty() {
        return this.currentSize === 0
    }
}

class Vertex {
    label
    wasVisited

    constructor(lab) {
        this.label = lab
        this.wasVisited = false
    }
}

class Graph {
    maxVertx
    vertexList
    adjMat
    nVerts
    theStack

    constructor(maxSize) {
        this.maxVertx = maxSize
        this.vertexList = Array.from(Array(maxSize), () => new Vertex())
        this.adjMat = Array.from(new Array(maxSize), () => new Array(maxSize))
        this.nVerts = 0

        for (let col = 0; col < maxSize; col++) {
            for (let row = 0; row < maxSize; row++) {
                this.adjMat[col][row] = 0
            }
        }

        debugger
        this.theStack = new StackX(5)
    }

    addVertex(lab) {
        this.vertexList[this.nVerts++] = new Vertex(lab)
    }

    addEdge(start, end) {
        this.adjMat[start][end] = 1
        this.adjMat[end][start] = 1
    }

    displayVertex(vertex) {
        console.log(this.vertexList[vertex].label)
    }

    deepFirstSearch() {
        this.vertexList[0].wasVisited = true
        this.displayVertex(0)
        this.theStack.push(0)

        while (!this.theStack.isEmpty()) {
            const vertex = this.getAdjUnvisitedVertex(this.theStack.peak())

            if (vertex === -1) {
                this.theStack.pop()
            } else {
                this.vertexList[vertex].wasVisited = true
                this.displayVertex(vertex)
                this.theStack.push(vertex)
            }
        }
    }

    minimalSpanningTree() {
        this.vertexList[0].wasVisited = true
        this.theStack.push[0]

        while (!this.theStack.isEmpty()) {
            const currentVertex = this.theStack.peak()
            const vertex = this.getAdjUnvisitedVertex(currentVertex)

            if (vertex === -1) {
                this.theStack.pop()
            } else {
                this.vertexList[vertex].wasVisited = true
                this.displayVertex(currentVertex)
                this.displayVertex(vertex)
            }
        }
    }

    getAdjUnvisitedVertex(vertex) {
        for (let i = 0; i < this.nVerts; i++) {
            if (this.adjMat[vertex][i] === 1 && this.vertexList[i].wasVisited === false) {
                return i
            }
        }
        return -1
    }
}

const theGraph = new Graph(5)
console.log(theGraph)

theGraph.addVertex('A')
theGraph.addVertex('B')
theGraph.addVertex('C')
theGraph.addVertex('D')
theGraph.addVertex('E')

theGraph.addEdge(0, 1)
theGraph.addEdge(1, 2)
theGraph.addEdge(0, 3)
theGraph.addEdge(3, 4)
debugger
theGraph.deepFirstSearch()