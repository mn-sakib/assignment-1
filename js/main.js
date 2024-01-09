// Age Verifier Button 
let ageVerifier = document.getElementById("verifyButton");
// Age Verifier 
ageVerifier.addEventListener("click", function(){
    let getValue = parseInt(document.getElementById("ageInput").value);
    let showResult = document.getElementById("ageResult");
    if(getValue >= 18){
        showResult.innerText = "You are an Adult";
    }else if(getValue > 0){
        showResult.innerText = "You are a Child";
    }else{
        showResult.innerText = "You've entered a wrong age!";
    }
    document.getElementById("ageInput").value = "";
});
