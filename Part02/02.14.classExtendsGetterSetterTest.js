// 02.14.class, extends, getter, setter 연습문제 5개

// 1. 직접 class 구조 만들어보기
class 강아지 {
    constructor(타입, 색){
        this.type = 타입;
        this.color = 색;
        // 자식까지감
        this.한살먹기02 = function(){
            this.age++;
        }
    }
    한살먹기01(){
        // 강아지.prototype의 함수 한살먹기, 자식.prototype에 추가x
        this.age = this.age + 1;
    }
}

var 강아지1 = new 강아지('말티즈', 'white'); //  {type: '말티즈', color: 'white'}

// 2. 이번엔 고양이관련 object들을 만들고 싶습니다. 
class 고양이 extends 강아지{
    constructor(타입, 색, 나이){
        super(타입, 색, 나이);
        this.age = 나이;
    }

}

var 고양이1 = new 고양이('코숏', '태비', 5); // {type: '코숏', color: '태비', age: 5}

// 03.고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다. 
// 강아지 class로부터 생성된 오브젝트가 사용되면 에러를, 고양이 class로부터 생성된 오브젝트가 사용될떄 기능이 실행되어야함

//  에러 발생해야함
강아지1.한살먹기01(); 
강아지1.한살먹기02();
console.log(강아지1.age) // NaN
// 기능 작동
고양이1.한살먹기01();
고양이1.한살먹기02();

// 04. getter/setter를 이용해봅시다
class Unit{
    constructor(공격력 = 5, 체력 = 100){
        this.attackAbil = 공격력;
        this.health = 체력;
    }

    get battlePoint(){
        return console.log(this.attackAbil + this.health)
    }

    set heal(a){
        this.health = this.health + parseInt(a)
    }
    
}

let 용병1 = new Unit();
console.log(용병1)

let 용병2 = new Unit(10, 200);
용병2.battlePoint;
용병2.heal = 100;

// 05. getter/setter를 이용해봅시다2 

// (1) data 오브젝트안에 setter 역할 함수를 하나 만들어보십시오. 
var data = {
    odd : [],
    even : [],
    setter함수(...inputArray){
        for(let a = 0; a < inputArray.length; a++) {
            if(inputArray[a] % 2 == 1){
                this.odd.push(inputArray[a])
            } else {
                this.even.push(inputArray[a])
            }
        }
    }, 
    get getter함수(){
        let result = []
        this.odd.forEach(function(a){
            result.push(a)
        })
        this.even.forEach(function(a){
            result.push(a)
        })
        return result.sort();
    }
  }

data.setter함수(1,2,3,4,5);

console.log(data.getter함수)