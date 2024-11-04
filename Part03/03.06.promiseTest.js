// 03.06.ES6 Promise 간단 연습문제 & 해설
// Q1. <img> 이미지 로딩 성공시 특정 코드를 실행하고 싶습니다. 
// 재사용하기 용이한 프로미스
let promiseTest01 = new Promise(function(resolve, reject){
    document.getElementById('test').addEventListener('load', function(){
        resolve();
    });
    document.getElementById('test').addEventListener('error', function(){
        reject();
    })
})

promiseTest01.then(function(){
    console.log('성공~');
}).catch(function(){
    console.log('실패~');
})

// Q2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶습니다. 

