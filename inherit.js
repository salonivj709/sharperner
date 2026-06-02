class vehicle{
    constructor(speed,fuel){
        this.speed = speed;
        this.fuel = fuel;
    }
    showDetails(){
        console.log('Speed:'+this.speed+'Fuel:'+this.fuel);
    }
}

class car extends vehicle{
    drive(){
        console.log("car is driving");
    }
}

class bike extends vehicle{
    ride(){
        console.log("bike is riding");
    }
}

const myCar = new car(120, 50);
myCar.showDetails();
myCar.drive();

const myBike = new bike(80, 30);
myBike.showDetails();
myBike.ride();