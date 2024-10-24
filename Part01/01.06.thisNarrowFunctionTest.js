// his & arrow function 연습문제 3개

// 1. 간단한 메소드 만들기
var 사람 = {
    name: '손흥민',
    sayHi : function() {
        console.log("안녕ㅋ나는 " + this.name + "ㅋ")
    }
}

사람.sayHi();

// 2. 오브젝트 내의 데이터를 전부 더해주는 메소드 만들기
var 자료 = {
    data : [1, 2, 3, 4, 5]
}

자료.전부더하기 = function() {
    let result = 0;

    this.data.forEach((a) => {
        result += a
    })
    return console.log(result)
}

자료.전부더하기();

// 03. setTimeout을 이용한 콘솔창 출력
document.getElementById('버튼').addEventListener('click', function(){
    let a = this.innerHTML
    setTimeout(function(){
        console.log(a)
    }, 1000)
});