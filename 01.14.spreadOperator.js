// spread operator ...
// 뭔가 내용물을 빼고 싶을 때 사용, 중괄호, 대괄호, 함수 소괄호 안에서만 써야됨

var 어레이 = ['Hello', 'world']

// 01. array에 붙이면 대괄호를 제거해줌
console.log(어레이);
console.log(...어레이);

// 02. 문자에 붙이면 펼쳐줌
var 문자 = 'hello';
console.log(문자);
console.log(...문자);
console.log('h', 'e', 'l', 'l', 'o');

// 쓸 곳 : 어레이 합치기 / 복사
// var a = [1, 2, 3];
// var b = [4, 5];

// var c = [...a, ...b]
// console.log(c)

// 쓸 곳 2 : deep copy할때 유용함
var a = [1, 2, 3]
var b = a // Reference data type (Array, object)
var c = [...a]

a[3] = 4
console.log(a)
console.log(b)

console.log(c)

// 쓸 곳 3: 오브젝트 합치기
var o1 = { a : 1, b : 2 };
var o2 = { ...o1, c : 3 };
console.log(o2);

// 카피하다가 값 중복이 일어나면? -> 가장 뒤에 있는 걸 적용
var o3 = { a1 : 1, b1 : 2 };
var o4 = { a1 : 2 , ...o3 };
console.log(o4); // {a1: 1, b1: 2}
var o5 = { ...o3, a1 : 2 };
console.log(o5); // {a1: 2, b1: 2}

