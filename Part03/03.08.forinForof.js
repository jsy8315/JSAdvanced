// 03.08.for in / for of 반복문과 enumerable, iterable 속성
let obj = { name: 'Jung', age: 100 };
Object.getOwnPropertyDescriptor(obj, 'name');
// {value: 'Jung', writable: true, enumerable: true, configurable: true}
// Jung외에도 3가지 정보가 추가로 저장됨, enumerable(셀 수 있는지 여부)

// for in 반복문 (Object전용); object에 있던 값을 전부 하나씩 꺼내서 사용할 때
// 1.enumerable한 것만 반복 ()
for (let key in obj) {
    console.log(key);
    console.log(obj);
}
// name
// {name: 'Jung', age: 100}
// age
// {name: 'Jung', age: 100}

// 2. 부모의 Prototype도 반복해줌
class 부모 { }

부모.prototype.name = 'Park';

let 오브젝트 = new 부모();

for (let key02 in 오브젝트) {
    if (오브젝트.hasOwnProperty(key02)) {
        console.log(오브젝트[key02]);
    } else {
        console.log('not yours');
    }
} // 음 별로 쓸모는 없다 -> hasOwnProperty를 통해 직접 가진 요소인지 판별해서 사용 -> not yours

// 3. Object 자료형에만 씁니다, array는 for, forEach 쓰자


// for of 반복문 (iterable 전용); array, 문자, arguments, NodeList, Map, Set 등등
// iterable한 자료형에만 사용 가능
let 어레이 = [2,3,4,5];

for (let 자료 of 어레이) {
    console.log(자료);
} // 2, 3,4,5 차례로 출력됨

for (let 자료02 of 'arkebkrfaeu') {
    console.log(자료02); // arkebkrfaeu 하나씩 출력됨
}

어레이[Symbol.iterator](); // 내부 데이터 출력을 해줌, Array Iterator {}

// 참고 : NodeList
// document.getElementsByClassName() : [HTML1, HTML2 등등] <- NodeList