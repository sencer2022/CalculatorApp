const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener('click', function(e){
    const element = e.target;
    
    if (!element.matches('button')) return; // Eğer tıklanılan elaman buton değilse fonksiyon içerisindeki sonraki kodlar işletilmez.
   
    if (element.classList.contains('operator')){
        console.log('Operator', element.value);
        return;
    }

    if(element.classList.contains('decimal')){
        console.log('Decimal', element.value);
        return;
    }

    if(element.classList.contains('clear')){
        console.log('Clear', element.value);
        return;
    }

    console.log('Number', element.value);

    
    
});