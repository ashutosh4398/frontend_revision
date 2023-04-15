
// object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1, y: 1
    },
    draw: function() {
        console.log('draw')
    }
};

// radius, location are properties & draw is method
// circle.draw()
// this above way of defining object is tedious as when we have to define some other object we will have to
// copy entire object and assign it to other variable, hence factories come to rescue

// defining objects using factories
function createCircle(radius, x, y) {
    return {
        radius,
        location: {
            x, y
        },
        draw: function() {
            console.log('draw')
        }
    }
}


const circle2 = createCircle(2, 10,10)
// console.log(circle2)


// defining objects using constructor function
function Circle(radius) {
    // console.log(this);
    this.radius = radius
    this.draw = function () {
        console.log("drawing at location: ", defaultLocation)
        console.log("Circle has radius of: ", this.radius)
    }

    // defining private variables,
    // leveraging the concept of closures
    let defaultLocation = {x: 20, y: 30}

    // we can have getters and setters for private variables
    Object.defineProperty(this, "defaultCenterCoordinates", {
        get: function() {
            return defaultLocation;
        },
        // set: function(value) {

        // }
    })
}

// when we use "new", following things happen
// new passes an empty object
// sets this = empty object
// returns this new object
const circle3 = new Circle(25)
// equivalent to above
// const newcircle = Circle.call({}, 20)
circle3.draw()
console.log(circle3.defaultCenterCoordinates)
// if we tryto assign the values then it will not set
circle3.defaultCenterCoordinates = {x: 40, y: 60}
console.log(circle3.draw())
// console.log(circle3)


// deleting property on the fly
// delete circle3.draw
// console.log(circle3)

// for ([key,value] of Object.entries(circle3)) {
//     if(typeof value === 'function') continue;
//     console.log(key, value)
// }

// if ("radius" in circle3) {
//     console.log("Circle has a radius");
// }


// we have primitives[Number, string, etc.] and references [objects, arrays, function]