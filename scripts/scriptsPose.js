//Right hand pose
    document.getElementById("RHButton").addEventListener("click", () => {
    const eyeOptions = document.getElementById("RHOptions");
    eyeOptions.show();  
    });

    document.getElementById("closeRH").addEventListener("click", () => {
    document.getElementById("RHOptions").close();
    });

//Left hand pose
    document.getElementById("LHButton").addEventListener("click", () => {
    const LHOptions = document.getElementById("LHOptions");
    LHOptions.show();  
    });

    document.getElementById("closeLH").addEventListener("click", () => {
    document.getElementById("LHOptions").close();
    });

//Eye expression
    document.getElementById("eyeButton").addEventListener("click", () => {
    const eyeOptions = document.getElementById("eyeOptions");
    eyeOptions.show();  
    });

    document.getElementById("closeEye").addEventListener("click", () => {
    document.getElementById("eyeOptions").close();
    });

//Mouth expression
    document.getElementById("mouthButton").addEventListener("click", () => {
    const mouthOptions = document.getElementById("mouthOptions");
    mouthOptions.show();  
    });

    document.getElementById("closeMouth").addEventListener("click", () => {
    document.getElementById("mouthOptions").close();
    }); 
