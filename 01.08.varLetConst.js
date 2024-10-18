// 간단한 연습문제
if (true) {
    let a = 1;
    var b = 2;
    if (true) {
      let b = 3;
    }
    console.log(b);
  }

// 내 정답 코드
// 2가 뜰거같음, let b 는 내장함수 if에서만 3이고, 또한 var b는 전역 변수이기 때문에 콘솔에는 2가 출력될듯