function Validation(values){

    let error = {}
    //const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const codigo_pattern = /^\d+$/; 
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

   /* if(values.email === ""){
        error.email = "Name should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }*/

    if (values.codigo === "") {
        error.codigo = "Codigo should not be empty";
    } else if (!codigo_pattern.test(values.codigo)) {
        error.codigo = "Codigo should be a positive integer";
    } else {
        error.codigo = "";
    }

    
    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation;