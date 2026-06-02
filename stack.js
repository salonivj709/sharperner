class Stack{
    constructor(){
        this.top = -1;
        this.stack = [];
    }
    push(n){
        this.top = this.top+1;
        this.stack[this.top] = n;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }else{
            this.stack.pop();
            this.top = this.top-1;
        }
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }else{
            return this.stack[this.top];
        }
        
    }
    isEmpty(){
        if(this.top === -1){
            return true;
        }else{
        return false;
        }
    }
    size(){
        return this.top+1;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(6);
stack.push(4);
stack.push(3);
stack.pop();
stack.pop();



console.log(stack.stack)

console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size());
