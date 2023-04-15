class Animal {
    constructor(name, no_of_legs, no_of_hands) {
        this.name = name
        this.no_of_legs = no_of_legs
        this.no_of_hands = no_of_hands;
    }

    canWalk() {
        console.log("parent canWalk")
    }

    canSwim() {
        console.log("parent canSwim")
    }
}


class Human extends Animal {
    canWalk() {
        super.canWalk()
        console.log("Child canWalk")
    }

    hurry() {
        console.log("hurryyyy")
    }
}


const human = new Human("Ashutosh", 2, 2)
console.log(human);
human.canWalk()