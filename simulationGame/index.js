function Vehical(brand,model,speed,fuleType){
    this.Brand = brand;
    this.Model = model;
    this.Speed = speed;
    this.FuleType = fuleType;
}

Vehical.prototype.accelerate = function(){
    this.Speed++;
}
Vehical.prototype.brake = function(){
    this.Speed--;
}
Vehical.prototype.refuel = function(){
    console.log(`${this.Brand} ${this.Model} is refueling`)
}


function Car(brand,model,speed,fuleType,noOfWheels){
    Vehical.call(this,brand,model,speed,fuleType)
    this.NoOfWheels = noOfWheels
}

Car.prototype.honk = function(){
    console.log("Honking Sound")
}
Object.setPrototypeOf(Car.prototype, Vehical.prototype)
let car1 = new Car("BMW","X1",200,"petrol",4)
console.log(car1)

car1.accelerate()
car1.refuel()
car1.honk()


function Airplane(brand,model,speed,fuleType,noOfEngine,hasLandingGear){
    Vehical.call(this,brand,model,speed,fuleType)
    this.NumberOfEngine = noOfEngine;
    this.HasLandingGear = hasLandingGear;
}

Airplane.prototype.takeOff = function(){
    console.log(`${this.Brand} ${this.Model} is TakingOff`)
}
Object.setPrototypeOf(Airplane.prototype, Vehical.prototype)

let plane = new Airplane("Emirates",101,500,"Petrol",4,"Yes")

console.log(plane)
plane.refuel()
plane.accelerate()
plane.takeOff()



