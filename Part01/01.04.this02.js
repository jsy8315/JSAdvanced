function 기계() {
    this.이름 = "Kim"
}

var obj = new 기계();

document.getElementById('버튼').addEventListener('click', function(e){
        console.log(this);
        // e.currentTarget, 지금 이벤트 리스너가 달린 곳, 지금 이벤트 동작하는 곳
        console.log(e.currentTarget); 
    }
)

document.getElementById('버튼02').addEventListener('click', function(e){
        var arr01 = [1, 2, 3];
        arr01.forEach(function(a){
            console.log(this)
            // 여기서는 일반함수인 콜백함수(forEach 내부의 function)에서 사용되었기에, window가 출력된다
        }); 
    }
)

var obj02 = {
    names : ['kim', 'lee', 'jung'],
    func02 : function(){
        // console.log(this)
        obj02.names.forEach(function(){
            console.log(this)
        })
    }
}

// 메소드 안의 this이기 떄문에 kim, lee, jung이 차례로 출력될듯요 -> wrong
obj02.func02();

//this를 포함하는 (function(){ console.log(this) })는 근본없는 일반함수이기에 window가 출력된다

// 내부함수를 arrow function으로 바꿀 경우
// 내부의 this 값을 변화시키지 않음

// # this 키워드 정리

// 1. 그냥 쓰거나 일반함수 안에서 사용 → window
// 2. 메서드 내의 this → 메서드의 주인님 객체
// 3. constructor → constructor로 새로 생성되는 오브젝트
// 4. 이벤트리스너 → 이벤트 리스너가 일어나는 곳(e.currentTarget)