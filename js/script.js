
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
 
const age1 = 16 ;

if (age1 < 6) {
document.getElementById("task111").innerHTML = "Child";
} if (age1 < 12) {
document.getElementById("task111").innerHTML = "Child1";
}
if (age1 < 15) {
  document.getElementById("task111").innerHTML = "Child2";
  }
else {
    document.getElementById("task111").innerHTML = "adult";
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

    const vehicle = ["Bicycle","Bike","Car","Bus","Train","Aeroplane"];
    
    let text99 = " ";
    for (i=0; i < vehicle.length; i++ )  {
      text99 += vehicle[i] + "<br>"
    }

    document.getElementById("forloop").innerHTML = text99;
    
    let text1 = "";
    for (let i=0; i < 10; i++) {
       text1 += "The number is " + i + "<br>"
    }
    document.getElementById("forloop2").innerHTML = text1;

    let q = 0;
    let text22 = "";
    
    while (q < 6) {
      text22 += "<br>The number is " + q ; 
      q++;
    } 
    document.getElementById("whileloop").innerHTML = text22;

    let xn = 0;
    let text32 = "";
    
    do {
      text32 += "<br>The number is " + xn ; 
      xn++;
    } while (xn > 6)
    document.getElementById("dowhileloop").innerHTML = text32;

    
    let element1 = document.getElementById("v1");

    document.getElementById("domid").innerHTML = "The text from the id is " + element1.innerHTML;

    let element2 = document.getElementsByClassName("domclass");

    document.getElementById("domid2").innerHTML = "The text from class is " +element2[1].innerHTML + " with index of [1]";
    
    let x111 = document.getElementById("domtag");
    let y111 = x111.getElementsByTagName("p");
    
    document.getElementById("domid3").innerHTML = "The text from class is " + y111[0].innerHTML + " with index of [0]";

    let num = document.getElementsByName("bike").length;
    document.getElementById("domid4").innerHTML = num;
    
    function myalert() {
      alert("You are in a danger state");
    }
    
    function myconfirm () {
      confirm("Awesome")
    }
    
    function myprint () {
      print("")
    }
    
    function windowopen() {
      window.open("https://eangadi.in/")
    }

    document.getElementById("screen").innerHTML = screen.height ;

    document.getElementById("location").innerHTML = window.location.href ;

    const timeout = setTimeout(birthday, 2000);

    function birthday() {
    document.getElementById("settime").innerHTML = "Happy Birthday!"
    }
  
    function clickevent() {
      document.write("You have Clicked The Button")
  }

  function dblclickevent() {
    document.write("Yeah ! You are right place")
}

function mouseover() {
  alert("You have overed me")
}

function mouseover1(x) {
  x.style.height = "50px";
  x.style.width = "50px";

}
function mouseout(x) {
  x.style.height = "150px";
  x.style.width = "150px";

}

function keyuppractice() {
  var x = document.getElementById("kp");
  x.value = x.value.toUpperCase();
  document.getElementById("simpledemo").innerHTML = x.value;
}

function keydownpractice() {
  alert("You have pressed a key inside the inside field");
}

function myFunction() {
  var x = document.getElementById("myOption").value;
  document.getElementById("op1").innerHTML = "You selected: " + x;
}

 function checkBox(e) {

 if(e.target.id=='rr'){
    document.getElementById("ck1").innerHTML = "Audi car price starts at ??? 35.00 Lakh and goes upto ??? 2.23 Crore";
 }

if(e.target.id=='vv'){
    document.getElementById("ck1").innerHTML = "BMW car price starts at Rs 41.45 Lakh for the cheapest model which is X1 and the price of most expensive model, which is M8 starts at Rs 2.23 Crore.";
 }
if(e.target.id=='kk'){
    document.getElementById("ck1").innerHTML = "Mercedes-Benz car price starts at Rs 41.99 Lakh for the cheapest model which is A-Class Limousine and the price of most expensive model, which is Maybach";
 }
 if(e.target.id=='qq'){
    document.getElementById("ck1").innerHTML = "Volvo car price starts at Rs 45.83 Lakh for the cheapest model which is XC40 and the price of most expensive model, which is XC90 starts at Rs 94.90 Lakh.";
 }
}



class bike {
  constructor (model, year) {
    this.model = model;
    this.year = year;
  }
}

const myBike = new bike("R15-V4", 2022);

document.getElementById("task20").innerHTML ="Yamaha introduced " + myBike.model + " in " + myBike.year;



class Train {
  constructor (name, year) {
    this.name = name;
    this.year = year;
  }
   age () {
    let date = new Date();
    return date.getFullYear () - this.year;
   }
}

let myTrain = new Train ("Bullet", 2014);

document.getElementById("task21").innerHTML = " Bullet Train was introduced before " + myTrain.age() + " years" ;

 
const obj = JSON.parse('{"name":"Mahi", "age":30, "city":"New York" }');


document.getElementById("task22").innerHTML = obj.name + " was " + obj.age + " old." + "He was living in the " + obj.city 


const myJSON1 = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON1);

document.getElementById("task23").innerHTML = myObj.cars[1];



const myJsonAy = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const dis = JSON.parse(myJsonAy);

document.getElementById("task24").innerHTML = dis.cars[2];