// 02.07. 객체지향2. 이거 보고 prototype 이해 못하면 강의 접습니다

// 부모
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
학생2.sayHi(); // Hi Kkook ㅋㅋ, 기계가 가지고 있는 name, age, sayHi 속성들을 물려받음 (상속)

// this : 기계에서 새로 생성되는 object(instance)
// 기계 : object 생성기계(constructor, 생성자)

// prototype은 유전자
// 기계(constructor)를 만들면 prototype이라는 공간이 자동으로 생김

기계.prototype.gender = '남자';
console.log("학생1.gender : " + 학생1.gender);

// prototype의 원리 :  왜 자식은 부모 유전자에 등록된 값을 사용가능한가 -> 자바스크립트는 그냥 그렇게 설정됨
학생1.name;
// 1. 학생1이 직접 name을 가지고 있는가? 그러면 출력
학생1.gender;
// 2. 학생1이 직접 gender를 가지고 있는가? 없넹
// 3. 그럼 학생1의 부모 유전자(기계.prototype)가 gender를 가지고 있는가?
// -> 내가 gender가 없으면 부모에게서 찾는구나~!

학생1.toString(); // Object, Array에 붙일 수 있는 내장 함수
// 1. 학생1은 직접 toString을 가지고 있지 않음
// 2. 그러면 부모가..?? 없넹
// 3. 그러면 부모의 부모의 유전자가...??? 있넹

// 내장 함수는 어떻게 동작하는가??
var arr = [1, 2, 3];
var arr = new Array(1, 2, 3); // 실제 array가 만들어지는 방식(array 만드는 기계로부터 하나 뽑음);
var obj = { name: 'Jung' } // var obj = new Object();
arr.sort(); 
// 1. arr가 sort있니> 없넹
// 2. arr부모 유전자(Array.prototype)에 Sort 있니> 있넹
