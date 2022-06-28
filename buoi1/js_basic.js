

function Car(make,speed) {
    this.location = make;
    this.speed = speed;
}


Car.prototype.accelerate = function(){
   
    this.speed = this.speed + 10;
    console.log(this.speed);
}

Car.prototype.brake = function(){
    this.speed = this.speed - 5;
    console.log(this.speed);

}



let hondaCar = new Car('honda', 120)
hondaCar.accelerate()
hondaCar.accelerate()
hondaCar.accelerate()

let mercedesCar = new Car('mercedes', 95)
mercedesCar.brake()
mercedesCar.brake()
mercedesCar.brake()