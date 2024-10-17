[1,2,3,4].forEach( (a) => console.log(a) )

// Arrow function 특징 : 바깥에 있던 this 값을 내부에서 그대로 사용
document.getElementById("버튼02").addEventListener('click',
    (e) => {
        console.log(this);
        console.log(e.currentTarget);
    }
)

var obj03 = {
    func03 : () => {
        console.log(this);
    }
}

obj03.func03();