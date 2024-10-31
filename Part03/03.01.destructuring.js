// 03.01.틀린그림 찾기능력이 향상되는 Destructuring 문법

let arr = [2,3,4];

let [ a01,b,c = 4 ] =[]; // 모양만 맞춰 변수를 선언하면 변수가 생김

// let obj = { name : 'Jung', age : 30 };

// object 데이터를 꺼내 변수에 담기
// 변수명을 Key명과 똑같이 써야함
let { name : 이름 , age, gender = '남', addr : 주소 = 'Seoul' } = { name : 'Jung', age : 30 } 

// 반대로 변수들을 Object에 집어넣고 싶은 경우
let name01 = 'Jung';
let age01 = 50;
let obj01 = { name01 , age01 }

// Object 데이터들을 파라미터로 만들고 싶은 경우
// 함수 파라미터 만들떄도 destructuring 문법 사용가능
let obj02 = { name02 : 'Jung', age02 : 100 };

function 함수( { name02, age02 }){
    console.log(name02)
    console.log(age02)
}

함수( { name02 : 'Jung', age02 : 100  });

function 함수03( [name03, age03] ){
    console.log(name03)
    console.log(age03)
}

함수03( [1, 2] );

// 연습문제
// Q1. 변수를 마구 만들었는데 말입니다..
var [number, address] = [ 30, 'seoul' ]; 
var {address : a , number = 20 } = { address, number };
// a : undefined
// address :  'seoul'
// number : 30

// 정답
// a : 'seoul'
// address :  'seoul'
// number : 30

// Q2. 다음과 같은 Object에서 데이터를 뽑아서 변수를 만들고 싶습니다. 
let 신체정보 = {
    body: {
      height: 190,
      weight: 70
    },
    size: ["상의 Large", "바지 30인치"],
  };

  let { body: { height : 키, weight : 몸무게 }, size : [상의사이즈, 하의사이즈 ]} = 신체정보;