function add(a, b) {
    this.postMessage(a + b)
}

function sub(a, b) {
    this.postMessage(a - b)
}


self.addEventListener('message', function (e) {
    // console.log(e.data);
    switch (e.data.type) {
        case 'add':
        add.apply(this, e.data.nums)
        break;
        case 'sub':
        sub.apply(this, e.data.nums)
        break;
}});