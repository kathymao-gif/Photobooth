/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

// Hair selection
const hairOptions = document.getElementById("hairOptions");
document.getElementById("hairButton").addEventListener("click", () => {
 hairOptions.show();
});

const hcOptions = document.getElementById("hcOptions");
const openHC = document.getElementById("hairColor");
const closeHC = document.getElementById("closeHC");
openHC.addEventListener("click", () => {
  if (hairOptions.open) {
    hcOptions.showModal();
  }
});
closeHC.addEventListener("click", () => hcOptions.close());
 
//Bangs
function showBangs(bangsNumber) {
  for (let i = 1; i <= 4; i++) {
    const bangs = document.querySelector(`#bangs${i}`);
    if (bangs) bangs.style.display = "none";
  }

  const selectedBangs = document.querySelector(`#bangs${bangsNumber}`);
  if (selectedBangs) selectedBangs.style.display = "block";
}

for (let i = 1; i <= 4; i++) {
  const btn = document.getElementById(`bangs${i}btn`);
  if (btn) btn.addEventListener("click", () => showBangs(i));
}

//short hair selection
function showShort(shortNumber) {
  for (let i = 1; i <= 4; i++) {
    const short = document.querySelector(`#short${i}`);
    if (short) short.style.display = "none";
  }

  const selectedShort = document.querySelector(`#short${shortNumber}`);
  if (selectedShort) selectedShort.style.display = "block";
}

for (let i = 1; i <= 4; i++) {
  const btn = document.getElementById(`short${i}btn`);
  if (btn) btn.addEventListener("click", () => showShort(i));
}

// expression selection
document.getElementById("eyesButton").addEventListener("click", () => {
  const eyeOptions = document.getElementById("eyeOptions");
  eyeOptions.show();  
});

const eyeOptions = document.getElementById("eyeOptions");
const ecOptions = document.getElementById("ecOptions");
const openEC = document.getElementById("eye-color");
const closeEC = document.getElementById("closeEC");
openEC.addEventListener("click", () => {
  if (eyeOptions.open) {
    ecOptions.showModal();
  }
});
closeEC.addEventListener("click", () => ecOptions.close());

//Eyes
function showEyes(eyeNumber) {
  for (let i = 1; i <= 4; i++) {
    const eyes = document.querySelector(`#eyes${i}`);
    if (eyes) eyes.style.display = "none";
  }
  const iris = document.querySelector("#iris");
  const eyeballs = document.querySelector("#eyeballs");
  if (iris) iris.style.display = "none";
  if (eyeballs) eyeballs.style.display = "none";

  const rightEye2 = document.querySelector("#rightEye2");
  const rightEyeball = document.querySelector("#rightEyeball");
  if (rightEye2) rightEye2.style.display = "none";
  if (rightEyeball) rightEyeball.style.display = "none";

  const leftEye3 = document.querySelector("#leftEye3");
  const leftEyeball = document.querySelector("#leftEyeball");
  if (leftEye3) leftEye3.style.display = "none";
  if (leftEyeball) leftEyeball.style.display = "none";
  
  const selectedEyes = document.querySelector(`#eyes${eyeNumber}`);
  if (selectedEyes) selectedEyes.style.display = "block";

  if (eyeNumber === 1) {
    if (iris) iris.style.display = "block";
    if (eyeballs) eyeballs.style.display = "block";
  }

  if (eyeNumber === 2) {
    if (rightEye2) rightEye2.style.display = "block";
    if (rightEyeball) rightEyeball.style.display = "block";
  }

  if (eyeNumber === 3) {
    if (leftEye3) leftEye3.style.display = "block";
    if (leftEyeball) leftEyeball.style.display = "block";
  }
}

for (let i = 1; i <= 4; i++) {
  const btn = document.getElementById(`eyes${i}btn`);
  if (btn) btn.addEventListener("click", () => showEyes(i));
}

// mouth selection
document.getElementById("mouthButton").addEventListener("click", () => {
  const mouthOptions = document.getElementById("mouthOptions");
  mouthOptions.show();
});

function showMouth(mouthNumber) {
  for (let i = 1; i <= 5; i++) {
    const mouth = document.querySelector(`#mouth${i}`);
    if (mouth) mouth.style.display = "none";
  }
  const mouth3upper = document.querySelector("#mouth3upper");
  const mouth3lower = document.querySelector("#mouth3lower");
  if (mouth3upper) mouth3upper.style.display = "none";
  if (mouth3lower) mouth3lower.style.display = "none";

  const selectedMouth = document.querySelector(`#mouth${mouthNumber}`);
  if (selectedMouth) selectedMouth.style.display = "block";

  if (mouthNumber === 3) {
    if (mouth3upper) mouth3upper.style.display = "block";
    if (mouth3lower) mouth3lower.style.display = "block";
  }
}

for (let i = 1; i <= 5; i++) {
  const btn = document.getElementById(`mouth${i}btn`);
  if (btn) btn.addEventListener("click", () => showMouth(i));
}

//skin-tone options
document.getElementById("skinButton").addEventListener("click", () => {
  const skinToneOptions = document.getElementById("skinToneOptions");
  skinToneOptions.show();  
});
document.getElementById("closeSkinTone").addEventListener("click", () => {
  document.getElementById("skinToneOptions").close();
});

    //skin-tone color selection
const paletteST = document.getElementById("paletteST");
if (paletteST) {
  const colorButtons = paletteST.querySelectorAll(".stOptions");

  colorButtons.forEach(table => {
    table.addEventListener("click", () => {
      const stColor = table.style.background;
      face.style.fill = stColor;
      });
    });
  };

//color selection
const paletteHC = document.getElementById("paletteHC");
if (paletteHC) {
  const hairColorButtons = paletteHC.querySelectorAll(".colorChange");

  hairColorButtons.forEach(table => {
    table.addEventListener("click", () => {
      const hairColor = table.style.background;

      const hairElements = ['bangs1', 'bangs2', 'bangs3', 'bangs4', 'short1', 'short2', 'short3', 'short4'];
      hairElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
          element.style.fill = hairColor;
        }
      });
    });
  });
}
//eye color - Loop through all eye color buttons from paletteEC table
const paletteEC = document.getElementById("paletteEC");
if (paletteEC) {
  const eyeColorButtons = paletteEC.querySelectorAll(".colorChange");

  eyeColorButtons.forEach(table => {
    table.addEventListener("click", () => {
      // Extract the color from the button's background style attribute
      const eyeColor = table.style.background;

      // Set the fill color for all eye elements
      const eyeElements = ['iris', 'rightEye2', 'leftEye3'];
      eyeElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
          element.style.fill = eyeColor;
        }
      });
    });
  });
}
