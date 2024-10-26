// 03. 함수 파라미터 넣을떄
function 더하기(a, b, c){
    console.log(a + b + c)
}

var 어레이 = [1, 4, 6]
// array 넣게 너무 번거로워~

더하기.apply(undefined, 어레이); // 옛날 방식

더하기(...어레이);

// apply, call 함수 개념
// apply 함수를 옮겨와서 실행해주세요
var person = {
    인사 : function(){
        console.log(this.name +  " HI");
    }
}

var person2 = {
    name : "SonHM"
}

//안사 메서드를 기깔나게 만들어서, person2에도 적용시키고 싶음
person.인사(); //undefined HI
person.인사.apply(person2); // SonHM HI 
console.log("---------------")
// call

person.인사.apply(person2, [1, 2]); //apply는 파라미터를 array형태로 집어넣기 가능
// 
person.인사.call(person2, 1, 2);
