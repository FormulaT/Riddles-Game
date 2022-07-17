window.addEventListener('load', () => {
    
    //DOM elements
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const checkBtn = document.getElementById('check');
    const riddle = document.getElementById('riddle');

    //custom variables
    let riddleIndex = 1;

    function showRiddle() {
        if (riddleIndex > 20) riddleIndex = 20;
        else if (riddleIndex < 1) riddleIndex = 1;
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
        let userAnswer = document.getElementById('input').value()
        if (userAnswer == riddles[riddleIndex].answer) {
            alert('CORRECT!');
        }else {
            alert('WRONG!');
        }
    }
   
});
