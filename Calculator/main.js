expression = ""

function calculate(value){

    expression += value;
    document.getElementById("input_box").value = expression;
    
}

function result(){

    if(expression != ""){       
        res = eval(expression);
    
        document.getElementById("input_box").value += (" = " + res);
    
        expression = "";
    }

}

function clr(){
    
    expression = "";
    
    document.getElementById("input_box").value = "";
}