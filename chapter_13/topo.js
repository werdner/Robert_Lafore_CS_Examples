class Vertex {
    label
    wasVisited

    constructor(lab) {
        this.label = lab
        this.wasVisited = false
    }
}

class Graph {
    maxVerts
    vertexList
    adjMat
    nVerts
    sortedArray

    constructor(size) {
        this.maxVerts = size
        this.vertexList = new Array(size)
        this.adjMat = Array.from(new Array(size), () => new Array(size))
        this.sortedArray = new Array(size)
        this.nVerts = 0

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                this.adjMat[row][col] = 0
            }
        }
    }

    addVertex(lab) {
        this.vertexList[this.nVerts++] = new Vertex(lab)
    }

    addEdge(start, end) {
        this.adjMat[start][end] = 1
    }

    displayVertex(vertex) {
        console.log(this.vertexList[vertex].label)
    }

    topo() {
        const count = this.nVerts

        while (this.nVerts > 0) {
            const currentVertex = this.noSuccessor()

            if (currentVertex === -1) {
                console.warn('ERROR: Graph has cycles')
                return
            }

            debugger
            this.sortedArray[this.nVerts - 1] = this.vertexList[currentVertex].label
            this.deleteVertex(currentVertex)
        }

        console.log('Topologically sorted order: ')
        for (let i = 0; i < count; i++) {
            console.log(this.sortedArray[i])
        }
        console.log('***')
    }

    noSuccessor() {
        let isEdge

        for (let row = 0; row < this.nVerts; row++) {
            isEdge = false
            for (let col = 0; col < this.nVerts; col++) {
                if (this.adjMat[row][col] > 0) {
                    isEdge = true
                    break
                }
            }

            if (!isEdge) {
                return row
            }
        }

        return -1
    }

    deleteVertex(deletedVertex) {
        if (!(deletedVertex !== this.nVerts - 1)) {
            for (let j = deletedVertex; j < this.nVerts - 1; j++) {
                this.vertexList[j] = this.vertexList[j + 1]
            }

            for (let row = deletedVertex; row < this.nVerts - 1; row++) {
                this.moveRowUp(row, this.nVerts)
            }

            for (let col = deletedVertex; col < this.nVerts - 1; col++) {
                this.moveColLeft(col, this.nVerts - 1)
            }
        }

        this.nVerts--
    }

    moveRowUp(row, length) {
        for (let col = 0; col < length; col++) {
            this.adjMat[row][col] = this.adjMat[row + 1][col]
        }
    }

    moveColLeft(col, length) {
        for (let row = 0; row < length; row++) {
            this.adjMat[row][col] = this.adjMat[row][col + 1]
        }
    }
}

const graph = new Graph(8)

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')

graph.addEdge(0, 3)
graph.addEdge(0, 4)
graph.addEdge(1, 4)
graph.addEdge(2, 5)
graph.addEdge(3, 6)
graph.addEdge(4, 6)
graph.addEdge(5, 7)
graph.addEdge(6, 7)

// debugger
graph.topo()