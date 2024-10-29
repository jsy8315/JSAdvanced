// 02.11. 객체지향4. ES6방식으로 안쉽게 구현하는 상속기능 (class)

class 부모 {
    // constructor를 함수처럼 구현
    constructor(aa){
        this.name = "Kim"
        this.nickname = aa;
        // constructor에 추가하거나 (자식이 직접 함수를 가짐)
        this.sayHi = function(){
            console.log(`hi ${this.name} ㅋㅋ! bye ${this.nickname} ㅎㅎ`)
        }
    }
    // 여기에 추가하거나, 근데 여기에 쓰면 자식 오브젝트에 추가 안됨, 부모.prototype에 추가됨
    sayHi02(){
        console.log(`Hello02 ${this.name} ㅋㅋ`)
    }
    // 함수 추가 시 이런식으로 해도 됨
    sayHi03(){
        console.log(`Hello03 ${this.name} ㅋㅋㅋㅋㅋ`)
    }
}

var 자식 = new 부모("APT");

console.log(자식) // 부모 {name : 'Kim', sayHi : f}

자식.__proto__; //출력하면 뭐가 나올까? 상속이 된거니 {name : 'Kim', sayHi : f}가 출력될듯?
console.log(자식.__proto__) // {sayHi02 : f}, "_proto__"는 부모의 유전자를 알려주는 것

// 부모님 prototype을 출력해주세요~
Object.getPrototypeOf(자식); //  {sayHi02 : f}

// 함수 추가의 다른 예02
부모.prototype.sayHi04 = function(){
    console.log(`Hello04 ${this.name} ㅋㅋㅋㅋㅋ`)
}

// 객체지향 문법은 왜 쓰냐?
// 01. object를 여러개 만들어 쓰려구

