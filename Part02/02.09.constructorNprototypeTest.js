// 02.09. constructor, prototype 연습문제 4개

// 0. 오브젝트 자료 여러개를 만들고 싶습니다. 
// function Student(이름, 나이){
//     this.name = 이름;
//     this.age = 나이;
//     this.sayHi = function(){
//         console.log(`안녕 새끼드라 난 ${this.name}이라고 해 반갑다` )
//     }
// }
// var 학생1 = new Student('kim', 20);
// 학생1.sayHi();



// 1. 다음 코드의 출력 결과는 무엇일까요?
// function Parent(){
//     this.name = 'Kim';
//   }
//   var a = new Parent();
  
//   a.__proto__.name = 'Park'; 
//   console.log(a.name)

  // a.__proto__는 부모의 유전자, 즉 Parent를 의미한다
  // 여기에 name을 Park으로 추가하는 것이기 때문에, Park을 출력한다
  // 틀림 -> a.name이 'kim'으로 존재하기 때문에, kim이 출력된다.(부모의 name이 Park이다)



//  2. 함수가 안들어가요 엉엉
// function Student(이름, 나이){
//     this.name = 이름;
//     this.age = 나이;
//   }
  
//   Student.prototype.sayHi = function(){
//       console.log('안녕 나는 ' + this.name + '이야');
//     }

// var 학생1 = new Student('Kim', 20);

// Student.prototype.gender = '남자'

// console.log(학생1.gender)
//   학생1.sayHi(); //왜 이 코드가 제대로 안나오죠?

// 화살표 함수에서의 this는 window의 this를 가리킨다.
// arrow function은 this를 바깥에 있는 this를 그대로 사용하고 싶을떄 쓰는 함수



// 3. 모든 array에 적용할 수 있는 함수를 직접 새로 만들려면 어떻게 해야할까요?
var arr = [1,2,3];

Array.prototype.remove3 = function(){
    for(let i = 0; i < this.length; i++){
        // console.log(this[i])
        if(this[i] == 3){
            this.splice(i, 1)
        }
    }
    return this
}

arr.remove3();

console.log(arr); //[1,2]

let arr02 = [1,2, 3,4,5,6,7]
arr02.remove3();
console.log(arr02);

