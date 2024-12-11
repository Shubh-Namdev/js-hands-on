const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(e);
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if ( height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `<span>invalid height</span>`
    }else if ( weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `<span>invalid weight</span>`
    }else {
        const bmi = (weight /((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

        const conc = document.querySelector('#conclusion');
        
        if (bmi < 18.6) {
            conc.textContent = "you are under weight";
        }else if (bmi < 24.9) {
            conc.textContent = "you are in a normal range";
        }else {
            conc.textContent = "you are over weight";
        }
    }
})

