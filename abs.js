class CoffeeMachine {
    #heatWater(){ console.log("heating water"); }
    #brewCoffee(){ console.log("brewing coffee"); }

    makeCoffee(){
        this.#heatWater();
        this.#brewCoffee();
        console.log("coffee is ready.....");
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee();