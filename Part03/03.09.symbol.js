// 03.09.Symbol 자료형은 쓸모없어보이는데 왜 있는거죠
// 심볼의 용도 : Object 자료형의 비밀스런 key값

let 심볼 = Symbol('설명아무거나쓰면됨'); // Symbol(설명아무거나쓰면됨)

let weight = Symbol('내 시크릿 몸무게임');
let salary = Symbol('내 작고소중한 월급');

let person = { name: 'Jung' , [salary] : 500};

// 근데 이러면 다 보이잖슴
person.age = 50; 

person[weight] = 100;
// person 출력시 :  {name: 'Jung', age: 50, Symbol(내 작고소중한 월급): 500, Symbol(내 시크릿 몸무게임): 100}

for (let key in person) {
    console.log(person[key]); 
} // Jung, 50만 출력됨, enumerable하지 않기 때문에 출력x

// import 해온 파일, 라이브러리 쓸때 거기 있던 Object에 자료를 추가하고 싶을때
// (반복문에도 안뜨니까 기존 코드를 해치지 않음)

// 심볼 특징1 : 설명이 같다고 같은 Symbol이 아님, symbol만들때마다 유니크한 symbol생김
let a = Symbol('설명1');
let b = Symbol('설명1');
console.log(a == b); // false

// 심볼특징2 : 전역 변수같은 전역 symbol : Symbol.for()
// 같은 설명을 가지고 있는 심볼이 위에 이미 있으면 기존 심볼을 복붙해줌
let c = Symbol.for('설명2');
let d = Symbol.for('설명2');
console.log(c == d); // true

// 심볼특징3 : 기본 내장 Symbol들
let 어레이 = [2,3,4];
// 어레이 내에 아래와 같은게 존재
어레이[Symbol.iterator]; // array에 집어넣는 기본 Symbol (자바스크립트가 기본으로 집어넣음)
