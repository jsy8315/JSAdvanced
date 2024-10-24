// 문제1
// undefined 출력
// 정답 : 에러 발생 : let변수는 hoisting이 되긴 하지만, var변수처럼 자동으로 undefined값을 할당해주지않음

// 문제2
// Hello 출력, var는 전역변수
// 정답 : 에러, var 함수가 호이스팅되어 맨 위로 가고, 아직 함수가 아니기 때문에 함수()하면 에러발생

// 문제3
// 1출력, a = 2는 익명함수내에서 해당

// 문제4
// let으로 선언한 a는 중복선언을 허용하지 않기 떄문에, window.a = 3이 에러 발생
// var b는 제대로 적용, 따라서 정답은 5
// 정답 : window.a = 3은 에러발생이 아니라, 조금 더 범위가 작고 가까운 1을 참조, 따라서 1 + 4

// 문제5
for (let i = 1; i < 6; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
    
  }

// setTimeout 함수가 실행되기 전에 먼저 var i가 진행됨 , let으로 바꾸면 해결
// 정답-> setTimeout의 내부코드는 반복문과 동시에 실행되는게 아니라, 나중에 실행

// 문제6
var 버튼들 = document.querySelectorAll('button');
var 모달창들 = document.querySelectorAll('div');

for (let i = 0; i < 3; i++){

  버튼들[i].addEventListener('click', function(){
    모달창들[i].style.display = 'block';
  });

}
// let을 쓰면 해결
// var는 블록이나 루프 수준의 스코프를 형성하지 않고, (코드 블록을 무시함) 함수나 전역 스코프를 가짐
// 반복문이 돌고 나서도 let i = 어쩌구 값이 {for 반복문} 내에 남아있기 때문에 그걸 모달창들[i].style.display = 'block'; 의 i값으로 가져다 쓰게 됩니다.