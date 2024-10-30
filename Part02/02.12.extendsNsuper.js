// 02.12.객체지향5. class를 복사하는 extends / super

// 이거랑 유사한 class를 하나 더 만들고 싶으면? extends(class 상속)
// class 하나 더 하드코딩,,,? 복사/상속할 값이 많으면 힘들힘들

class 할아버지 {
    constructor(name, name02){
        this.성 = 'Kim';
        this.이름 = name;
        this.이름02 = name02;
    }
    sayHi(){
        console.log('hiㅋㅋ난 할아버지임ㅋㅋ') // 할아버지 prototype 추가
    }
}

var 할아버지1 = new 할아버지('판빙빙')

// 이거랑 유사한 class를 만들고 싶음(할아버지 속성들 물려받아서)

class 아버지 extends 할아버지 {
    constructor(name, name02){
        // extneds해서 만든 class는 this 그냥은 못써요
        // super 다음에 써야함
        super(name, name02); 
        // constructor 내부에서 쓰는 super : 물려받는 class의 constructor라는 뜻
        // 아래와 의미가 같다
        // constructor(name){
        //     this.성 = 'Kim';
        //     this.이름 = name;
        //     this.이름02 = name02;
        // }
        this.나이 = 50;
    }
    sayHi(){
        console.log('안녕 저는 아빠임')
        // constructor 외부에서 쓰는 super : 부모 class의 prototype을 의미
        super.sayHi()
    }
}

var 아버지1 = new 아버지('구현', '꾹이아빠'); // {성: 'Kim', 이름: '구현', 이름02: '꾹이아빠', 나이: 50
console.log(아버지1.sayHi()); // 안녕 저는 아빠임 hiㅋㅋ난 할아버지임ㅋㅋ