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





};
