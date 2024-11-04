// 03.07. Promise 어려워서 싫으면 async/await을 사용합시다
// ES8에서 나온 asyn/await 문법

// 연산이 끝나면 특정 코드를 실행하고 싶음
// async를 function앞에 붙이면 함수 실행 후에 Promise 오브젝트가 남는다
// 단점 : 성공만 할 수 있음, Promise처럼 실패 못씀, 강제로 할 수 밖에
async function 더하기(){
    return 1 + 1
}

더하기().then(function(결과){
    console.log('성공이에영');
    console.log(결과);
})


async function 더하기02(){
    let 프로미스 = new Promise(function(resolve, reject){
        let 힘든연산 = 2 + 1;
        resolve(힘든연산);
        // reject(힘든연산);
    });

    try{ // 이걸해보고 에러나면 
        let 결과02 = await 프로미스; // 프로미스 해결까지 기다려주셈
        // 프로미스 통해서 나온 결과 힘든연산을 resolve(힘든연산) 통해서 담음
        console.log(결과02);
    } catch{ // 이걸 실행해주세요
        console.log('프로미스 연산이 잘 안됐네ㅎㅎ') 
    }
}
더하기02();

// 직접 풀어볼 예제 : 유저가 <button>을 클릭하면 성공 판정하는 Promise를 await 사용해서 만들기
// 성공시 '성공했어요'출력

async function awaitFunc(){
    let promise03 = new Promise(function(resolve, reject){
        let result03 = 2 + 2;
        document.getElementsByClassName('awaitBtn')[0].addEventListener('click', function(){
            resolve(result03);
        });
    });

    try {
        let 결과03 = await promise03;
        console.log('성공03ㅅㅅ : ' + 결과03);
    } catch {
        console.log('실패03ㅅㅅ');
    }
}

awaitFunc();

