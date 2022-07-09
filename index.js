class Queue {
  constructor(){
    //stack 1 with first element inserted located at top
    this.first = [];
    //stack 2 with first element inseted located at bottom
    this.last = [];
  }

  enqueue(value){
    const length = this.first.length;
    //if anything present in first[] move it to last[]
    for(let i = 0; i < length; i++){
      this.last.push(this.first.pop());
    }
    // push to last[]
    this.last.push(value);
    return this;
  }

  dequeue(){
    const length = this.last.length;
    //if anything present in last[] move it to first[]
    for(let i = 0; i < length; i++){
      this.first.push(this.last.pop());
    }
    //pop from first[]
    this.first.pop();
    return this;
  }

  peek(){
    //if anything present in last[] return bottom most element of last[] else return topmost element of first[]
    if(this.last.length > 0){
      return this.last[0];
    }
    return this.first[this.first.length-1];
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.peek());