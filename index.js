
const charCount = document.getElementById('char-count');
const resetBtn = document.getElementById('reset-btn');
const maxCharNum = 160;

textarea.addEventListener('input', () => {
    const textarea = document.getElementById('textarea').value;

    const counter = maxCharNum - textarea.length;
    charCount.textContent = `${counter}/160`;

    if (counter <= 0) {
        document.getElementById('textarea').disabled = true;
    }
    else if (counter < 30) {
        charCount.style.color = 'orange';
    }
    else {
        charCount.style.color = 'black';
    }
});

resetBtn.addEventListener('click', () => {
    location.reload();
})

document.getElementById("textarea").focus();