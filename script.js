window.onload = function() {

  const PI = 3.124;
  let x = 10;

  function calcArea(r) {
    // local const
    const PI = 10;
    console.log('The area with a local const PI is: ' + PI * r * r);
  }

  // global const
  console.log(PI);

  calcArea(5);

  if (x > 5) {
    // let делает переменную x локальной в области видимости if
    let x = 15;
    console.log('inside if: ' + x);
  }
  console.log('outside if: '+ x);

  // разница между var и let
  // var
  var items = document.getElementsByTagName('li');
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function(){
      console.log(i);
    }
  }
  // let
  var links = document.getElementsByTagName('a');
  for (let k = 0; k < links.length; k++) {
    links[k].onclick = function(e){
      e.preventDefault();
      console.log(k);
    }
  }
  // to check the scope
    // console.log('variable i: ' + i);
    // console.log('variable k: ' + k);


  // The Spread Operator
  let nums1 = [1,2,3];
  let nums2 = [nums1, 4, 5, 6];
  let nums3 = [...nums1, 4, 5, 6];

  console.log(nums2);
  console.log(nums3);

  let nums = [1,2,3];

  function addNums(a,b,c){
    console.log('a + b + c = ' + (a + b + c));
  }
  addNums(...nums);


  // Template Strings
  let author = 'Nadezhda';
  let tplStr = `This is a

            Template Strings.
      My name is: ${author}`;

  console.log(tplStr);


  // Object Literal Enhancements
  let name = 'Nadezhda';
  let age = 24;

  // ES5
  let person = {
    name: name,
    age: age,
    jump: function(a){
        console.log(`You jumped ${a} times`);
    }
  }

  // ES6
  let human = {
    name, age, jump(x){
      console.log(`You jumped ${x} times`);
    }
  }

  console.log('person: ' + person.name);
  person.jump(5);
  console.log('human: ' + human.name);
  human.jump(8);


  // New String Methods
  /*
    - repeat
    - startsWith
    - endsWith
    - includes
  */

  let repeatStr = 'repeat ',
      startsWithStr = 'The method startsWith return true if a string starts the' +
                      'characters that were passed as a parameter. Case Sensitive',
      endsWithStr = 'String for endsWith method',
      includesStr = 'My name is Nadezhda'; // The method includes return true if a string includes the
                                           // characters that were passed as a parameter. Case Sensitive

  console.log(repeatStr.repeat(3));
  console.log(startsWithStr.startsWith('The'));
  // проверка начала с позиции
  console.log(startsWithStr.startsWith('me', 4));

  console.log(endsWithStr.endsWith('method'));
  // проверка конца строки с позиции
  console.log(endsWithStr.endsWith('met', endsWithStr.length - 3));

  console.log(includesStr.includes('name'));



  // Arrow Functions
  // ES5
  var helloFunc = function(){
    console.log('Hello');
  };
  helloFunc();

  //ES6
  let helloFunc2 = (name) => console.log(`Hello ${name}`);
  helloFunc2('Mark');

  let ninja = {
    name: 'Ryu',
    shop(x){
      window.setInterval(() => {
        if (x > 0) {
          console.log(`${this.name} chopped the anamy`); // если бы использовали function, то this стало бы недоступным, так как это была бы новая область видимости
          x--;
        }
      }, 1000);
    }
  }
  ninja.shop(3);


  // Sets
  // It's a new data structure in ES6, which excluding repetition
  // Set's methods
  /*
    - add
    - delete
    - has
    - clear
    - size - it is a property
  */

  let flowersArray = ['rose', 'lily', 'rose', 'jasmine', 'chamomile', 'lily', 'chamomile'];
  let flowersSet = new Set(flowersArray);

  console.log(flowersArray);

  flowersSet.add('tulip').add('snowdrop').add('jasmine');

  console.log(flowersSet);
  console.log(flowersSet.size);

  flowersSet.delete('lily');
  console.log(flowersSet);
  console.log(flowersSet.size);

  flowersArray = [...flowersSet];
  console.log(flowersArray);

  console.log(flowersSet.has('rose'));

  flowersSet.clear();
  console.log(flowersSet.size);


  // Generators

  function* generator() {
    let x = yield 'banana';
    let y = yield 'pine-apple';
    yield console.log('orange');
    yield console.log('pearch');
    return x + y;
  }

  // generator();

  var myGen = generator();
  // yield data
  console.log(myGen.next());
  myGen.next(5);
  // after yield
  myGen.next(10);
  myGen.next();
  console.log(myGen.next());












};
