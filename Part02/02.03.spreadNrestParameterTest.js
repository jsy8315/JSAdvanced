// 01. spread 문제1
// var a = [1,2,3];
// var b = '김밥';
// var c = [...b, ...a];
// console.log(c);

// 위 코드의 출력 결과는?
// 내 정답코드
// 김, 밥, 1, 2, 3 
// ['김', '밥', 1, 2, 3 ] 

// 02. spread 문제2
// var a = [1,2,3];
// var b = ['you', 'are'];
// var c = function(a,b){
//   console.log( [[...a], ...[...b]][1] )
// }
// c(a,b);

// 내 정답코드
// [1, 2, 3], 'you', 'are', 1 
//'you'


// 03. default 파라미터 문제 1
// a자리에 파라미터 하나만 넣음, 9출력

// 04. default 파라미터 문제 2
// 15 출력

// 05. array를 만들어주는 함수를 제작하고 싶습니다
// function 어레이(...아몰랑){
//    return [아몰랑]
// }

// var newArray = 어레이(1, 2, 3, 4, 5);
// console.log(newArray);

// 06. 최댓값 구하기
// var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
// console.log( Math.max(...numbers ) )

// 07. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다
// function 정렬(){
//     let element = [...arguments][0]
//     let empty = []
//     for(let i = 0; i < element.length; i++){
//         empty.push(element[i])
//     }
//     console.log(empty.sort())
// }
// function 정렬(a){
//     console.log(...[...a].sort())
// }

// 정렬('bear');

// 08. 데이터마이닝 기능 만들기
// 내 코드
// function 글자세기(a){

//     let element = [...a].sort()
//     let result = {}
//     let firstEle = element[0]
//     result[firstEle] = 1;

//     for(let i = 1; i < element.length; i++){
//         if (element[i - 1] == element[i]){
//             result[element[i]]++
//         } else {
//             result[element[i]] = 1;
//         }
//     }

//     return console.log(result);
// }
// 글자세기('aacbbb')
// 글자세기('dbsrerberbebj');

// function 글자세기02(글){

//     var 결과 = {};
//     [...글].forEach(function(a){
//         if( 결과[a] > 0){
//             결과[a]++
//         } else {
//             결과[a] = 1
//         }
//     }
//     )

//     console.log(결과)
// }

// 글자세기02('aacbbb')
