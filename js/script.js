
    console.log('Hello World')
    var sample1 = 'Hello World'
    document.getElementById('task1').innerHTML = sample1

    var x = 4
    var y = 8
    var z = x + y
  document.getElementById("task2").innerHTML = "The value of z is : " + z;

   const price1 = 23
   const price2 = 44
   let total = price1 + price2
  document.getElementById("task3").innerHTML = "The total value is : "+ total;

  let age = 22;
  let firstName = "Gautham";
  let secondName = "Ganesh";
  
  document.getElementById("task4").innerHTML = firstName + "</br>" + secondName + "</br>" + " is " + " " + age + " " + "old" + "</br>" + "boy" ;
  
  const color = ["Blue","Red", "Orange"];
  document.getElementById("task5").innerHTML = color[1]
  
  const person = {
  firstName1 : "Mahendra",
  secondName2  : "Singh",
  thirdName  : "Dhoni",
  age1     : 39,
};
  document.getElementById("task6").innerHTML = person.firstName1 + " " + person.secondName2 + " " + person.thirdName + " is " + person.age1 + " old";

document.getElementById("task7").innerHTML = 
typeof "" + "<br>" +
typeof "John" + "<br>" + 
typeof 86 ;

let text = "We are the so-called \"Vikings\" from the north." ;
document.getElementById("task8").innerHTML = text;


let firstName2 = "Mahi" ;
let secondName2 = "Bhai" ;
document.getElementById("task9").innerHTML = `Welcome ${firstName2}, ${secondName2}!`;


let textn =
`The quick
brown fox
jumps over
the lazy dog`;
document.getElementById("task10").innerHTML = textn;

let hour = 11.40 ;

if (hour < 11.30 ) {
document.getElementById("task11").innerHTML = "Good morning!";
} else if (hour < 14.30) {
document.getElementById("task11").innerHTML = "Good afternoon!";
} else if (hour < 18.30) {
document.getElementById("task11").innerHTML = "Good evening!";  
} else {
document.getElementById("task11").innerHTML = "Good night!"; 
}



let no1 = 55;
let no2 = 66;
let final1;

function addno() {
final1 = no1 + no2;
}

addno();
console.log(final1)
document.getElementById("task12").innerHTML = final1

function crank(ck,ce) {
result = ck * ce
}
crank(44, 2)
document.getElementById("task13").innerHTML = result


let kk = 22;
let vk = 22;
let kkvk;
let devmoz = function () {
kkvk = kk*vk;
}
devmoz()
document.getElementById("task14").innerHTML = kkvk;

let chead = function(cd, ch) {
result1= cd*ch;
}
chead(9, 9)
document.getElementById("task15").innerHTML = result1;


function mydisplay(parameter) {
document.getElementById("task16").innerHTML=parameter;
}

function antony() {
mydisplay("arguement1");
}
function antony2() {
console.log('check')
antony();
}

function antony3() {
mydisplay("antony2");
}

antony2()

function weightFn(myWeight) {
      const myNewWeight = myWeight + 10
      return myNewWeight
    }

    function heightFn(myHeight) {
      const myNewHeight = myHeight + 10
      return myNewHeight
    }

    function hairColorFn(myHairColor) {
      const myNewHairColor = "black"
      return myNewHairColor
    }

    function myBodyDetails(myWeight, myHeight, myHairColor) {
      const myNewWeight = weightFn(myWeight)
      const myNewHeight = heightFn(myHeight)
      const myNewHairColor = hairColorFn(myHairColor)
      const myBodyDetails =
        'My weight is ' +
        myNewWeight +
        ' my height is ' +
        myNewHeight +
        ' aand my hair color is ' +
        myNewHairColor
      return myBodyDetails
    }
    console.log(myBodyDetails(66, 164, 'black'))
    document.getElementById("task17").innerHTML = myBodyDetails(66, 164, 'black')
    
  
    
    document.getElementById("task18").innerHTML = myFunction("John Cena");
    function myFunction(name) {
    return "Hello " + name;
    }
   
  
    let xnv = lorry(2, 2); 
    document.getElementById("task19").innerHTML = xnv;

    function lorry(a, b) {
    return "lorry has " + a + b + " wheel";   
    } 