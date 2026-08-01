// ==========================================
// 1. SELECT ALL YOUR HTML ELEMENTS
// ==========================================
const inputA = document.getElementById('currency-A');
const inputB = document.getElementById('currency-B');


const API_KEY = '181feb7c62d49b9dd609ecadf2448a14';
// ==========================================
// 2. SIMULATE THE REAL-TIME CURRENCY API DATA
// ==========================================
// In the future, your API will provide this data dynamically

async function getLiveConversions(amount, fromCurrency, toCurrency, targetInput) {
    if(!amount || isNaN(amount)){
        targetInput.value = '';
        return;
    };

    try{
    const url = `https://fixer.io/{API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

    const response = await fetch(url, {
        headers: {"apikey": API_KEY}
    });
    
    const data = await response.json();

    if(data.success){
        targetInput.value = data.result.toFixed(2);

    }
    }catch(error){
        console.error("Currency API Connection error:", error);
    }

    
}




// ==========================================
// 3. LIVE TWO-WAY CALCULATIONS (REAL-TIME SYNC)
// ==========================================

// When typing in Field A, calculate and fill Field B
inputA.addEventListener('input', () => {
  getLiveConversions(inputA.value, 'USD', 'EUR', inputB);
  
  if (!isNaN(valueA)) {
    inputB.value = (valueA * currentExchangeRate).toFixed(2);
  } else {
    inputB.value = ''; // Clear field B if field A is empty/cleared
  }
});

// When typing in Field B, calculate backward and fill Field A
inputB.addEventListener('input', () => {
  getLiveConversions(inputA.value, 'EUR', 'USD', inputA);
  
  if (!isNaN(valueB)) {
    inputA.value = (valueB / currentExchangeRate).toFixed(2);
  } else {
    inputA.value = ''; // Clear field A if field B is empty/cleared
  }
});

// ==========================================
// 4. RUN INITIALIZATION
// ==========================================
// Run the label update immediately when the page loads


