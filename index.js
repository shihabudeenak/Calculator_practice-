let display = document.getElementById('display');

    function clearDisplay(){
      display.value = "";
    }

    function addToDisplay(value){
      display.value += value;
    }

    function removeOne(){
      let currentDisplay = display.value;
      let newDisplay = currentDisplay.slice(0,-1);
      display.value = newDisplay;
    }
    
    function calcDisplay(){
      try{
        display.value = eval(display.value)
      }catch(error){
        let a = 'Error';
        display.value = a;
      }
    }

