// 함수의 arguments
// 모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을 경우 -> arguments
function func05( a, b, c ){
    for(var i = 0; i < arguments.length; i++ ){
        console.log(arguments[i])
    }
}

// func05(55, 66, 77);

// 함수에서 쓰는 점3개 Rest 파라미터
// arguments는 예전꺼
// ... -> spread operator, rest parameter
function func06(a, b, ...파라미터들){ // 이 자리에 오는 모든 파라미터를 []에 보관해줌
    파라미터들.forEach(function(i){
        console.log(i)
    })
}

func06(55, 66, 77, 88, 99, 111);

// 함수 파리미터 자리에 붙으면 Rest
// 나머지는 spread

// 주의점
// 가장 뒤에 써야함. func05(...rest, a, b) -> 이렇게 안됨