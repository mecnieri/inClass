function LinkedList() {
    let head = null;
    let length = 0;

    let Node = function (value) {
        this.value = value;
        this.next = null;
    }

    this.length = () => length;
    this.head = () => head;

    // Add new Node
    this.add = (value) => {
        let node = new Node(value)
        if (head === null) {
            head = node;
        }
        else {
            let current = head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        length++;
    }
    // Remove Node
    this.remove = (value) => {
        let current = head;
        let prevNode;

        if (current.value === value) {
            head = current.next;
        } else {
            while (current.value !== value) {
                prevNode = current;
                current = current.next;

            }
            prevNode.next = current.next;
        }
        length--;
    }
    this.isEmpty = () => {
        return length === 0;
        // return head === null; 
    }
    this.indexOf = (value) => {
        let current = head;
        let index = -1;
        while (current) {
            index++;
            console.log(current)
            if (current.value === value) {
                return index
            }
            current = current.next;
        }
        return -1;
    }

    this.valueAt = (index) => {
        let current = head;
        let count = 0;
        while (count !== index) {
            count++
            current = current.next;
        }
        return current
    }

}


let list = new LinkedList()
list.add(2)
list.add(13)
list.add(16)
list.add(20)
// console.log(list)
console.log(list.valueAt(0))
console.log(list.valueAt(1))
console.log(list.valueAt(2))
console.log(list.valueAt(3))
console.log(list.valueAt(4))
// console.log(`length - ${list.length()}`)

// console.log(list.indexOf(16))
// console.log(`head - ${list)






        // if (index === 0) {
        //     return current
        // }

        // do {
        //     count++;
        //     current = current.next;
        // }