/*
 //01 base - 01
const hello = "Hello, world";

alert(hello);
/////////////// 
01 base - 02

let name = prompt("what's your name");
alert("Hello, " + name);

01 base - 03

let cake = prompt("Do you want some cake ? y/n");
if (cake != "y" && cake != "n") {
  alert("wrong answer");
} else {
  cake == "y" ? alert("Gg") : alert("More cake for me then");
}

01 - 04

let ok;
do {
  let age = prompt("what's your age ?");
  let gender = prompt("what's your gender ?");
  let town = prompt("what's your town ?");

  ok = prompt(
    "age : " +
      age +
      " gender : " +
      gender +
      " town :" +
      town +
      " Am I right ? y/n"
  );
  if (ok != "y" && ok != "n") {
    alert("wrong answer");
  }
} while (ok == "n");

// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  document.getElementById("addition").addEventListener("click", function () {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    alert(a + b);
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      let a = parseInt(document.getElementById("op-one").value);
      let b = parseInt(document.getElementById("op-two").value);
      alert(a - b);
      // perform an substraction
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      let a = parseInt(document.getElementById("op-one").value);
      let b = parseInt(document.getElementById("op-two").value);
      alert(a * b);
      // perform an multiplication
    });

  document.getElementById("division").addEventListener("click", function () {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    alert(a / b);
    // perform an division
  });
})();

// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  const performOperation = (operation) => {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    switch (operation) {
      case "addition":
        alert(a + b);
        break;
      case "substraction":
        alert(a - b);
        break;
      case "multiplication":
        alert(a * b);
        break;
      case "division":
        alert(a / b);
        break;
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();


// 02-maths/03-even-square/script.js - 2.3: squares and pairs

(() => {
  let arr = [];
  document.getElementById("run").addEventListener("click", () => {
    let i;
    for (i = 1; i <= 21; i++) {
      arr.push(" for " + i + " : " + i * i);
    }
    alert("all the square  between 1 and 21 are :" + arr);
  });
})();

// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    let arr = document.getElementById("numbers").value.split(", ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]);
    }
    let test;
    do {
      test = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          test = true;
        }
      }
    } while (test);
    alert(arr);
  });
})();

// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    let number = parseInt(document.getElementById("number").value);
    number = factorial(number);
    alert(number);

    function factorial(x) {
      if (x == 0) {
        return 1;
      } else {
        return x * factorial(x - 1);
      }
    }
  });
})();
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {
  for (let i = 0; i <= 100; i++) {
    i % 3 == 0
      ? i % 5 == 0
        ? console.log("fizzbuzz")
        : console.log("fizz")
      : i % 5 == 0
      ? console.log("buzz")
      : console.log(i);
  }
})();
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)

function blue() {
  document.body.style.backgroundColor = "blue";
}
function red() {
  document.body.style.backgroundColor = "red";
}
function green() {
  document.body.style.backgroundColor = "green";
}
function yellow() {
  document.body.style.backgroundColor = "yellow";
}

//03-02
function colors() {
  const userInput = document.getElementById("color").value;
  document.body.style.backgroundColor = userInput;
}

// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

(() => {
  document.getElementById("run").addEventListener("click", () => {
    let randomColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    document.body.style.backgroundColor = randomColor;
  });
})();

// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1) && 2

(() => {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const hello = document.getElementById("target");
  h < 17 || (h ==17 && m < 30) 
    ? (hello.innerHTML = "Hello")
    : (hello.innerHTML = "Good evening");
})();

// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

function age() {
  const dobDay = document.getElementById("dob-day").value;
  const dobMonth = document.getElementById("dob-month").value;
  const dobYear = document.getElementById("dob-year").value;
  const d = new Date();
  const day = d.getDay();
  const month = d.getMonth();
  const year = d.getFullYear();
  let age = year - dobYear;
  month + 1 >= dobMonth && day >= dobDay ? age : age--;
  alert("You're " + age);
}
// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const today =
    dayArr[d.getDay()] +
    " " +
    d.getDate() +
    " " +
    monthArr[d.getMonth()] +
    " " +
    d.getFullYear() +
    ", " +
    d.getHours() +
    "h" +
    d.getMinutes();
  document.getElementById("target").innerHTML = today;
})();


// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13

function spook() {
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = document.getElementById("year").value;
  let arr = [];
  for (let i = 0; i < 12; i++) {
    let d = new Date(year, i, 13);
    if (d.getDay() == 5) {
      arr.push(monthArr[i]);
    }
  }
  alert("Spooky month : " + arr);
}

// 05-arrays/01-get-element/script.js - 5.1: item in array

function display() {
  let fruits = [
    "apple",
    "pear",
    "raspberry",
    "tomatos",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peache",
    "grap",
    "cherry",
  ];
  console.log(fruits[3]);
}


function transform() {
  let fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];
  fruits.splice(0, 1, "banana");
  fruits.splice(fruits.length - 1, 1, "kiwi");
  console.log(fruits);
}

function display() {
  let fruits = [
    "apple",
    "pear",
    "raspberry",
    "tomatos",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peache",
    "grap",
    "cherry",
  ];
  for (let el in fruits) {
    console.log(fruits[el]);
  }
}

function display() {
  let fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "kiwi",
    "banane",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];
  fruits.forEach((element) => console.log(element));
}

// 05-arrays/05-walk-three/script.js - 5.5: walk through the list (3)

function display() {
  let people = [
    {
      firstname: "Garald",
      lastname: "Freschi",
      email: "gfreschi0@discuz.net",
    },
    {
      firstname: "Bendicty",
      lastname: "Foster-Smith",
      email: "bfostersmith1@mysql.com",
    },
    {
      firstname: "Michelle",
      lastname: "Draude",
      email: "mdraude2@csmonitor.com",
    },
    {
      firstname: "Cathee",
      lastname: "Meineck",
      email: "cmeineck3@t-online.de",
    },
    {
      firstname: "Marianna",
      lastname: "Coal",
      email: "mcoal4@creativecommons.org",
    },
  ];
  people.forEach((element) =>
    console.log(element.firstname + " " + element.lastname)
  );
}


function find() {
  let people = [
    {
      firstname: "Bradford",
      lastname: "Coldbath",
      email: "bcoldbath0@wired.com",
    },
    {
      firstname: "Nadiya",
      lastname: "Stendell",
      email: "nstendell1@nsw.gov.au",
    },
    {
      firstname: "Auroora",
      lastname: "Stapford",
      email: "astapford2@wsj.com",
    },
    {
      firstname: "Berkley",
      lastname: "McKall",
      email: "bmckall3@about.me",
    },
    {
      firstname: "Wolf",
      lastname: "McCurley",
      email: "wmccurley4@yale.edu",
    },
    {
      firstname: "Jorrie",
      lastname: "Canedo",
      email: "jcanedo5@engadget.com",
    },
    {
      firstname: "Bethanne",
      lastname: "Ackred",
      email: "backred6@imgur.com",
    },
    {
      firstname: "Zorah",
      lastname: "Whild",
      email: "zwhild7@sogou.com",
    },
    {
      firstname: "Jean",
      lastname: "Dupont",
      email: "jdupont@elpais.com",
    },
    {
      firstname: "Zulema",
      lastname: "Ericsson",
      email: "zericsson9@ed.gov",
    },
    {
      firstname: "Brady",
      lastname: "Scrannage",
      email: "bscrannagea@google.fr",
    },
    {
      firstname: "Isidore",
      lastname: "Korf",
      email: "ikorfb@google.com",
    },
    {
      firstname: "Bartholomew",
      lastname: "Stockbridge",
      email: "bstockbridgec@is.gd",
    },
    {
      firstname: "Laney",
      lastname: "O' Mara",
      email: "lomarad@forbes.com",
    },
    {
      firstname: "Gabe",
      lastname: "Keatch",
      email: "gkeatche@google.fr",
    },
  ];
  let index = people.findIndex(
    (element) => element.lastname == "Dupont" && element.firstname == "Jean"
  );
  console.log(people[index].email + " index : " + index);
}

// 05-arrays/07-filter-array/script.js - 5.7: filter an array

function filter() {
  const people = [
    {
      firstname: "Dreddy",
      lastname: "Nussgen",
      age: 70,
    },
    {
      firstname: "Yves",
      lastname: "Sear",
      age: 49,
    },
    {
      firstname: "Marcel",
      lastname: "Cowderay",
      age: 59,
    },
    {
      firstname: "Dag",
      lastname: "Binnall",
      age: 31,
    },
    {
      firstname: "Horten",
      lastname: "Claesens",
      age: 75,
    },
    {
      firstname: "Charmian",
      lastname: "Harnes",
      age: 10,
    },
    {
      firstname: "Sean",
      lastname: "Littlejohns",
      age: 37,
    },
    {
      firstname: "Hazlett",
      lastname: "Sprouls",
      age: 87,
    },
    {
      firstname: "Marcel",
      lastname: "Hasted",
      age: 66,
    },
    {
      firstname: "Cary",
      lastname: "Summerson",
      age: 15,
    },
    {
      firstname: "Feodor",
      lastname: "Ollett",
      age: 56,
    },
    {
      firstname: "Kelly",
      lastname: "Ranahan",
      age: 62,
    },
    {
      firstname: "Madelene",
      lastname: "Davie",
      age: 14,
    },
    {
      firstname: "Bent",
      lastname: "Karpe",
      age: 82,
    },
    {
      firstname: "Reinaldo",
      lastname: "Grimbleby",
      age: 81,
    },
  ];
  let newArray = people.filter((element) => element.age > 18);
  console.log(newArray);
}
// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

function find() {
  const fruits = [
    "apple",
    "perry",
    "strawberry",
    "tomato",
    "kiwi",
    "banana",
    "orange",
    "mandarin",
    "durian",
    "peach",
    "grapes",
    "cherry",
  ];
  console.log(fruits.find((el) => el == "apple"));
  fruits.find((el) => el == "apple") ? console.log("yes") : console.log("no");
}

// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

function start() {
  let arr = [];
  let i;
  for (i = 0; i < 10; i++) {
    arr.push(random());
    document.getElementById("n-" + (i + 1)).innerHTML = arr[i];
  }
  document.getElementById("min").innerHTML = Math.min(...arr);
  document.getElementById("max").innerHTML = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b);
  document.getElementById("sum").innerHTML = sum;
  document.getElementById("average").innerHTML = sum / arr.length;
}
function random() {
  return Math.floor(Math.random() * 101);
}
// 05-arrays/10-reduce-array/script.js - 5.10: using reducer

function sumAge() {
  let people = [
    {
      firstname: "Grenville",
      lastname: "Stive",
      age: 64,
    },
    {
      firstname: "Luis",
      lastname: "Jedrzejewsky",
      age: 73,
    },
    {
      firstname: "Teodor",
      lastname: "Warrington",
      age: 56,
    },
    {
      firstname: "Danya",
      lastname: "Bigby",
      age: 17,
    },
    {
      firstname: "Jemmy",
      lastname: "Goodbur",
      age: 87,
    },
    {
      firstname: "Vilhelmina",
      lastname: "Fost",
      age: 43,
    },
    {
      firstname: "Igor",
      lastname: "Putson",
      age: 45,
    },
    {
      firstname: "Klement",
      lastname: "Braybrook",
      age: 88,
    },
    {
      firstname: "Trefor",
      lastname: "Le Jean",
      age: 69,
    },
    {
      firstname: "Tarrah",
      lastname: "de Clerc",
      age: 77,
    },
    {
      firstname: "Brad",
      lastname: "Hookes",
      age: 82,
    },
    {
      firstname: "Kippar",
      lastname: "Fancet",
      age: 25,
    },
    {
      firstname: "Jecho",
      lastname: "Hawket",
      age: 87,
    },
    {
      firstname: "Lief",
      lastname: "Blazy",
      age: 80,
    },
    {
      firstname: "Jo-ann",
      lastname: "Sacase",
      age: 81,
    },
  ];
  console.log(people.reduce((a, b) => ({ age: a.age + b.age })));
}
// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array

function duplicate() {
  const fruits = [
    "cerise",
    "durian",
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "fraise",
    "durian",
    "pêche",
    "cerise",
    "raisin",
    "cerise",
  ];
  console.log(...new Set(fruits));
}
// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set

function operates() {
  const fruits = new Set([
    "apple",
    "pear",
    "strawberry",
    "tomato",
    "orange",
    "mandarin",
    "durian",
    "peach",
    "grape",
    "cherry",
  ]);
  fruits.delete("apple");
  fruits.delete("cherry");
  fruits.add("kiwi").add("banana");
  console.log(fruits);
}
// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set

function find() {
  const people = new Set([
    "Nicolas",
    "Nick",
    "Leny",
    "Alexandre",
    "Charlène",
    "Laureline",
    "Esther",
    "Simon",
    "Lucas",
  ]);
  console.log(people.size);
  console.log(people.has("Alexandre"));
}

// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

function run() {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);
  let bird = birds[random(birds.length)];
  let adj = [...adjectives][random(adjectives.size)];
  bird.fem
    ? (bird = "la " + bird.name + " " + adj + "e")
    : (bird = "le " + bird.name + " " + adj);

  document.getElementById("target").innerHTML = bird;
}
function random(max) {
  return Math.floor(Math.random() * max);
}
// 06-objects/01-generate-object/script.js - 6.1: genererate an object

function display() {
  class moi {
    constructor(lastname, firstname, age, city, country) {
      this.lastname = lastname;
      this.firstname = firstname;
      this.age = age;
      this.city = city;
      this.country = country;
    }
  }
  let yannick = new moi("yannick", "coopman", 21, "Frasne", "Belgique");
  console.log(yannick);
}

//06-objects/02-assign-properties/script.js - 6.2: assign properties

function run() {
  const computers = [
    { id: "0001", available: false, user: "leny", os: "macOS" },
    { id: "0002", available: false, user: "Nicolas" },
    { id: "0003" },
    { id: "0004", os: "Windows" },
    { id: "0005" },
    { id: "0006", os: "macOS" },
    { id: "0007" },
    { id: "0008" },
    { id: "0009", available: false, user: "Anthony" },
  ];
  const defaultProps = {
    available: true,
    os: "linux",
    user: null,
  };
  for (let i = 0; i < computers.length; i++) {
    if (computers[i].available == undefined) {
      computers[i].available = defaultProps.available;
    }
    if (computers[i].user == undefined) {
      computers[i].user = defaultProps.user;
    }
    if (computers[i].os == undefined) {
      computers[i].os = defaultProps.os;
    }
  }
  console.log(computers);
}
// 06-objects/03-keys-values/script.js - 6.3: keys & values

function run() {
  const person = {
    lastname: "Delnatte",
    firstname: "Pierre-Antoine",
    nickname: "Leny",
    birthDate: "08-05-1985",
    city: "Liège",
    status: "married",
  };
  console.log(Object.keys(person));
  console.log(Object.values(person));
}
// 06-objects/04-from-entries/script.js - 6.4: fromEntries

function run() {
  const keys = ["name", "species", "age", "gender", "color"];
  const values = ["Skitty", "cat", 9, "female", "tabby"];
  console.log(Object.fromEntries(keys.map((_, i) => [keys[i], values[i]])));
}


// 07-classes/01-instances/script.js - 7.1: instances

function run() {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  console.log(new Cat("Skitty", 9));
  console.log(new Cat("Pixel", 6));
}


//07-classes/02-methods/script.js - 7.2: methods

function run() {
  class person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    sayHello() {
      return "Hello, " + this.firstname + " " + this.lastname;
    }
  }
  let moi = new person("yannick", "coopman");

  console.log(moi.sayHello());
}

// 07-classes/03-inheritance/script.js - 7.3: inheritance

function run() {
  class Animal {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  class dog extends Animal {
    static greeting = "wouf";
    constructor(name) {
      super(name);
    }
    greet() {
      return super.sayHello();
    }
  }
  class cat extends Animal {
    static greeting = "Miaw";
    constructor(name) {
      super(name);
    }
    greet() {
      return super.sayHello();
    }
  }
  let dogy = new dog("doggo");
  let caty = new cat("Kitty");
  console.log(dogy.greet() + " " + caty.greet());
}

// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

function run() {
  class person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    get name() {
      return this.firstname + " " + this.lastname;
    }
    set name(newname) {
      [this.firstname, this.lastname] = newname.split(" ");
    }
  }
  let moi = new person("yannick", "coo");
  console.log(moi.name);
  moi.name = "Roger Faim";
  console.log(moi.name);
}

// 08-dom/01-select-one/script.js - 8.1: select by id

(() => {
  document.getElementById("target").innerHTML = `Owned`;
})();

// 08-dom/02-select-two/script.js - 8.2: select by css selector

(() => {
  document.getElementsByClassName("material")[0].innerHTML = `<p> Owned</p>`;
})();

// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector

(() => {
  let arr = document.getElementsByClassName("target");
  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = `owned`;
  }
})();

// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements

(() => {
  let value = document.getElementById("source").getAttribute("data-image");
  let img = document.createElement("img");
  img.src = value;
  document.getElementById("target").appendChild(img);
})();

// 08-dom/05-hover-image/script.js - 8.5: image hover

(() => {
  let img = document.getElementsByTagName("img")[0];
  let value = img.getAttribute("data-hover");
  img.addEventListener("mouseover", () => {
    img.src = value;
  });
})();

// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel

(() => {
  let gallery = [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg",
  ];
  let img = document.getElementsByTagName("img")[0];
  let pos = 1;
  document.getElementById("next").addEventListener("click", () => {
    img.src = gallery[pos];
    pos == gallery.length - 1 ? (pos = 0) : pos++;
  });
})();

// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)

(() => {
  let table = document.createElement("table");
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    table.appendChild(tr);
  }
  document.getElementById("target").appendChild(table);
})();

// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {
  let table = document.createElement("table");
  for (let i = 1; i <= 10; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      let td = document.createElement("td");
      td.innerHTML = `${i * j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.getElementById("target").appendChild(table);
})();

// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)

(() => {
  document.getElementById("run").addEventListener("click", () => {
    const firstPass = document.getElementById("pass-one");
    const secondPass = document.getElementById("pass-two");
    firstPass.value === secondPass.value ? ok() : notok();

    function ok() {
      firstPass.style.borderColor = "green";
      secondPass.style.borderColor = "green";
    }
    function notok() {
      firstPass.style.borderColor = "red";
      secondPass.style.borderColor = "green";
    }
  });
})();

// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)

(() => {
  document.getElementById("run").addEventListener("click", () => {
    const firstPass = document.getElementById("pass-one");
    const secondPass = document.getElementById("pass-two");
    firstPass.value === secondPass.value ? ok() : notok();

    function ok() {
      firstPass.classList.remove("error");
      secondPass.classList.remove("error");
    }
    function notok() {
      firstPass.classList.add("error");
      secondPass.classList.add("error");
    }
  });
})();

// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)

/////////This one is bad check 08-12/////////////

(() => {
  let count = 0;
  let passOne = document.getElementById("pass-one");
  passOne.addEventListener("keyup", () => {
    count == 10 ? (passOne.value = passOne.value.slice(0, 10)) : count++;
    document.getElementById("counter").innerHTML = `${count}/10`;
  });
})();

// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)

(() => {
  let count = 0;
  let countInt = 0;
  let passOne = document.getElementById("pass-one");
  let check = document.getElementById("validity");
  passOne.addEventListener("keyup", () => {
    let value = passOne.value;
    for (let i = 0; i < value.length; i++) {
      isNaN(value[i]) ? countInt : countInt++;
      console.log(value.substr(value.length - 1));
      count++;
    }
    console.log(countInt + " " + count);
    count >= 8 && countInt >= 2
      ? (check.innerHTML = `ok`)
      : (check.innerHTML = `Not ok`);
    count = 0;
    countInt = 0;
  });
})();*/

// 09-misc/01-waving-text/script.js - 9.1: waving text

/* (() => {
  const text = document.getElementById("target");
  text.innerHTML = text.textContent.replace(
    /\S/g,
    "<span class='wave-items' style='display: inline-block'>$&</span>"
  );
  let letterArr = document.getElementsByClassName("wave-items");
  const fontSize = ["small", "medium", "large", "x-large", "xx-large"];
  function run() {
    for (let i = 0; i < letterArr.length; i++) {
      setTimeout(function () {
        letterArr[i].style.transitionDuration = "500ms";
        letterArr[i].style.transform = "translateY(-1.5em)";
        // letterArr[i].style.fontSize = `${fontSize[rand(5)]}`;
        i >= 2 ? (letterArr[i - 2].style.transform = null) : i;
      }, 200 * i);
    }
  }
  setInterval(run, 1000);
  function rand(x) {
    return Math.floor(Math.random() * x);
  }
})(); */
/*
// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect

(async () => {
  const rand = (x) => {
    return Math.floor(Math.random() * x);
  };

  const text = document.getElementById("target");
  text.innerHTML = text.textContent.replace(
    /\S/g,
    "<span class='wave-items' style='opacity: 0'>$&</span>"
  );
  let letterArr = document.getElementsByClassName("wave-items");

  for (let i = 0; i < letterArr.length; i++) {
    const promise = new Promise((resolve) => {
      setTimeout(
        () => resolve((letterArr[i].style.opacity = "1")),
        rand(300) * i
      );
    });
    await promise;
  }
})();

// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider

(() => {
  const slider = document.getElementById("slider");
  slider.addEventListener("mouseup", () => {
    document.getElementById("target").innerHTML = `0${slider.value}`;
  });
})();


// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker

(() => {
  let count = 0;
  let temp;
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      button.id == temp ? temp : (count = 0);
      count++;
      min = parseInt(button.getAttribute("data-min")) + count;
      min == parseInt(button.getAttribute("data-max")) ? (count = 0) : count;
      min < 10 ? (button.innerHTML = `0${min}`) : (button.innerHTML = min);
      temp = button.id;
    });
  });
})();
*/
// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

/* (() => {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const closest = button.closest("div.field").getElementsByTagName("input");
      closest[0].setAttribute(
        "value",
        rand(
          parseInt(closest[0].getAttribute("data-min")),
          parseInt(closest[0].getAttribute("data-max"))
        )
      );
      document.getElementById("target").innerHTML = `0${
        document.getElementById("part-one").value
      }${document.getElementById("part-two").value}${
        document.getElementById("part-three").value
      }${document.getElementById("part-four").value}`;
    });
  });
  function rand(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
})();
 */

// 09-misc/06-guess-number/script.js - 9.6: guess the number

/* (() => {
  const x = Math.floor(Math.random() * 100) + 1;
  let y;
  let count = 0;
  do {
    count++;
    y = prompt("Pick a number between 1 and 100");
    if (y != x) {
      y < x ? alert(x + "Too low") : alert(x + "Too High");
    } else {
      alert("GG ! You needed : " + count + " guess");
    }
  } while (y != x);
})(); */
// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker

/* (() => {
  display();
  document.getElementById("increment").addEventListener("click", () => {
    if (localStorage.clicked) {
      localStorage.clicked = Number(localStorage.clicked) + 1;
    } else {
      localStorage.clicked = 1;
    }
    display();
  });
  function display() {
    document.getElementById("target").innerHTML =
      "You clicked " + localStorage.clicked + " time(s).";
  }
})(); */
// 10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité

/* (() => {
  const setupIntervalMessage = (label, delay) => {
    let count = 0;

    return setInterval(() => console.log(`${label}:`, ++count), delay);
  };

  let intervals = [];

  document.getElementById("run").addEventListener("click", () => {
    if (intervals.length) {
      intervals = intervals.filter(clearInterval);
      console.clear();
    }

    intervals.push(setupIntervalMessage("one", 1000));
    intervals.push(setupIntervalMessage("two", 1333));
    intervals.push(setupIntervalMessage("three", 2500));
    intervals.push(setupIntervalMessage("four", 5000));
    intervals.push(setupIntervalMessage("five", 10000));
  });
})(); */

// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles

/* (() => {
  window.lib.getPosts(async function (err, data) {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve("waited"), 100);
    });
    await promise;
    console.log(err, data);
  });
})(); */

// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires

/* (() => {
  let error, article;
  document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts(async function (err, data) {
      const promise = new Promise((resolve) => {
        setTimeout(() => resolve("waited"), 200);
      });
      await promise;
      error = err;
      article = data;
      for (let i = 0; i < article.length; i++) {
        window.lib.getComments(article[i].id, async function (err, comment) {
          const promise = new Promise((resolve) => {
            setTimeout(() => resolve("waited"), 200);
          });
          await promise;
          article[i].comment = comment;
        });
      }
      console.log(error, article);
    });
  });
})(); */
// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur

/* (() => {
  document.getElementById("run").addEventListener("click", () => {
    window.lib.getPersons(async function (err, data) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          err ? reject(err) : resolve(data);
        }, 100);
      });
      await promise;
      promise.then(
        (result) => console.log(result),
        (error) => console.error(error)
      );
    });
  });
})(); */
// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)

/* (() => {
  window.lib.getPosts(async function (err, data) {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve(data), 100);
    });
    await promise;
    promise.then(
      (result) => console.log(result),
      (error) => console.error(error)
    );
  });
})(); */

///////////////////////////////////10/04, 05, 06, 07, 08, 09 already done///////////////////////////////////
// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console
/* console.log("test");
(async () => {
  document.getElementById("run").addEventListener("click", async () => {
    let response = await fetch("http://localhost:3000/heroes");

    if (response.ok) {
      let json = await response.json();
      console.log(json);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  });
})(); */

/*(async () => {
  document.getElementById("run").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/heroes");
    let hero;
    if (response.ok) {
      let json = await response.json();
      hero = json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
    console.log(hero);

    for (let i = 0; i < hero.length; i++) {
      const newHero = document.createElement("li");
      newHero.classList.add("hero");
      newHero.innerHTML = `<h4 class="title">
      <strong class="name">${hero[i].name}</strong>
      <em class="alter-ego">${hero[i].alterEgo}</em>
    </h4>
    <p class="powers">${hero[i].abilities}</p>`;
      document.getElementById("target").appendChild(newHero);
    }
  });
})();*/

// 11-fetch/03-details/script.js - 11.3: details

/* (() => {
  document.getElementById("run").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/heroes");
    let hero;
    if (response.ok) {
      let json = await response.json();
      hero = json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
    console.log(hero);

    const heroId = document.getElementById("hero-id").value;
    const index = hero.findIndex((element) => element.id == heroId);
    const newHero = document.createElement("li");
    newHero.classList.add("hero");
    newHero.innerHTML = `<h4 class="title">
      <strong class="name">${hero[index].name}</strong>
      <em class="alter-ego">${hero[index].alterEgo}</em>
    </h4>
    <p class="powers">${hero[index].abilities}</p>`;
    document.getElementById("target").appendChild(newHero);
  });
})(); */

// 11-fetch/04-add/script.js - 11.4: ajouter un élément

/* (() => {
  document.getElementById("run").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/heroes");
    let hero;
    if (response.ok) {
      let json = await response.json();
      hero = json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
    let name = document.getElementById("hero-name").value;
    let alterEgo = document.getElementById("hero-alter-ego").value;
    let abilities = document
      .getElementById("hero-powers")
      .value.replace(/ /g, "")
      .split(",");
    let id = parseInt(hero[hero.length - 1].id) + 1;
    name ? name : (name = "default");
    alterEgo ? alterEgo : (name = "default");
    abilities ? abilities : (name = "default");
    const newHero = {
      id,
      name,
      alterEgo,
      abilities,
    };
    hero.push(newHero);
    console.log(hero);
  });
})(); */
(() => {
  document.getElementById("run").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/heroes");
    let hero;
    if (response.ok) {
      let json = await response.json();
      hero = json;
    } else {
      alert("HTTP-Error: " + response.status);
    }
    const heroId = document.getElementById("hero-id").value;
    const index = hero.findIndex((element) => element.id == heroId);
    hero.splice(index, 1);
    console.log(hero);
  });
})();
