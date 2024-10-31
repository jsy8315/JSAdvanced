// 03.02.import / export 를 이용한 파일간 모듈식 개발
// <script src="03.02.importExport.js"></script>, 전통적인 방식

// ES6부터는 import, export로 구현,근데 IE에선 안됨, React, Angular에서 사용
let a = 10;
export default a;

// 여러개 내보내는 export 문법
export let b = 20
export let c = 30;

// let b = 20;
// let c = 30;
// export {b, c};

export let d = 40;
