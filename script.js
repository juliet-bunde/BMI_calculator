function calculateBMI(){
    let weight = document.getElementById("inputweight").value;
    let height = document.getElementById("inputheight").value;

    //convert value to number
    weight = parseFloat(weight);
    height = parseFloat(height);

    //validate the inputs
    if(weight==="" || height==="" || weight<=0 || height <=0){
        document.getElementById('result').innerHTML = "Please enter a valid weight and height.";
        return;
    }
    
}