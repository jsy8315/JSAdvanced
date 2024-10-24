var 오브젝트1 = {
    data : "kim",
    간지함수 : function() {
        console.log("오브젝트1 테스트")
        console.log(this)
    }
}

오브젝트1.간지함수();

var 오브젝트2 = {
    data: {
        간지함수2 : function(){
            console.log("오브젝트2에서 나오는 this")
            console.log(this)
        }
    }
}

오브젝트2.data.간지함수2();

function 간지나는함수3(){
    console.log("간지나는함수3")
    console.log(this)
}

간지나는함수3();