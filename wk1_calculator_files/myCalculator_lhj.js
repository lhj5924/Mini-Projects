const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.calculator__buttons'); 
const display = document.querySelector('.calculator__display--bare')

const firstOperend = document.querySelector('.calculator__operend--left');
const operator = document.querySelector('.calculator__operator'); 
const secondOperend = document.querySelector('.calculator__operend--right');

const calculatedResult = document.querySelector('.calculator__result'); 


// 첫 번째 숫자, 연산자, 두 번째 숫자를 확정해야 합니다.
// 위 세 가지를 함수 calculate에 전달하고, 돌려받은 결괏값이 마지막 칸에 입력되어야 합니다.
// 그 뒤에 숫자가 또 입력되면?? => 숫자 추가 + 앞에 입력된 값의 타입에 따라서 연산 변경되어야 함
// -> 앞이 숫자일 경우 : 앞의 숫자의 텍스트에 추가되어야 함
// -> 앞이 오퍼레이터일 경우 : 


function calculate(n1, operator, n2) {
    let result = 0;
    if (operator === '+') {
      result = Number(n1) + Number(n2);
    }
    if (operator === '-') {
      result = Number(n1) - Number(n2);
    }
    if (operator === '*') {
      result = Number(n1) * Number(n2);
    }
    if (operator === '/') {
      result = Number(n1) / Number(n2);
    }
    return String(result);
}

let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {

    const target = event.target;
    const action = target.classList[0];
    const buttonContent = target.textContent;
   
    if (target.matches('button')) {
        // const spanMaker = document.createElement("span");
        // display.append(spanMaker);
        // spanMaker.className = "digitSpace"

        if (action === 'number') {
            if (firstOperend.textContent !== '0') {
                secondOperend.textContent = buttonContent;
              } else {
                firstOperend.textContent = buttonContent;
              }
      }
      
      if (action === 'operator') {
        operator.textContent = buttonContent;
        // operator.textContent = buttonContent;
      }
  
      if (action === 'decimal') {
        console.log('소수점 버튼');
      }
  
      if (action === 'clear') {
        console.log('초기화 버튼');
        firstOperend.textContent = '0';
        operator.textContent = '+';
        secondOperend.textContent = '0';
        calculatedResult.textContent = '0';
      }
  
      if (action === 'calculate') {
        console.log('계산 버튼');

        calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
      }
    }
});
  




  
//   // ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.
  
//   const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
//   let firstNum, operatorForAdvanced, previousKey, previousNum;
  
//   buttons.addEventListener('click', function (event) {
//     // 버튼을 눌렀을 때 작동하는 함수입니다.
  
//     const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//     const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//     const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//     // ! 위 코드는 수정하지 마세요.
  
//     // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
//     if (target.matches('button')) {
//       if (action === 'number') {}
//       if (action === 'operator') {}
//       if (action === 'decimal') {}
//       if (action === 'clear') {}
//       if (action === 'calculate') {}
//     }
  
//   });