// 02.10.(간만에 쉬운거) ES5방식으로 쉽게 구현하는 상속기능
// Object.create(프로토타입object);

var parent = { name : 'Jung' , age : 50 };
// 부모가 가진 Name, age를 그대로 물려받은 자식 object를 만들고 싶음

// prototype을 부모로 해주세요
var child = Object.create(parent); 

console.log(child); // {}
console.log(child.name) // Jung
// 1. 자식이 name있음> 없넹
// 2. 부모는? > 있넹

child.age = 20;
console.log(child.age); // 20

var grandChild = Object.create(child)
console.log(grandChild); // {}
console.log(grandChild.name) // Jung
console.log(grandChild.age) // 20