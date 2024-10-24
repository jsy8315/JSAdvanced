// 자바스크립트 함수 업그레이드하기 (default parameter/arguments)

function sumFunc(a, b){
    console.log(a + b);
}

sumFunc(1); // 파라미터가 2개 들어가는 함수인데 1개만 써도 에러가 안남

//b자리에 아무것도 안 넣을 경우 10을 넣어주세요
function sumFunc2(a, b = 2 * a ){
    console.log(a + b);
}

sumFunc2(2);

// 함수도 가능

function 임시함수() {
    return 10
}
function sumFunc3(a, b = 임시함수() ){
    console.log(a + b);
}

sumFunc3(35)

// 함수의 arguments
// 모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을 경우 -> arguments
function func05( a, b, c ){
    for(var i = 0; i < arguments.length; i++ ){
        console.log(arguments[i])
    }
}

func05(55, 66, 77);