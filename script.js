function dial(data){
    var textfield = document.getElementById("text");
    var oldtext, newtext;
    if(data == 'CE'){
        textfield.value = '';
    }else if(data == 'C'){
        oldtext = textfield.value;
        newtext = oldtext.slice(0,-1);
        textfield.value = newtext;
    }else{
        textfield.value += data;
    }
}

function calculate(){
    var textfield = document.getElementById("text");
    var data = textfield.value;
    try{
        var result = eval(data);
        textfield.value = result;
    }catch(error){
        document.getElementById("result").value = "Syntax error";
    }
}