function calculateBMI(){
    let weight = document.getElementById("inputweight").value;
    let height = document.getElementById("inputheight").value;

    //convert value to number
    weight = parseFloat(weight);
    height = parseFloat(height);

    //validate the inputs
<<<<<<< HEAD
    if(weight<=0 || height <=0){
=======
    if(weight===''||height===''||weight<=0||height<=0){
>>>>>>> 74b49cfa413b50d7c03ce155d1fc730cd3cec547
        document.getElementById('result').innerText = "Please enter a valid weight and height.";
        return;
    }

    //calculate BMI
    let BMI = (weight/(height*height));
    BMI = BMI.toFixed(2);

    //categorize BMI
    let category = "";

    if(BMI<18.5){
        category = "underweight";
    }else if (BMI>=18.5 && BMI < 24.9){
        category = "normal weight";
    }else if (BMI >=25 && BMI < 29.9){
        category = "overweight";
    }else{
        category = "obesity";
    }

    //display the result
    document.getElementById("result").innerText = `Your BMI is ${BMI}, (${category}).`;

}