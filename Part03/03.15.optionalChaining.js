// 03.15.?. / ?? 연산자 (optional chaining)

let user = {
    name: 'Jung',
    age: 100
}

user.name // Jung

// ?왼쪽이 비었으면 (Null, undefined) 오른쪽 undefined
user?.age // 100

// 언제쓰냐? 중첩된 object 자료에서 자료뽑을때 reference 에러없이 안전하게 뽑을 수 있음
// 점찍는게 2개 이상일때 사용
let user02 = {
    name: 'Kim',
    // age: {value : 40} 실수로 빼먹었다고 가정
}

console.log(user02.age?.value); // 빼먹은것때문에 여기서부터 코드 실행 중단
// undefined 출력

// 예시1
documenet.querySelector('#a')?.innerHTML

// ?? nullish coalescing 연산자
let user03;

// 만약 데이터가 3초 후에, 늦게 도착하면?
console.log(user03 ?? '로딩중')
