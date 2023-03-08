// dqbach.github.io/calculator-dom/index.html
function calcOneNumber(n, oper){
    if (oper === 'del-all') {
      result = '';
      // document.getElementById('result').innerHTML= '';
    }
    else if (oper === 'clear-entry') {
      result = n.substring(0, n.length - 1);
    }
    else if (oper === 'switch'){
      n *= -1;
      result = n;
    }
    // else if (oper === 'decimal') { 
    // } ???
    else if (oper === 'power') {
      result=  Math.pow(n, 2);
    }
    else if (oper === 'factorial') {
      //     var fact =1;
      //     for (var i = 2; i <= n; i++) {
      //             fact *= i;
  
      //     }
      var fact = 1;
      for(i = n; i > 1; i--) {
        fact *= i;
      }
      result = fact;
    }
    else if (oper === 'percent') {
      result=  n/100;
    }
    else if (oper === 'sqrt') {
      result= Math.sqrt(n);
    }
    updateResult(result);
  }
  
  function calcTwoNumber(n1, oper, n2) {
    if (oper === '*') {
      result= n1*n2;
    }
    else if (oper === '/') {
      result= n1/n2;
    }
    else if (oper === '+') {
      result= n1+n2;    
    }
    else if (oper === '-') {
      result= n1-n2;
    }
    updateResult(result);
  }
  
  function updateResult(result) {
    document.getElementById('viewer').innerHTML= result;
  }
  
  var firstNumber ='';
  var secondNumber ='';
  var oper = '';
  
  function updateDisplay(firstNumber, oper, secondNumber) {
    $('#viewer').html(firstNumber + oper + secondNumber);
  }
  
  $('.num').click(function() {
    if (oper == '') {
      firstNumber += $(this).attr('value')
    } else {
      secondNumber += $(this).attr('value')
    }
    updateDisplay(firstNumber, oper, secondNumber)
  });
  
  $('.oper').click(function() {
    oper = $(this).attr('value');
    updateDisplay(firstNumber, oper, secondNumber);
  
  })
  
  $('#equal').click(function(){
    result = 0
    calcTwoNumber (parseFloat(firstNumber), oper, parseFloat(secondNumber));
    $('#viewer').html(result);
  }) 
  
  
  
  