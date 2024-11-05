// 03.10. 매우 짧게 알아보는 Map, Set 자료형
// Map 자료형, key, value를 저장
// Map 자료형은 자료간의 연관성을 표현하기 위해 사용
let person = new Map();
person.set('name', 'Jung');
person.set('age', 20);
console.log(person); 
// Map(2) {'name' => 'Jung', 'age' => 20}, name은 Jung과 연관, age는 20과 연관
// Object 자료형은 자료 이름으로 글자만 가능, Map 자료형은 다 가능

// Map에서 자료꺼내기
console.log(person.get('age')) // 20
// 자료삭제 
// person.delete('age'); // person 출력시 : Map(1) {'name' => 'Jung'}
// 자료 갯수 세는 법
console.log(person.size); // 2

for(let key of person.keys()){
    console.log(key);
} // name, age 출력

// Map 자료형에 한번에 집어넣을때
let person02 = new Map([
    ['name02', 'kim'],
    ['age', 30]
]);
console.log(person02); // Map(2) {'name02' => 'kim', 'age' => 30}

// set 자료형
// 중복자료를 허용하지 않는 array와 비슷
let 출석부 = ['Jung', 'Park', 'Kim', 'Park' ];
console.log(출석부); // ['Jung', 'Park', 'Kim', 'Park']

let 출석부02 = new Set(['Jung', 'Park', 'Kim', 'Park' ]);
console.log(출석부02); // Set(3) {'Jung', 'Park', 'Kim'}

// Set 자료형에 자료추가하기
출석부02.add('Yoon');
console.log(출석부02); // Set(4) {'Jung', 'Park', 'Kim', 'Yoon'}

// 제거하기
// 출석부02.delete('Yoon')
// 확인하기
출석부02.has('Yoon') // true
출석부02.size // 4

// Set 자료형 <-> Array 자료형 (Array의 중복을 제거하고 싶음);
let 출석부03 = ['Jung', 'Park', 'Kim', 'Park' ];
let 출석부04 = new Set(['Jung', 'Park', 'Kim', 'Park' ]);
출석부03 = [...출석부04]; // {}에 담아져서 나오기 때문에
console.log(출석부03); // ['Jung', 'Park', 'Kim']

// Set 자료형에 반복문 돌리도 가능



