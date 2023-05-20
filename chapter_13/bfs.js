class Queue {
    theQueue
    currentSize
    maxSize
    back
    top

    constructor(size) {
        this.theQueue = new Array(size).fill(null)
        this.maxSize = size
        this.currentSize = 0
        this.back = 0
        this.top = 0
    }

    isFull() {
        return this.currentSize === this.maxSize
    }

    isEmpty() {
        return this.currentSize === 0
    }

    insert(value) {
        if (this.isFull()) {
            console.warn('queue is full')
        } else {
            if (this.back > this.maxSize - 1) {
                this.back = 0
            }

            this.currentSize++
            this.theQueue[this.back++] = value
        }
    }

    remove() {
        if (this.isEmpty()) {
            console.warn('queue is empty')
        } else {
            const temp = this.theQueue[this.top]
            this.theQueue[this.top++] = null

            this.currentSize--

            if (this.top > this.maxSize) {
                this.top = 0
            } 

            return temp
        }
    }

    displayQueue() {
        let temp = this.top
        for (let i = 0; i < this.currentSize; i++) {
            if (temp > this.currentSize) {
                temp = 0
            } else {
                console.log(this.theQueue[temp])
            }
        }
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
    maxVertexes
    vertexList
    nVerts
    adjMat
    theQueue

    constructor(size) {
        this.maxVertexes = size
        this.vertexList = new Array(size)
        this.nVerts = 0
        this.adjMat = Array.from(new Array(size), () => new Array(size))

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                this.adjMat[row][col] = 0
            }
        }

        this.theQueue = new Queue(size)
    }

    addVertex(lab) {
        this.vertexList[this.nVerts++] = new Vertex(lab)
    }

    addEdge(start, end) {
        this.adjMat[start][end] = 1
        this.adjMat[end][start] = 1
    }

    displayVertex(v) {
        console.log(this.vertexList[v].label)
    }

    breadthFirstSearch() {
        this.vertexList[0].wasVisited = true
        this.displayVertex(0)
        this.theQueue.insert(0)

        let v2

        while (!this.theQueue.isEmpty()) {
            const v1 = this.theQueue.remove()

            while((v2 = this.getAdjUnvisitedVertex(v1)) !== -1) {
                this.vertexList[v2].wasVisited = true
                this.displayVertex(v2)

                this.theQueue.insert(v2)
            }
        }

        for (let i = 0; i < this.nVerts; i++) {
            this.vertexList[i].wasVisited = false
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

theGraph.breadthFirstSearch()
