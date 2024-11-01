// 03.04.동기/비동기처리와 콜백함수라는 용어 깔끔하게 정리

console.log(1);
setTimeout(function(){
    console.log(2);
}, 1000);
console.log(3);

// 1, 3, 2

// 자바스크립트는 동기식처리, 한번에 한줄씩 처리 -> synchoronous
// 오래걸리는 연산 만나면 멈춤
// setTimeout() // 비동기식처리 도와주는 함수

// 비동기식 처리 asynchronous :  web API 덕분에 가능
// 오래걸리는 작업이 있으면 제껴주고 다른거부터 처리하는 방식, 자바스크립트를 실행하는 브라우저 덕분에 가능
// 오래걸리거나 실행행까지 오래걸리는 함수들의 예시 : SetTimeout, addEventListener, $.ajax
// 위 문법들을 사용해야 비동기방식으로 실행하는 것(콜백함수는 비동기방식x)
// web API로 보냄( 대기실 )

// js를 순차적으로 실행하려면 콜백함수(함수안에 들어가는 함수)를 사용함
// 첫ㅈ째함수 다음에 둘째함수를 실행하고 싶음
// 엄밀히 말하면 비동기는 아님, 콜백함수는 함수 디자인 패턴일 뿐
function 첫째함수(구멍){
    console.log(11);
    구멍();
}

function 둘째함수(){
    console.log(22);
}

// 콜백함수를 이용한 함수 디자인
첫째함수(둘째함수);

// 콜백함수의 문제점
첫째함수(function(){
    둘째함수(function(){
    })
}); // 알아보기 힘들다 -> 대안으로 나온 Promise 패턴

첫째함수().then(function(){

}).then(function(){

})

