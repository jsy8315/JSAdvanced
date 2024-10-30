// 02.13.getter, setter 대체 왜 쓰는지 알아보기

var 사람 = {
    name : 'Park',
    age : 30,
    nextAge(){
        return this.age + 1;
    },
    setAge(나이){
        this.age = parseInt(나이);
    }
}

사람.age; // 로 직접 꺼내기 보다, 자료를 꺼내는 법을 만들어서 꺼냄

사람.nextAge(); // 31, 왜???

// 함수를 만들어 object 데이터를 다루는 이유
// 1. object 자료가 복잡할 떄 이득
// 2. object 자료 수정/관리 편리 Or 실수 방지 가능
사람.age = '20' // 실수로 문자 넣음
사람.setAge('200'); // 200 

// 복잡한 소괄호 꼴보기 싫다면 -> set / get 키워드
// setter : set은 데이터 변경하는 함수에, 파라미터가 1개 있어야함(2개 안됨)
// getter : get은 데이터 꺼내쓰는 함수에, return이 있어야함, 파라미터 없어야함
var 사람02 = {
    name : 'Park',
    age : 30,
    get nextAge(){
        return this.age + 1;
    },
    set setAge(나이){
        this.age = parseInt(나이);
    }
}

사람02.setAge = '2000'; // 2000
사람02.nextAge; // 2001


// class에서 사용하는 get/set
class 사람03 {
    constructor(){
        this.name = 'Jung';
        this.age = 20;
    }
    get nextAge(){
        return this.age + 1
    }
    set setAge(나이){
        this.age = parseInt(나이);
    }
}

let 수영01 = new 사람03();
console.log(수영01.nextAge) // 21
수영01.setAge = 100;
console.log(수영01.age); // 100