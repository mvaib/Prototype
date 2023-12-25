function Vehical(brand,model,speed,fuleType){
    this.Brand = brand;
    this.Model = model;
    this.Speed = speed;
    this.FuleType = fuleType
}

Vehical.prototype.accelerate = function(){
    console.log("Vehical accelerated")
}
Vehical.prototype.break = function(){
    console.log("Applied Brake")
}
Vehical.prototype.refule = function(){
    console.log("Vehical refuled")
}

let Car = Object.create(Vehical.prototype)
Car.lights = function(){
    console.log("Lights are on")
}

let car1 = new Vehical("Toyota","Fortunier","200kmph","Diesel")

console.log(car1)
console.log(Car)

car1.accelerate()
car1.break()
car1.refule()

