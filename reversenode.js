class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function reverseNode(head){
    let prev = null;
    let current = head;

    while(current){
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

// Reverse Linked List
const reversedHead = reverseNode(head);

// Print Full Reversed List
let temp = reversedHead;

while(temp){
    console.log(temp.data);
    temp = temp.next;
}