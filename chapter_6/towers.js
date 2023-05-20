class Tower {
    nDisks = 3

    doTowers(topN, from, inner, to) {
        if (topN === 1) {
            console.log('Disk 1' + ' from ' + from + ' to ' + to)
            return
        } 
            this.doTowers(topN - 1, from, to, inner)
            console.log('Disk ' + topN + ' from ' + from + ' to ' + to)
            this.doTowers(topN - 1, inner, from, to)
    }
}