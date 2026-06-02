class EMployee{
    constructor(salary,overtime,rate){
        this.salary = salary;
        this.overtime = overtime;
        this.rate = rate;
    }
    getWage(){
        return this.salary + (this.overtime * this.rate);
    }
}

const emp = new EMployee(40000, 10, 50);
console.log(emp.getWage());