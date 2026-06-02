class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    front(){
        if(this.isEmpty()){
            return "No elements in Queue";
        }
        return this.items[0];
    }
    size(){
        return this.items.length;
    }
    printQueue(){
        let str = "";
        for(let i=0; i<this.items.length;i++) {
            str += this.items[i] + " ";
        }   
        console.log(str);
    }
}

const queue= new Queue();
queue.enqueue(10);
queue.enqueue(3);
queue.enqueue(15);

queue.dequeue();
console.log(queue.printQueue());
console.log(queue.front());