// 02.06. 객체지향1. Object 생성 기계인 constructor를 만들어 써보자
// constructor 용도 : object를 마구 복사하고 싶을 떄 사용 (비슷한 Object 여러개 만들때)
var 사람 = { name : 'kim' }
var 사람2 = 사람; // 같은 값을 공유함

// 출석부 만들어본다고 가정
// var stud1 = { 
//     name : 'Jung', 
//     age : 15,
//     sayHi(){
//         console.log(`Hi ${this.name} ㅋㅋ`)
//     } 
// }

function Student(){

} // 이런식으로 첫글자를 대문자로 함

function 기계(이름, 나이){
    this.name = 이름; // this :  새로 생성되는 object를 뜻함
    this.age = 나이;
    this.sayHi = function(){
        console.log(`Hi ${this.name} ㅋㅋ`)
    }
}

var 학생1 = new 기계('Jung', 100); // 이러면 object 뽑힘
var 학생2 = new 기계('Kkook', 50);
console.log(학생1);
console.log(학생2);
학생1.sayHi();
학생2.sayHi();

// this : 기계에서 새로 생성되는 object(instance)
// 기계 : object 생성기계(constructor, 생성자)

