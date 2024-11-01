// 03.05.인간의 언어로 설명하는 ES6 Promise

// 프로미스는 성공 실패 판정 기계이다 (암기)
// 콜백함수 만드는 거랑 비슷하지만 약간 기능이 더 많음
let 프로미스 = new Promise(function(resolve, reject){
    let 어려운연산 = 1 + 1;
    // 1 + 1 연산이 끝나면 resolve() 판정을 내려주세요
    resolve(); // 성공판정 -> then 실행
    //reject(); // 실패판정 -> then 실행안되고 catch 실행
}); 

프로미스.then(function(){
    console.log('성공ㅅㅅ') //프로미스가 성공일 경우 실행할 코드
}).catch(function(){
    console.log('실패ㅜㅠ') // 실패할 경우에도 코드 실행 가능
})

// 뭐가 됐든, 성공이든 실패하든 실행하고 나면 실행
프로미스.finally(function(){
    console.log('finally');
})

let 프로미스02 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve();
    }, 1000);
    //reject(); 
}); 

프로미스02.then(function(){
    console.log('성공02ㅅㅅ')
}).catch(function(){
    console.log('실패02ㅜㅠ')
})

// Promise의 3가지 상태 (콘솔창에서 검색)
// 1.성공하면 <resolved>
// 2.판정 대기중이면 <pending>
// 3.실패하면 <rejected>

// Promise에 대한 오해
// 프로미스는 비동기적 처리가 가능하게 바꿔주는 마법의 문법이 아님
// 프로미스 내에서 10초 이상걸리는 오래가는 연산을 하면 -> 브라우저는 10초동안 멈춤
// 콜백함수 디자인의 대체품일뿐
// 프로미스가 적용된 곳들 : jQuery.ajax(), fetch()

