// 1. Copy and paste your prototype in here and refactor into class syntax..
class CuboidMaker{
    constructor(attr){
        this.length = attr.length,
        this.width = attr.width,
        this.height = attr.height
    }
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
    volume(){
        return this.length * this.width * this.height
    }
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  const cuboid = new CuboidMaker({
    length : 4,
    width : 5,
    height : 5
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('Volume of cuboid;', cuboid.volume()); // 100
console.log('Surface area of cuboid;', cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(attr){
        super(attr)
    }
    //Since this is a true cube, we'd be using just one of the dimension properties of CuboidMaker for volume and surface area calcs//
    volume(){
        return Math.pow(this.length, 3)
    }
    //A cube has 6 sides, and every side is identical. To find the surface area of the whole cube, multiply the surface area of one side by 6.
    surfaceArea(){
        return 6 * Math.pow(this.length, 2)
    }
}

//Create a new cube//
const boxy = new CubeMaker({
    length : 5
})

//test the volume and surface area//
console.log('Volume of boxy;', boxy.volume()) // 125
console.log('Surface area of boxy;', boxy.surfaceArea()) // 150

//Make sure cuboid's methods weren't over-written.
console.log('Volume of cuboid;', cuboid.volume()); // 100
console.log('Surface area of cuboid;', cuboid.surfaceArea()); // 130