window.addEventListener('load', () => {
    
    //DOM elements
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const checkBtn = document.getElementById('check');
    const riddleNumber = document.getElementById('riddle-number')
    const riddle = document.getElementById('riddle');

    //custom variables
    let riddleIndex = 1;

    function showRiddle() {
        if (riddleIndex > 20) riddleIndex = 20;
        else if (riddleIndex < 1) riddleIndex = 1;

        riddleNumber.innerHTML = '#' + riddleIndex;
        riddle.innerHTML = riddles[riddleIndex].riddle;
    }
    showRiddle();

    prev.onclick = () => {
        --riddleIndex;
        showRiddle();
    }
    next.onclick = () => {
        ++riddleIndex;
        showRiddle();
    }
    checkBtn.onclick = () => {
        let userAnswer = document.getElementById('input').value
        if (userAnswer == '') {
            alert('Please fill in text-box!');
        }else if (userAnswer == riddles[riddleIndex].answer) {
            alert('CORRECT!');
        }else {
            alert('WRONG!');
        }
    }

    window.addEventListener('mousedown', (e) => {
        if (e.button == 2) {
            alert("If you are trying to copy and paste the riddle elsewhere to cheat then think again!");
        }
    })
   
});
