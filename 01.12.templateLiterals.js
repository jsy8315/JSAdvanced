// backquote 문자열 장점
// 1. 엔터키 가능
var 문자 = `대
흥
민`;

var 문자2 = `대흥민`;

// alert(문자);

// 2. 중간중간 변수 넣기 쉬움

var a2 = `Hi Im Super ${문자2} 경배ㄱㄱ 내가 누구? ${문자2}`

// alert(a2);

// 3. backquote 문자열 + 함수 tagged literal
// 문자를 해체할 수 있음
function 해체분석기(문자들, 변수들, 변수들2){
    console.log(문자들);
    console.log(변수들);
    console.log(변수들2);
}

해체분석기`Hi Im Super ${문자2} 경배ㄱㄱ 내가 누구? ${문자2}`
// 1. 파라미터1. 문자들을 Array화 해줌
// 2. 파라미터2. ${변수}
// 3. 파라미터3. ${변수}
// 해체기준은 중괄호

// 글자의 순서를 변경하고 싶을떄
function 해체분석기2(문자들, 변수들){
    console.log( 문자들[1] + 변수들 + 문자들[0] )
}

해체분석기2`Hi Im Super ${문자2} 경배ㄱㄱ 내가 누구? ${문자2}`