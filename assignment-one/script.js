// TASK: 
// 1. calculate area of triangle case one 1.1 calculate 1.2 test
// 2. compare the two areas to each other case one 2.1 calculate 2.2 output
// 3. template literal
// 4. question parenthesis


// formula to calculate area:
// area = (base*height) / 2

// CASE 1
// triangleOne: base 10 cm, height 13cm
// triangleTwo: base 16,5 cm, height 20,3 cm

// step 1

const triangleOne = ((10*13)/2)
// console.log(`${triangleOne} cm2`)

const triangleTwo = ((16.5*20.3) / 2)
// console.log(`${triangleTwo} cm2`);

// console.log(`Triangle One has an area of ${triangleOne} cm2 and Triangle Two has an area of ${triangleTwo} cm2.`);

// step 2

const resultCaseOne = (((10*13)/2) > ((16.5*20.3) / 2))
// console.log(resultCaseOne);
// result - false = triangleOne is not larger than triangleTwo i.e. triangleTwo has the largest area

// if (resultCaseOne) {
//     console.log(`The triangle with the largest area is Triangle One`);
// } else {
//     console.log(`The triangle with the largest area is Triangle Two`);
// }


// step 3

// console.log(`Triangle One has an area of ${triangleOne} cm2 and Triangle Two has an area of ${triangleTwo} cm2.`);
// if (resultCaseOne) {
//     console.log(`The triangle with the largest area is Triangle One`);
// } else {
//     console.log(`The triangle with the largest area is Triangle Two`);
// }

// using if/else workds but is not displayed in one string
// using ternary instead

//console.log(`Triangle One has an area of ${triangleOne} cm2 and Triangle Two has an area of ${triangleTwo} cm2. The triangle with the largest area is ${triangleOne > triangleTwo ? "Triangle One" : "Triangle Two"}`);



// CASE 2
// triangleThree: base 16,5 cm, height 20,3 cm
// triangleFour: base 20.3 cm, height 16,5 cm

//step 1

const triangleThree = ((16.5*20.3)/2)
// console.log(triangleThree);

const triangleFour = ((20.3*16.5)/2)
// console.log(triangleFour);
// I see what you did there, didn't think of that

// console.log(`Triangle Three has an area of ${triangleThree} cm2 and Triangle Four has an area of ${triangleFour} cm2.`);

//step 2
// seems like ternary can't have three options...back to if/else

// console.log(`Triangle Three has an area of ${triangleThree} cm2 Triangle Four has an area of ${triangleFour} cm2.`);
// if (triangleThree > triangleFour) {
//     console.log("The triangle with the largest area is Triangle One.");
// } else if (triangleThree < triangleFour) {
//     console.log("The triangle with the largest area is Triangle Two.");
// } else if (triangleThree === triangleFour) {
//     console.log("Triange Three and Four have the same area.");
// }

//step 3

//to get it all in one phrase I could do this, but then I would be repeating myself
// if (triangleThree > triangleFour) {
//     console.log(`Triangle Three has an area of ${triangleThree} cm2 Triangle Four has an area of ${triangleFour} cm2. The triangle with the largest area is Triangle One.`);
// } else if (triangleThree < triangleFour) {
//     console.log(`Triangle Three has an area of ${triangleThree} cm2 Triangle Four has an area of ${triangleFour} cm2. The triangle with the largest area is Triangle Two.`);
// } else if (triangleThree === triangleFour) {
//     console.log(`Triangle Three has an area of ${triangleThree} cm2 Triangle Four has an area of ${triangleFour} cm2. Triange Three and Four have the same area.`);
// }


// CASE 3
// triangleFive: base 7,8 cm, height 5,6 cm
// triangleSix: base 9,3 cm, height 12,4 cm

//step 1

const triangleFive = ((7.8*5.6) / 2)
// console.log(triangleFive);

const triangleSix = ((9.3*12.4) / 2)
// console.log(triangleSix);

//step 2 & 3

// console.log(`Triangle Five has an area of ${triangleFive} cm2 Triangle Six has an area of ${triangleSix} cm2.`);
//  if (triangleFive > triangleSix) {
//      console.log("The triangle with the largest area is Triangle Five.");
//  } else if (triangleFive < triangleSix) {
//      console.log("The triangle with the largest area is Triangle Six.");
//  } else if (triangleFive === triangleSix) {
//      console.log("Triange Five and Six have the same area.");
// }



// FINAL VERSION FOR ALL CASES

console.log(`Triangle One has an area of ${triangleOne} cm2 Triangle Two has an area of ${triangleTwo} cm2.`);
 if (triangleOne > triangleTwo) {
     console.log("The triangle with the largest area is Triangle One.");
 } else if (triangleOne < triangleTwo) {
     console.log("The triangle with the largest area is Triangle Two.");
 } else if (triangleOne === triangleTwo) {
     console.log("Triange One and Two have the same area.");
}


console.log(`Triangle Three has an area of ${triangleThree} cm2 Triangle Four has an area of ${triangleFour} cm2.`);
if (triangleThree > triangleFour) {
     console.log("The triangle with the largest area is Triangle One.");
 } else if (triangleThree < triangleFour) {
     console.log("The triangle with the largest area is Triangle Two.");
 } else if (triangleThree === triangleFour) {
     console.log("Triange Three and Four have the same area.");
}
 

console.log(`Triangle Five has an area of ${triangleFive} cm2 Triangle Six has an area of ${triangleSix} cm2.`);
if (triangleFive > triangleSix) {
     console.log("The triangle with the largest area is Triangle Five.");
 } else if (triangleFive < triangleSix) {
     console.log("The triangle with the largest area is Triangle Six.");
 } else if (triangleFive === triangleSix) {
     console.log("Triange Five and Six have the same area.");
}


// 4. Answer to why there are parenthesis in area = (base*height) / 2
// both multiplication and division have the order precedence of 13 in JS, and is read left to right
// JS should therefore calculate the multiplication first and the division thereafter (I removed the parenthesis and it gave the same result)
// however, to be sure that there are no faulty calculations it is best to use a parenthesis since they do have the same precedence, to have control of the result