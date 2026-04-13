function checkMath() {
    const answer = document.getElementById('mathAnswer').value;
    const result = document.getElementById('mathResult');
    if (answer === '8') {
        result.textContent = 'Correct! Flag: FLAG{math_wizard}';
        result.style.color = 'green';
    } else {
        result.textContent = 'Wrong! Try again.';
        result.style.color = 'red';
    }
}

function checkRiddle() {
    const answer = document.getElementById('riddleAnswer').value.toLowerCase();
    const result = document.getElementById('riddleResult');
    if (answer === 'piano') {
        result.textContent = 'Correct! Flag: FLAG{riddle_solver}';
        result.style.color = 'green';
    } else {
        result.textContent = 'Wrong! Try again.';
        result.style.color = 'red';
    }
}

function checkCrypto() {
    const answer = document.getElementById('cryptoAnswer').value;
    const result = document.getElementById('cryptoResult');
    if (answer === 'Flag{crypto_is_fun}') {
        result.textContent = 'Correct! Flag: FLAG{crypto_master}';
        result.style.color = 'green';
    } else {
        result.textContent = 'Wrong! Try again.';
        result.style.color = 'red';
    }
}