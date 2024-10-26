// 02.05. 이상한 Referenct data type과 더 이상한 예제 3개

// Primitive data type
// 변수에 값이 그대로 저장됨
var 변수 = 1234; // 그대로 저장됨

// array, object는 변수에 값이 저장되지 않음
var array01 = [1, 2, 3] // 변수에 reference가 저장됨, 메모리의 저장 위치를 가리키는화살표
var obj01 = { name : 'kim' } // 레퍼런스 저장

var name01 = { name : 'kim' };
var name02 = { name : 'kim' }

// reference data type 다루기 : 복사
// 새로운 중괄호를 할당할때마다 새로운 화살표

console.log( name01 == name02 ); // 다른 화살표기 때문에 false

function change(obj){
    obj = { name : 'park' }
}

change(name01);
console.log(name01); // 'kim' 출력, 변경이 되지 않음
// 파라미터는 새로운 변수 생성 & 할당과 똑같음, 

// 1단계 change(name01);
// function change(name01) -> function chnage( var obj = name01) 와 같음
// name01 -> { name : 'kim' }
// obj -> { name : 'kim' }, 같은 메모리 주소를 가리킴
     
// 2딘계 obj = { name : 'park' }
// name01 -> { name : 'kim' }
// obj -> { name : 'park' }, 다른 메모리 주소를 가리킴

// 따라서 name01은 변화 없음
