animalPopulation = 0;
function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmellow");
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    var animals = [tigger, pooh, rarity, gemma, stinger]
    var zoeBot = new Zookeper("Zoebot");
    zoeBot.feedAnimals(animals, "cheese");
}


class Animal {

    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");

    }

    eat(food) {
        console.log(this.name + " eats " + food);
        this.favoriteFood == food ? console.log("Yum!! " + this.name + " wants more " + food) : this.sleep(name);

    }
    static getPopulation(){
        return animalPopulation;
    }

}


class Tiger extends Animal {

    constructor(name) {
        super(name, "meat")
    }
}

class Bear extends Animal{

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");

    }

}

class Unicorn extends Animal {
    constructor(name){
        super(name, "marshmellow");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name){
        super(name, "leaves");
    }

    eat(food){
        if(food == "leaves"){
            console.log(this.name + " eats leaves")
            console.log("Yumm " + this.name + " wants more leaves")
            this.sleep();
        } else {
            console.log("yuck " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal {
    constructor(name){
        super(name, "pollen");
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){
        if(food == "pollen"){
            console.log(this.name + " eats pollen")
            console.log("Yumm " + this.name + " wants more pollen")
            this.sleep();
        } else {
            console.log("yuck " + this.name + " will not eat " + food);
        }
    }
}

class Zookeper {
    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");
        for(let num of animals){
            num.eat(food)
        }
    }

}



