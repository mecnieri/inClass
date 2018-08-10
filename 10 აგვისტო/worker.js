function add(a, b) {
    this.postMessage(a + b)
}

function sub(a, b) {
    this.postMessage(a - b)
}