var pants = 0;
var socks = 100;
`바지${pants} 양말은 ${socks}개 남아있음`
console.log(`바지${pants} 양말은 ${socks}개 남아있음`);

// 01. 문자 중간 '양말'과 '바지' 단어 순서를 해체분석기를 이용해서 바꾸고 싶음

function 해체분석기(문자들, 변수들, 변수들2){
    console.log(문자들[1] + 변수들 + 문자들[0] + 변수들2  + 문자들[2])
}

해체분석기`바지${pants}, 양말은 ${socks}개 남아있음`

// 02. pants가 0개면 '바지다팔렸어용 양말 100'이라는 문자로 바꾸는 해체분석기 제작

function 해체분석기2(문자들, 변수들, 변수들2){
    if (변수들 == 0) {
        console.log(`바지 다 팔렸어용` + 문자들[1] + 변수들2 + 문자들[2])
    }
}

해체분석기2`바지${pants}, 양말은 ${socks}개 남아있음`
