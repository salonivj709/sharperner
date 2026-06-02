function removeDuplicates(str){

    let stack = [];

    for(let ch of str){

        if(stack[stack.length - 1] === ch){
            stack.pop();
        }

        else{
            stack.push(ch);
        }
    }

    return stack.join("");
}

console.log(removeDuplicates("abaca"));