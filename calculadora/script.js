
const display = document.getElementById("display"); // display area

function addToDisplay(value) {
    display.value += value;
    }

function clearDisplay() { 
    display.value = '';
}

function deleteDisplay() {    
    display.value = display.value.slice(0, -1);
    }

function calculate() {
   try{ 
        display.value = eval(display.value);
    }
    catch(error){ 
    display.value = "TRY AGAIN";
}
}

 document.addEventListener('keydown', function(event) {
        let key = event.key;
        if (/\d/.test(key) || ['+', '-', '*', '/', ','].includes(key)) {
            addToDisplay(key);
        } else if (key === 'Enter') {2,
            calculate();
        } else if (key === 'Backspace') {
            deleteDisplay();
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });

    function playSound() {
        let sound = document.getElementById('click-sound');
        sound.currentTime = 0;  // Rewind to the start
        sound.play();
    }