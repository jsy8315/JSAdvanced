// 02.08.객체지향3. prototype의 특징 몇가지

// 1. prototype은 함수에만 몰래 생성됨
var arr = [3, 2, 1];
// 함수에만 생성됨
console.log(arr.prototype); // undefined

function 기계(이름, 나이){
    this.name = 이름; // this :  새로 생성되는 object를 뜻함
    this.age = 나이;
    this.sayHi = function(){
        console.log(`Hi ${this.name} ㅋㅋ`)
    }
}

// 자식
var 학생1 = new 기계('Jung', 100); // 이러면 object 뽑힘
var 학생2 = new 기계('Kkook', 50);
console.log(학생1);
console.log(학생2);
학생1.sayHi(); // Hi Jung ㅋㅋ
학생2.sayHi();
기계.prototype.gender = '남자';

// 2.내 부모 유전자(부모의 Prototype)를 검사하고 싶다면 __proto__
console.log(학생1.__proto__); // { gener : "남", constructor: f }
console.log(기계.prototype); // { gener : "남", constructor: f }

// 3. __proto__를 이용해 부모님 강제 등록하기
var 부모 = { name : "Jung" };
var 자식 = {}; 

자식.__proto__ = 부모; // 내 부모유전자는 이걸로 해주세용~, 근데 실제로 쓰지는 않음
console.log(자식.name);


