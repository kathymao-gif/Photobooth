/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
// Hair selection
const hairOptions = document.getElementById("hairOptions");
document.getElementById("hairButton").addEventListener("click", () => {
 hairOptions.show();
});

const hcOptions = document.getElementById("hcOptions");
const openButton = document.getElementById("hairColor");
const closeButton = document.getElementById("closeHC");
openButton.addEventListener("click", () => {
  if (hairOptions.open) {
    console.log('hair options open');
    hcOptions.showModal();
  } else {
    hcOptions.close();
  }
});
//closeButton.addEventListener("click", () => { console.log('clicked close'); hcOptions.close(); });

//Bangs
const bangs1btn = document.getElementById("bangs1btn");
bangs1btn.addEventListener("click", showBangs1);
function showBangs1() {
  const bangs1 = document.querySelector("#bangs1").style.display;
  const bangs2 = document.querySelector("#bangs2").style.display;
  const bangs3 = document.querySelector("#bangs3").style.display;
  const bangs4 = document.querySelector("#bangs4").style.display;
  
  if (bangs2 === "block") {
    document.querySelector("#bangs2").style.display = "none";
  }if (bangs3 === "block") {
    document.querySelector("#bangs3").style.display = "none";
  }if (bangs4 === "block") {
    document.querySelector("#bangs4").style.display = "none";
  }if(bangs1 === "none")
    document.querySelector("#bangs1").style.display = "block";
  else
    document.querySelector("#bangs1").style.display = "none";
}
const bangs2btn = document.getElementById("bangs2btn");
bangs2btn.addEventListener("click", showBangs2);
function showBangs2() {
  const bangs1 = document.querySelector("#bangs1").style.display;
  const bangs2 = document.querySelector("#bangs2").style.display;
  const bangs3 = document.querySelector("#bangs3").style.display;
  const bangs4 = document.querySelector("#bangs4").style.display;
  
  if (bangs1 === "block") {
    document.querySelector("#bangs1").style.display = "none";
  }if (bangs3 === "block") {
    document.querySelector("#bangs3").style.display = "none";
  }if (bangs4 === "block") {
    document.querySelector("#bangs4").style.display = "none";
  }if(bangs2 === "none")
    document.querySelector("#bangs2").style.display = "block";
  else
    document.querySelector("#bangs2").style.display = "none";
}
const bangs3btn = document.getElementById("bangs3btn");
bangs3btn.addEventListener("click", showBangs3);
function showBangs3() {
  const bangs1 = document.querySelector("#bangs1").style.display;
  const bangs2 = document.querySelector("#bangs2").style.display;
  const bangs3 = document.querySelector("#bangs3").style.display;
  const bangs4 = document.querySelector("#bangs4").style.display;
  
  if (bangs1 === "block") {
    document.querySelector("#bangs1").style.display = "none";
  }if (bangs2 === "block") {
    document.querySelector("#bangs2").style.display = "none";
  }if (bangs4 === "block") {
    document.querySelector("#bangs4").style.display = "none";
  }if(bangs3 === "none")
    document.querySelector("#bangs3").style.display = "block";
  else
    document.querySelector("#bangs3").style.display = "none";
}

const bangs4btn = document.getElementById("bangs4btn");
bangs4btn.addEventListener("click", showBangs4);
function showBangs4() {
  const bangs1 = document.querySelector("#bangs1").style.display;
  const bangs2 = document.querySelector("#bangs2").style.display;
  const bangs3 = document.querySelector("#bangs3").style.display;
  const bangs4 = document.querySelector("#bangs4").style.display;
  
  if (bangs1 === "block") {
    document.querySelector("#bangs1").style.display = "none";
  }if (bangs2 === "block") {
    document.querySelector("#bangs2").style.display = "none";
  }if (bangs3 === "block") {
    document.querySelector("#bangs3").style.display = "none";
  }if(bangs4 === "none")
    document.querySelector("#bangs4").style.display = "block";
  else
    document.querySelector("#bangs4").style.display = "none";
}
//short hair selection
const short1btn = document.getElementById("short1btn");
short1btn.addEventListener("click", showShort1);
function showShort1() {
  const short1 = document.querySelector("#short1").style.display;
  const short2 = document.querySelector("#short2").style.display;
  const short3 = document.querySelector("#short3").style.display;
  const short4 = document.querySelector("#short4").style.display;
  
  if (short2 === "block") {
    document.querySelector("#short2").style.display = "none";
  }if (short3 === "block") {
    document.querySelector("#short3").style.display = "none";
  }if (short4 === "block") {
    document.querySelector("#short4").style.display = "none";
  }if(short1 === "none")
    document.querySelector("#short1").style.display = "block";
  else
    document.querySelector("#short1").style.display = "none";
}
const short2btn = document.getElementById("short2btn");
short2btn.addEventListener("click", shortBangs2);
function shortBangs2() {
  const short1 = document.querySelector("#short1").style.display;
  const short2 = document.querySelector("#short2").style.display;
  const short3 = document.querySelector("#short3").style.display;
  const short4 = document.querySelector("#short4").style.display;
  
  if (short1 === "block") {
    document.querySelector("#short1").style.display = "none";
  }if (short3 === "block") {
    document.querySelector("#short3").style.display = "none";
  }if (short4 === "block") {
    document.querySelector("#short4").style.display = "none";
  }if(short2 === "none")
    document.querySelector("#short2").style.display = "block";
  else
    document.querySelector("#short2").style.display = "none";
}
const short3btn = document.getElementById("short3btn");
short3btn.addEventListener("click", showShort3);
function showShort3() {
  const short1 = document.querySelector("#short1").style.display;
  const short2 = document.querySelector("#short2").style.display;
  const short3 = document.querySelector("#short3").style.display;
  const short4 = document.querySelector("#short4").style.display;
  
  if (short1 === "block") {
    document.querySelector("#short1").style.display = "none";
  }if (short2 === "block") {
    document.querySelector("#short2").style.display = "none";
  }if (short4 === "block") {
    document.querySelector("#short4").style.display = "none";
  }if(short3 === "none")
    document.querySelector("#short3").style.display = "block";
  else
    document.querySelector("#short3").style.display = "none";
}

const short4btn = document.getElementById("short4btn");
short4btn.addEventListener("click", showShort4);
function showShort4() {
  const short1 = document.querySelector("#short1").style.display;
  const short2 = document.querySelector("#short2").style.display;
  const short3 = document.querySelector("#short3").style.display;
  const short4 = document.querySelector("#short4").style.display;
  
  if (short1 === "block") {
    document.querySelector("#short1").style.display = "none";
  }if (short2 === "block") {
    document.querySelector("#short2").style.display = "none";
  }if (short3 === "block") {
    document.querySelector("#short3").style.display = "none";
  }if(short4 === "none")
    document.querySelector("#short4").style.display = "block";
  else
    document.querySelector("#short4").style.display = "none";
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
const eyes1btn = document.getElementById("eyes1btn");
eyes1btn.addEventListener("click", showEyes1);
function showEyes1() {
  const dollEyes = document.querySelector("#dollEyes").style.display;
  const eyes1 = document.querySelector("#eyes1").style.display;
  const eyes2 = document.querySelector("#eyes2").style.display;
  const eyes3 = document.querySelector("#eyes3").style.display;
  const eyes4 = document.querySelector("#eyes4").style.display;
  
  if (dollEyes === "block") {
    document.querySelector("#dollEyes").style.display = "none";
  }
  if (eyes2 === "block") {
    document.querySelector("#eyes2").style.display = "none";
  }if (eyes3 === "block") {
    document.querySelector("#eyes3").style.display = "none";
  }if (eyes4 === "block") {
    document.querySelector("#eyes4").style.display = "none";
  }if(eyes1 === "none")
    document.querySelector("#eyes1").style.display = "block";
  else
    document.querySelector("#eyes1").style.display = "none";
}
const eyes2btn = document.getElementById("eyes2btn");
eyes2btn.addEventListener("click", showEyes2);
function showEyes2() {
  const dollEyes = document.querySelector("#dollEyes").style.display;
  const eyes1 = document.querySelector("#eyes1").style.display;
  const eyes2 = document.querySelector("#eyes2").style.display;
  const eyes3 = document.querySelector("#eyes3").style.display;
  const eyes4 = document.querySelector("#eyes4").style.display;
  
  if (dollEyes === "block") {
    document.querySelector("#dollEyes").style.display = "none";
  }
  if (eyes1 === "block") {
    document.querySelector("#eyes1").style.display = "none";
  }if (eyes3 === "block") {
    document.querySelector("#eyes3").style.display = "none";
  }if (eyes4 === "block") {
    document.querySelector("#eyes4").style.display = "none";
  }if(eyes2 === "none")
    document.querySelector("#eyes2").style.display = "block";
  else
    document.querySelector("#eyes2").style.display = "none";
}
const eyes3btn = document.getElementById("eyes3btn");
eyes3btn.addEventListener("click", showEyes3);
function showEyes3() {
  const dollEyes = document.querySelector("#dollEyes").style.display;
  const eyes1 = document.querySelector("#eyes1").style.display;
  const eyes2 = document.querySelector("#eyes2").style.display;
  const eyes3 = document.querySelector("#eyes3").style.display;
  const eyes4 = document.querySelector("#eyes4").style.display;

  if (dollEyes === "block") {
    document.querySelector("#dollEyes").style.display = "none";
  }
  if (eyes1 === "block") {
    document.querySelector("#eyes1").style.display = "none";
  }if (eyes2 === "block") {
    document.querySelector("#eyes2").style.display = "none";
  }if (eyes4 === "block") {
    document.querySelector("#eyes4").style.display = "none";
  }if(eyes3 === "none")
    document.querySelector("#eyes3").style.display = "block";
  else
    document.querySelector("#eyes3").style.display = "none";
}

const eyes4btn = document.getElementById("eyes4btn");
eyes4btn.addEventListener("click", showEyes4);
function showEyes4() {
  const dollEyes = document.querySelector("#dollEyes").style.display;
  const eyes1 = document.querySelector("#eyes1").style.display;
  const leftEye1 = document.querySelector("#leftEye1").style.display;
  const rightEye1 = document.querySelector("#rightEye1").style.display;
  const eyes2 = document.querySelector("#eyes2").style.display;
  const rightEye2 = document.querySelector("#rightEye2").style.display;
  const eyes3 = document.querySelector("#eyes3").style.display;
  const leftEye3 = document.querySelector("#leftEye3").style.display;
  const eyes4 = document.querySelector("#eyes4").style.display;
  
  if (dollEyes === "block") {
    document.querySelector("#dollEyes").style.display = "none";
  }
  if (eyes1 === "block") {
    document.querySelector("#eyes1").style.display = "none";
  }if (leftEye1 === "block") {
    document.querySelector("#rightEye1").style.display = "none";
  }if (rightEye1 === "block") {
    document.querySelector("#leftEye1").style.display = "none";
  }if (eyes2 === "block") {
    document.querySelector("#eyes2").style.display = "none";
  }if (rightEye2 === "block") {
    document.querySelector("#rightEye2").style.display = "none";
  }if (eyes3 === "block") {
    document.querySelector("#eyes3").style.display = "none";
  }if (leftEye3 === "block") {
    document.querySelector("#leftEye3").style.display = "none";
  }if(eyes4 === "none")
    document.querySelector("#eyes4").style.display = "block";
  else
    document.querySelector("#eyes4").style.display = "none";
}
// mouth selection
document.getElementById("mouthButton").addEventListener("click", () => {
  const mouthOptions = document.getElementById("mouthOptions");
  mouthOptions.show();  
});

const mouth1btn = document.getElementById("mouth1btn");
mouth1btn.addEventListener("click", showMouth1);
function showMouth1() {
  const dollMouth = document.querySelector("#dollMouth").style.display;
  const mouth1 = document.querySelector("#mouth1").style.display;
  const mouth2 = document.querySelector("#mouth2").style.display;
  const mouth3 = document.querySelector("#mouth3").style.display;
  const mouth3upper = document.querySelector("#mouth3upper").style.display;
  const mouth3lower = document.querySelector("#mouth3lower").style.display;
  const mouth4 = document.querySelector("#mouth4").style.display;
  const mouth5 = document.querySelector("#mouth5").style.display;

  if (dollMouth === "block") {
    document.querySelector("#dollMouth").style.display = "none";
  }
  if (mouth2 === "block") {
    document.querySelector("#mouth2").style.display = "none";
  }if (mouth3 === "block") {
    document.querySelector("#mouth3").style.display = "none";
  }if (mouth3upper === "block") {
    document.querySelector("#mouth3upper").style.display = "none";
  }if (mouth3lower === "block") {
    document.querySelector("#mouth3lower").style.display = "none";
  }if (mouth4 === "block") {
    document.querySelector("#mouth4").style.display = "none";
  }if (mouth5 === "block") {
    document.querySelector("#mouth5").style.display = "none";
  }if(mouth1 === "none")
    document.querySelector("#mouth1").style.display = "block";
  else
    document.querySelector("#mouth1").style.display = "none";
}
const mouth2btn = document.getElementById("mouth2btn");
mouth2btn.addEventListener("click", showMouth2);
function showMouth2() {
  const dollMouth = document.querySelector("#dollMouth").style.display;
  const mouth1 = document.querySelector("#mouth1").style.display;
  const mouth2 = document.querySelector("#mouth2").style.display;
  const mouth3 = document.querySelector("#mouth3").style.display;
  const mouth3upper = document.querySelector("#mouth3upper").style.display;
  const mouth3lower = document.querySelector("#mouth3lower").style.display;
  const mouth4 = document.querySelector("#mouth4").style.display;
  const mouth5 = document.querySelector("#mouth5").style.display;
  
  if (dollMouth === "block") {
    document.querySelector("#dollMouth").style.display = "none";
  }if (mouth1 === "block") {
    document.querySelector("#mouth1").style.display = "none";
  }if (mouth3 === "block") {
    document.querySelector("#mouth3").style.display = "none";
  }if (mouth3upper === "block") {
    document.querySelector("#mouth3upper").style.display = "none";
  }if (mouth3lower === "block") {
    document.querySelector("#mouth3lower").style.display = "none";
  }if (mouth4 === "block") {
    document.querySelector("#mouth4").style.display = "none";
  }if (mouth5 === "block") {
    document.querySelector("#mouth5").style.display = "none";
  }if(mouth2 === "none")
    document.querySelector("#mouth2").style.display = "block";
  else
    document.querySelector("#mouth2 ").style.display = "none";
}
const mouth3btn = document.getElementById("mouth3btn");
mouth3btn.addEventListener("click", showMouth3);
function showMouth3() {
  const dollMouth = document.querySelector("#dollMouth").style.display;
  const mouth1 = document.querySelector("#mouth1").style.display;
  const mouth2 = document.querySelector("#mouth2").style.display;
  const mouth3 = document.querySelector("#mouth3").style.display;
  const mouth3upper = document.querySelector("#mouth3upper").style.display;
  const mouth3lower = document.querySelector("#mouth3lower").style.display;
  const mouth4 = document.querySelector("#mouth4").style.display;
  const mouth5 = document.querySelector("#mouth5").style.display;

  if (dollMouth === "block") {
    document.querySelector("#dollMouth").style.display = "none";
  }
  if (mouth1 === "block") {
    document.querySelector("#mouth1").style.display = "none";
  }if (mouth2 === "block") {
    document.querySelector("#mouth2").style.display = "none";
  }if (mouth4 === "block") {
    document.querySelector("#mouth4").style.display = "none";
  }if (mouth5 === "block") {
    document.querySelector("#mouth5").style.display = "none"; 
  }if(mouth3 === "none"){
    document.querySelector("#mouth3").style.display = "block";
  }if(mouth3upper === "none"){
    document.querySelector("#mouth3upper").style.display = "block";
  }if(mouth3lower === "none"){
    document.querySelector("#mouth3lower").style.display = "block";
  }else {
    document.querySelector("#mouth3").style.display = "none";
    document.querySelector("#mouth3upper").style.display = "none";
    document.querySelector("#mouth3lower").style.display = "none";
  }
  }

const mouth4btn = document.getElementById("mouth4btn");
mouth4btn.addEventListener("click", showMouth4);
function showMouth4() {
  const dollMouth = document.querySelector("#dollMouth").style.display;
  const mouth1 = document.querySelector("#mouth1").style.display;
  const mouth2 = document.querySelector("#mouth2").style.display;
  const mouth3 = document.querySelector("#mouth3").style.display;
  const mouth3upper = document.querySelector("#mouth3upper").style.display;
  const mouth3lower = document.querySelector("#mouth3lower").style.display;
  const mouth4 = document.querySelector("#mouth4").style.display;
  const mouth5 = document.querySelector("#mouth5").style.display;
  
  if (dollMouth === "block") {
    document.querySelector("#dollMouth").style.display = "none";
  }if (mouth1 === "block") {
    document.querySelector("#mouth1").style.display = "none";
  }if (mouth2 === "block") {
    document.querySelector("#mouth2").style.display = "none";
  }if (mouth3 === "block") {
    document.querySelector("#mouth3").style.display = "none";
  }if (mouth3upper === "block") {
    document.querySelector("#mouth3upper").style.display = "none";
  }if (mouth3lower === "block") {
    document.querySelector("#mouth3lower").style.display = "none";
  }if (mouth5 === "block") {
    document.querySelector("#mouth5").style.display = "none";
  }if(mouth4 === "none")
    document.querySelector("#mouth4").style.display = "block";
  else
    document.querySelector("#mouth4").style.display = "none";
}
const mouth5btn = document.getElementById("mouth5btn");
mouth5btn.addEventListener("click", showMouth5);
function showMouth5() {
  const dollMouth = document.querySelector("#dollMouth").style.display;
  const mouth1 = document.querySelector("#mouth1").style.display;
  const mouth2 = document.querySelector("#mouth2").style.display;
  const mouth3 = document.querySelector("#mouth3").style.display;
  const mouth3upper = document.querySelector("#mouth3upper").style.display;
  const mouth3lower = document.querySelector("#mouth3lower").style.display;
  const mouth4 = document.querySelector("#mouth4").style.display;
  const mouth5 = document.querySelector("#mouth5").style.display;
  
  if (dollMouth === "block") {
    document.querySelector("#dollMouth").style.display = "none";
  }
  if (mouth1 === "block") {
    document.querySelector("#mouth1").style.display = "none";
  }if (mouth2 === "block") {
    document.querySelector("#mouth2").style.display = "none";
  }if (mouth3 === "block") {
    document.querySelector("#mouth3").style.display = "none";
  }if (mouth3upper === "block") {
    document.querySelector("#mouth3upper").style.display = "none";
  }if (mouth3lower === "block") {
    document.querySelector("#mouth3lower").style.display = "none";
  }if (mouth4 === "block") {
    document.querySelector("#mouth4").style.display = "none";
  }if(mouth5 === "none")
    document.querySelector("#mouth5").style.display = "block";
  else
    document.querySelector("#mouth5").style.display = "none";
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
const st11 = document.getElementById("st11");
st11.addEventListener("click", skinTone11);
function skinTone11() {
  face.style.fill='#53382B'; 
}
const st12 = document.getElementById("st12");
st12.addEventListener("click", skinTone12);
function skinTone12() {
  face.style.fill='#604930'; 
}

const st21 = document.getElementById("st21");
st21.addEventListener("click", skinTone21);
function skinTone21() {
  face.style.fill='#704F48'; 
}

const st22 = document.getElementById("st22");
st22.addEventListener("click", skinTone22);
function skinTone22() {
  face.style.fill='#89625F'; 
  neck.style.fill='#89625F'; 
}

const st31 = document.getElementById("st31");
st31.addEventListener("click", skinTone31);
function skinTone31() {
  face.style.fill='#966A57'; 
  neck.style.fill='#966A57'; 
}
const st32 = document.getElementById("st32");
st32.addEventListener("click", skinTone32);
function skinTone32() {
  face.style.fill='#B47E69'; 
  neck.style.fill='#B47E69';
}

const st41 = document.getElementById("st41");
st41.addEventListener("click", skinTone41);
function skinTone41() {
  face.style.fill='#DDA36D';
  neck.style.fill='#DDA36D';  
}
const st42 = document.getElementById("st42");
st42.addEventListener("click", skinTone42);
function skinTone42() {
  face.style.fill='#EFC8A2'; 
  neck.style.fill='#EFC8A2'; 
}

const st51 = document.getElementById("st51");
st51.addEventListener("click", skinTone51);
function skinTone51() {
  face.style.fill='#EDDFCD'; 
  neck.style.fill='#EDDFCD'; 
}
const st52 = document.getElementById("st52");
st52.addEventListener("click", skinTone52);
function skinTone52() {
  face.style.fill='#E8D4D3'; 
  neck.style.fill='#E8D4D3';
}
// color selection
/*const c11 = document.getElementById("c11");
c11.addEventListener("click", color11);
function color11() {
  bangs1.style.fill='#560100'; 
  bangs2.style.fill='#560100';
  bangs3.style.fill='#560100';
  bangs4.style.fill='#560100';
  short1.style.fill='#560100';
  short2.style.fill='#560100';
  short3.style.fill='#560100';
  short4.style.fill='#560100';
}
const c12 = document.getElementById("c12");
c12.addEventListener("click", color12);
function color12() {
  bangs1.style.fill='#553900'; 
  bangs2.style.fill='#553900';
  bangs3.style.fill='#553900';
  bangs4.style.fill='#553900';
  short1.style.fill='#553900';
  short2.style.fill='#553900';
  short3.style.fill='#553900';
  short4.style.fill='#553900';
}
const c13 = document.getElementById("c13");
c13.addEventListener("click", color13);
function color13() {
  bangs1.style.fill='#565500'; 
  bangs2.style.fill='#565500';
  bangs3.style.fill='#565500';
  bangs4.style.fill='#565500';
  short1.style.fill='#565500';
  short2.style.fill='#565500';
  short3.style.fill='#565500';
  short4.style.fill='#565500';
}
const c14 = document.getElementById("c14");
c14.addEventListener("click", color14);
function color14() {
  bangs1.style.fill='#567100'; 
  bangs2.style.fill='#567100';
  bangs3.style.fill='#567100';
  bangs4.style.fill='#567100';
  short1.style.fill='#567100';
  short2.style.fill='#567100';
  short3.style.fill='#567100';
  short4.style.fill='#567100';
}
const c15 = document.getElementById("c15");
c15.addEventListener("click", color15);
function color15() {
  bangs1.style.fill='#568D00'; 
  bangs2.style.fill='#568D00';
  bangs3.style.fill='#568D00';
  bangs4.style.fill='#568D00';
  short1.style.fill='#568D00';
  short2.style.fill='#568D00';
  short3.style.fill='#568D00';
  short4.style.fill='#568D00';
}

const c21 = document.getElementById("c21");
c21.addEventListener("click", color21);
function color21() {
  bangs1.style.fill='#56002F'; 
  bangs2.style.fill='#56002F';
  bangs3.style.fill='#56002F';
  bangs4.style.fill='#56002F';
  short1.style.fill='#56002F';
  short2.style.fill='#56002F';
  short3.style.fill='#56002F';
  short4.style.fill='#56002F';
}
const c22 = document.getElementById("c22");
c22.addEventListener("click", color22);
function color22() {
  bangs1.style.fill='#56392F'; 
  bangs2.style.fill='#56392F';
  bangs3.style.fill='#56392F';
  bangs4.style.fill='#56392F';
  short1.style.fill='#56392F';
  short2.style.fill='#56392F';
  short3.style.fill='#56392F';
  short4.style.fill='#56392F';
}
const c23 = document.getElementById("c23");
c23.addEventListener("click", color23);
function color23() {
  bangs1.style.fill='#56552F'; 
  bangs2.style.fill='#56552F';
  bangs3.style.fill='#56552F';
  bangs4.style.fill='#56552F';
  short1.style.fill='#56552F';
  short2.style.fill='#56552F';
  short3.style.fill='#56552F';
  short4.style.fill='#56552F';
}
const c24 = document.getElementById("c24");
c24.addEventListener("click", color24);
function color24() {
  bangs1.style.fill='#56712F'; 
  bangs2.style.fill='#56712F';
  bangs3.style.fill='#56712F';
  bangs4.style.fill='#56712F';
  short1.style.fill='#56712F';
  short2.style.fill='#56712F';
  short3.style.fill='#56712F';
  short4.style.fill='#56712F';
}
const c25 = document.getElementById("c25");
c25.addEventListener("click", color25);
function color25() {
  bangs1.style.fill='#568D2F';
  bangs2.style.fill='#568D2F';
  bangs3.style.fill='#568D2F';
  bangs4.style.fill='#568D2F';
  short1.style.fill='#568D2F';
  short2.style.fill='#568D2F';
  short3.style.fill='#568D2F';
  short4.style.fill='#568D2F';
}

const c31 = document.getElementById("c31");
c31.addEventListener("click", color31);
function color31() {
  bangs1.style.fill='#560046'; 
  bangs2.style.fill='#560046';
  bangs3.style.fill='#560046';
  bangs4.style.fill='#560046';
  short1.style.fill='#560046';
  short2.style.fill='#560046';
  short3.style.fill='#560046';
  short4.style.fill='#560046';
}
const c32 = document.getElementById("c32");
c32.addEventListener("click", color32);
function color32() {
  bangs1.style.fill='#583847'; 
  bangs2.style.fill='#583847';
  bangs3.style.fill='#583847';
  bangs4.style.fill='#583847';
  short1.style.fill='#583847';
  short2.style.fill='#583847';
  short3.style.fill='#583847';
  short4.style.fill='#583847';
}
const c33 = document.getElementById("c33");
c33.addEventListener("click", color33);
function color33() {
  bangs1.style.fill='#575547'; 
  bangs2.style.fill='#575547';
  bangs3.style.fill='#575547';
  bangs4.style.fill='#575547';
  short1.style.fill='#575547';
  short2.style.fill='#575547';
  short3.style.fill='#575547';
  short4.style.fill='#575547';
}
const c34 = document.getElementById("c34");
c34.addEventListener("click", color34);
function color34() {
  bangs1.style.fill='#567147';
  bangs2.style.fill='#567147';
  bangs3.style.fill='#567147';
  bangs4.style.fill='#567147';
  short1.style.fill='#567147';
  short2.style.fill='#567147';
  short3.style.fill='#567147';
  short4.style.fill='#567147';
}
const c35 = document.getElementById("c35");
c35.addEventListener("click", color35);
function color35() {
  bangs1.style.fill='#578D47'; 
  bangs2.style.fill='#578D47'; 
  bangs3.style.fill='#578D47';
  bangs4.style.fill='#578D47';
  short1.style.fill='#578D47';
  short2.style.fill='#578D47';
  short3.style.fill='#578D47';
  short4.style.fill='#578D47';
}

const c41 = document.getElementById("c41");
c41.addEventListener("click", color41);
function color41() {
  bangs1.style.fill='#560175'
  bangs2.style.fill='#560175';
  bangs3.style.fill='#560175';
  bangs4.style.fill='#560175';
  short1.style.fill='#560175';
  short2.style.fill='#560175';
  short3.style.fill='#560175';
  short4.style.fill='#560175';
}
const c42 = document.getElementById("c42");
c42.addEventListener("click", color42);
function color42() {
  bangs1.style.fill='#563875'
  bangs2.style.fill='#563875'
  bangs3.style.fill='#563875'
  bangs4.style.fill='#563875'
  short1.style.fill='#563875'
  short2.style.fill='#563875'
  short3.style.fill='#563875'
  short4.style.fill='#563875'; 
}
const c43 = document.getElementById("c43");
c43.addEventListener("click", color43);
function color43() {
  bangs1.style.fill='#555574'; 
  bangs2.style.fill='#555574'; 
  bangs3.style.fill='#555574'; 
  bangs4.style.fill='#555574'; 
  short1.style.fill='#555574'; 
  short2.style.fill='#555574'; 
  short3.style.fill='#555574'; 
  short4.style.fill='#555574'; 
}
const c44 = document.getElementById("c44");
c44.addEventListener("click", color44);
function color44() {
  bangs1.style.fill='#567174'
  bangs2.style.fill='#567174'
  bangs3.style.fill='#567174'
  bangs4.style.fill='#567174'
  short1.style.fill='#567174'
  short2.style.fill='#567174'
  short3.style.fill='#567174'
  short4.style.fill='#567174'; 
}
const c45 = document.getElementById("c45");
c45.addEventListener("click", color45);
function color45() {
  bangs1.style.fill='#578D75'; 
  bangs2.style.fill='#578D75'; 
  bangs3.style.fill='#578D75';
  bangs4.style.fill='#578D75';
  short1.style.fill='#578D75';
  short2.style.fill='#578D75';
  short3.style.fill='#578D75';
  short4.style.fill='#578D75';
}

const c51 = document.getElementById("c51");
c51.addEventListener("click", color51);
function color51() {
  bangs1.style.fill='#D50100';
  bangs2.style.fill='#D50100';
  bangs3.style.fill='#D50100';
  bangs4.style.fill='#D50100';
  short1.style.fill='#D50100';
  short2.style.fill='#D50100';
  short3.style.fill='#D50100';
  short4.style.fill='#D50100';
}
const c52 = document.getElementById("c52");
c42.addEventListener("click", color42);
function color42() {
  bangs1.style.fill='#D73900'
  bangs2.style.fill='#D73900'
  bangs3.style.fill='#D73900'
  bangs4.style.fill='#D73900'
  short1.style.fill='#D73900'
  short2.style.fill='#D73900'
  short3.style.fill='#D73900'
  short4.style.fill='#D73900'; 
}
const c53 = document.getElementById("c53");
c53.addEventListener("click", color53);
function color53() {
  bangs1.style.fill='#D65500'; 
  bangs2.style.fill='#D65500'; 
  bangs3.style.fill='#D65500'; 
  bangs4.style.fill='#D65500'; 
  short1.style.fill='#D65500'; 
  short2.style.fill='#D65500'; 
  short3.style.fill='#D65500'; 
  short4.style.fill='#D65500'; 
}
const c54 = document.getElementById("c54");
c44.addEventListener("click", color44);
function color44() {
  bangs1.style.fill='#D67101'
  bangs2.style.fill='#D67101'
  bangs3.style.fill='#D67101'
  bangs4.style.fill='#D67101'
  short1.style.fill='#D67101'
  short2.style.fill='#D67101'
  short3.style.fill='#D67101'
  short4.style.fill='#D67101'; 
}
const c55 = document.getElementById("c55");
c55.addEventListener("click", color55);
function color55() {
  bangs1.style.fill='#D68D00'; 
  bangs2.style.fill='#D68D00'; 
  bangs3.style.fill='#D68D00';
  bangs4.style.fill='#D68D00';
  short1.style.fill='#D68D00';
  short2.style.fill='#D68D00';
  short3.style.fill='#D68D00';
  short4.style.fill='#D68D00';
}

const c61 = document.getElementById("c61");
c61.addEventListener("click", color61);
function color61() {
  bangs1.style.fill='#D6012F'; 
  bangs2.style.fill='#D6012F'; 
  bangs3.style.fill='#D6012F';
  bangs4.style.fill='#D6012F';
  short1.style.fill='#D6012F';
  short2.style.fill='#D6012F';
  short3.style.fill='#D6012F';
  short4.style.fill='#D6012F';
}
const c62 = document.getElementById("c62");
c62.addEventListener("click", color62);
function color62() {
  bangs1.style.fill='#D7392F'; 
  bangs2.style.fill='#D7392F'; 
  bangs3.style.fill='#D7392F';
  bangs4.style.fill='#D7392F';
  short1.style.fill='#D7392F';
  short2.style.fill='#D7392F';
  short3.style.fill='#D7392F';
  short4.style.fill='#D7392F';
}
const c63 = document.getElementById("c63");
c63.addEventListener("click", color63);
function color63() {
  bangs1.style.fill='#D6552E'; 
  bangs2.style.fill='#D6552E'; 
  bangs3.style.fill='#D6552E';
  bangs4.style.fill='#D6552E';
  short1.style.fill='#D6552E';
  short2.style.fill='#D6552E';
  short3.style.fill='#D6552E';
  short4.style.fill='#D6552E'; 
}
const c64 = document.getElementById("c64");
c64.addEventListener("click", color64);
function color64() {
  bangs1.style.fill='#D5712F'; 
  bangs2.style.fill='#D5712F'; 
  bangs3.style.fill='#D5712F';
  bangs4.style.fill='#D5712F';
  short1.style.fill='#D5712F';
  short2.style.fill='#D5712F';
  short3.style.fill='#D5712F';
  short4.style.fill='#D5712F';
}
const c65 = document.getElementById("c65");
c65.addEventListener("click", color65);
function color65() {
  bangs1.style.fill='#D78D30'; 
  bangs2.style.fill='#D78D30'; 
  bangs3.style.fill='#D78D30';
  bangs4.style.fill='#D78D30';
  short1.style.fill='#D78D30';
  short2.style.fill='#D78D30';
  short3.style.fill='#D78D30';
  short4.style.fill='#D78D30';
}

const c71 = document.getElementById("c71");
c71.addEventListener("click", color71);
function color71() {
  bangs1.style.fill='#D5015D'; 
  bangs2.style.fill='#D5015D'; 
  bangs3.style.fill='#D5015D';
  bangs4.style.fill='#D5015D';
  short1.style.fill='#D5015D';
  short2.style.fill='#D5015D';
  short3.style.fill='#D5015D';
  short4.style.fill='#D5015D'; 
}
const c72 = document.getElementById("c72");
c72.addEventListener("click", color72);
function color72() {
  bangs1.style.fill='#D6385D'; 
  bangs2.style.fill='#D6385D'; 
  bangs3.style.fill='#D6385D';
  bangs4.style.fill='#D6385D';
  short1.style.fill='#D6385D';
  short2.style.fill='#D6385D';
  short3.style.fill='#D6385D';
  short4.style.fill='#D6385D';  
}
const c73 = document.getElementById("c73");
c73.addEventListener("click", color73);
function color73() {
  bangs1.style.fill='#D5555D'; 
  bangs2.style.fill='#D5555D'; 
  bangs3.style.fill='#D5555D';
  bangs4.style.fill='#D5555D';
  short1.style.fill='#D5555D';
  short2.style.fill='#D5555D';
  short3.style.fill='#D5555D';
  short4.style.fill='#D5555D';  
}
const c74 = document.getElementById("c74");
c74.addEventListener("click", color74);
function color74() {
  bangs1.style.fill='#D6715E'; 
  bangs2.style.fill='#D6715E'; 
  bangs3.style.fill='#D6715E';
  bangs4.style.fill='#D6715E';
  short1.style.fill='#D6715E';
  short2.style.fill='#D6715E';
  short3.style.fill='#D6715E';
  short4.style.fill='#D6715E';  
}
const c75 = document.getElementById("c75");
c75.addEventListener("click", color75);
function color75() {
  bangs1.style.fill='#D68D5E'; 
  bangs2.style.fill='#D68D5E'; 
  bangs3.style.fill='#D68D5E';
  bangs4.style.fill='#D68D5E';
  short1.style.fill='#D68D5E';
  short2.style.fill='#D68D5E';
  short3.style.fill='#D68D5E';
  short4.style.fill='#D68D5E'; 
}

const c81 = document.getElementById("c81");
c81.addEventListener("click", color81);
function color81() {
  bangs1.style.fill='#D50175'; 
  bangs2.style.fill='#D50175'; 
  bangs3.style.fill='#D50175';
  bangs4.style.fill='#D50175';
  short1.style.fill='#D50175';
  short2.style.fill='#D50175';
  short3.style.fill='#D50175';
  short4.style.fill='#D50175';
}
const c82 = document.getElementById("c82");
c82.addEventListener("click", color82);
function color82() {
  bangs1.style.fill='#D63975'; 
  bangs2.style.fill='#D63975'; 
  bangs3.style.fill='#D63975';
  bangs4.style.fill='#D63975';
  short1.style.fill='#D63975';
  short2.style.fill='#D63975';
  short3.style.fill='#D63975';
  short4.style.fill='#D63975'; 
}
const c83 = document.getElementById("c83");
c83.addEventListener("click", color83);
function color83() {
  bangs1.style.fill='#D55574'; 
  bangs2.style.fill='#D55574'; 
  bangs3.style.fill='#D55574';
  bangs4.style.fill='#D55574';
  short1.style.fill='#D55574';
  short2.style.fill='#D55574';
  short3.style.fill='#D55574';
  short4.style.fill='#D55574'; 
}
const c84 = document.getElementById("c84");
c84.addEventListener("click", color84);
function color84() {
  bangs1.style.fill='#D67175'; 
  bangs2.style.fill='#D67175'; 
  bangs3.style.fill='#D67175';
  bangs4.style.fill='#D67175';
  short1.style.fill='#D67175';
  short2.style.fill='#D67175';
  short3.style.fill='#D67175';
  short4.style.fill='#D67175';
}
const c85 = document.getElementById("c85");
c85.addEventListener("click", color85);
function color85() {
  bangs1.style.fill='#DCA27D'; 
  bangs2.style.fill='#DCA27D'; 
  bangs3.style.fill='#DCA27D';
  bangs4.style.fill='#DCA27D';
  short1.style.fill='#DCA27D';
  short2.style.fill='#DCA27D';
  short3.style.fill='#DCA27D';
  short4.style.fill='#DCA27D';  
}

//eye color
const e11 = document.getElementById("e11");
e11.addEventListener("click", color11);
function color11() {
  rightEye1.style.fill='#560100'; 
  rightEye2.style.fill='#560100';
  leftEye1.style.fill='#560100';
  leftEye3.style.fill='#560100';
}
const e12 = document.getElementById("e12");
e12.addEventListener("click", color12);
function color12() {
  rightEye1.style.fill='#553900'; 
  rightEye2.style.fill='#553900';
  leftEye1.style.fill='#553900';
  leftEye3.style.fill='#553900';
}
const e13 = document.getElementById("e13");
e13.addEventListener("click", color13);
function color13() {
  rightEye1.style.fill='#565500'; 
  rightEye2.style.fill='#565500';
  leftEye1.style.fill='#565500';
  leftEye3.style.fill='#565500';
}
const e14 = document.getElementById("e14");
e14.addEventListener("click", color14);
function color14() {
  rightEye1.style.fill='#567100'; 
  rightEye2.style.fill='#567100';
  leftEye1.style.fill='#567100';
  leftEye3.style.fill='#567100';
}
const e15 = document.getElementById("e15");
e15.addEventListener("click", color15);
function color15() {
  rightEye1.style.fill='#568D00'; 
  rightEye2.style.fill='#568D00';
  leftEye1.style.fill='#568D00';
  leftEye3.style.fill='#568D00';
}
const e21 = document.getElementById("e21");
e21.addEventListener("click", color21);
function color21() {
  rightEye1.style.fill='#56002F'; 
  rightEye2.style.fill='#56002F';
  leftEye1.style.fill='#56002F';
  leftEye3.style.fill='#56002F';
}
const e22 = document.getElementById("e22");
e22.addEventListener("click", color22);
function color22() {
  rightEye1.style.fill='#56392F'; 
  rightEye2.style.fill='#56392F';
  leftEye1.style.fill='#56392F';
  leftEye3.style.fill='#56392F';
}
const e23 = document.getElementById("e23");
e23.addEventListener("click", color23);
function color23() {
  rightEye1.style.fill='#56552F'; 
  rightEye2.style.fill='#56552F';
  leftEye1.style.fill='#56552F';
  leftEye3.style.fill='#56552F';
}
const e24 = document.getElementById("e24");
e24.addEventListener("click", color24);
function color24() {
  rightEye1.style.fill='#56712F'; 
  rightEye2.style.fill='#56712F';
  leftEye1.style.fill='#56712F';
  leftEye3.style.fill='#56712F';
}
const e25 = document.getElementById("e25");
e25.addEventListener("click", color25);
function color25() {
  rightEye1.style.fill='#568D2F';
  rightEye2.style.fill='#568D2F';
  leftEye1.style.fill='#568D2F';
  leftEye3.style.fill='#568D2F';
}

const e31 = document.getElementById("e31");
e31.addEventListener("click", color31);
function color31() {
  rightEye1.style.fill='#560046'; 
  rightEye2.style.fill='#560046';
  leftEye1.style.fill='#560046';
  leftEye3.style.fill='#560046';
}
const e32 = document.getElementById("e32");
e32.addEventListener("click", color32);
function color32() {
  rightEye1.style.fill='#583847'; 
  rightEye2.style.fill='#583847';
  leftEye1.style.fill='#583847';
  leftEye3.style.fill='#583847';
}
const e33 = document.getElementById("e33");
e33.addEventListener("click", color33);
function color33() {
  rightEye1.style.fill='#575547'; 
  rightEye2.style.fill='#575547';
  leftEye1.style.fill='#575547';
  leftEye3.style.fill='#575547';
}
const e34 = document.getElementById("e34");
e34.addEventListener("click", color34);
function color34() {
  rightEye1.style.fill='#567147';
  rightEye2.style.fill='#567147';
  leftEye1.style.fill='#567147';
  leftEye3.style.fill='#567147';
}
const e35 = document.getElementById("e35");
e35.addEventListener("click", color35);
function color35() {
  rightEye1.style.fill='#578D47'; 
  rightEye2.style.fill='#578D47'; 
  leftEye1.style.fill='#578D47';
  leftEye3.style.fill='#578D47';
}

const e41 = document.getElementById("e41");
e41.addEventListener("click", color41);
function color41() {
  rightEye1.style.fill='#560175'
  rightEye2.style.fill='#560175';
  leftEye1.style.fill='#560175';
  leftEye3.style.fill='#560175';
}
const e42 = document.getElementById("e42");
e42.addEventListener("click", color42);
function color42() {
  rightEye1.style.fill='#563875'
  rightEye2.style.fill='#563875'
  leftEye1.style.fill='#563875'
  leftEye3.style.fill='#563875'
}
const e43 = document.getElementById("e43");
e43.addEventListener("click", color43);
function color43() {
  rightEye1.style.fill='#555574'; 
  rightEye2.style.fill='#555574'; 
  leftEye1.style.fill='#555574'; 
  leftEye3.style.fill='#555574'; 
}
const e44 = document.getElementById("e44");
e44.addEventListener("click", color44);
function color44() {
  rightEye1.style.fill='#567174'
  rightEye2.style.fill='#567174'
  leftEye1.style.fill='#567174'
  leftEye3.style.fill='#567174'
}

const e45 = document.getElementById("e45");
e45.addEventListener("click", color45);
function color45() {
  rightEye1.style.fill='#578D75'; 
  rightEye2.style.fill='#578D75'; 
  leftEye1.style.fill='#578D75';
  leftEye3.style.fill='#578D75';
}

const e51 = document.getElementById("e51");
e51.addEventListener("click", color51);
function color51() {
  rightEye1.style.fill='#D50100';
  rightEye2.style.fill='#D50100';
  leftEye1.style.fill='#D50100';
  leftEye3.style.fill='#D50100';
}
const e52 = document.getElementById("e52");
e52.addEventListener("click", color52);
function color52() {
  rightEye1.style.fill='#D73900'
  rightEye2.style.fill='#D73900'
  leftEye1.style.fill='#D73900'
  leftEye3.style.fill='#D73900'
}
const e53 = document.getElementById("e53");
e53.addEventListener("click", color53);
function color53() {
  rightEye1.style.fill='#D65500'; 
  rightEye2.style.fill='#D65500'; 
  leftEye1.style.fill='#D65500'; 
  leftEye3.style.fill='#D65500'; 
}
const e54 = document.getElementById("e54");
e54.addEventListener("click", color54);
function color54() {
  rightEye1.style.fill='#D67101'
  rightEye2.style.fill='#D67101'
  leftEye1.style.fill='#D67101'
  leftEye3.style.fill='#D67101'
}
const e55 = document.getElementById("e55");
e55.addEventListener("click", color55);
function color55() {
  rightEye1.style.fill='#D68D00'; 
  rightEye2.style.fill='#D68D00'; 
  leftEye1.style.fill='#D68D00';
  leftEye3.style.fill='#D68D00';
}

const e61 = document.getElementById("e61");
e61.addEventListener("click", color61);
function color61() {
  rightEye1.style.fill='#D6012F'; 
  rightEye2.style.fill='#D6012F'; 
  leftEye1.style.fill='#D6012F';
  leftEye3.style.fill='#D6012F';
}
const e62 = document.getElementById("e62");
e62.addEventListener("click", color62);
function color62() {
  rightEye1.style.fill='#D7392F'; 
  rightEye2.style.fill='#D7392F'; 
  leftEye1.style.fill='#D7392F';
  leftEye3.style.fill='#D7392F';
}
const e63 = document.getElementById("e63");
e63.addEventListener("click", color63);
function color63() {
  rightEye1.style.fill='#D6552E'; 
  rightEye2.style.fill='#D6552E'; 
  leftEye1.style.fill='#D6552E';
  leftEye3.style.fill='#D6552E';
}
const e64 = document.getElementById("e64");
e64.addEventListener("click", color64);
function color64() {
  rightEye1.style.fill='#D5712F'; 
  rightEye2.style.fill='#D5712F'; 
  leftEye1.style.fill='#D5712F';
  leftEye3.style.fill='#D5712F';
}
const e65 = document.getElementById("e65");
e65.addEventListener("click", color65);
function color65() {
  rightEye1.style.fill='#D78D30'; 
  rightEye2.style.fill='#D78D30'; 
  leftEye1.style.fill='#D78D30';
  leftEye3.style.fill='#D78D30';
}

const e71 = document.getElementById("e71");
e71.addEventListener("click", color71);
function color71() {
  rightEye1.style.fill='#D5015D'; 
  rightEye2.style.fill='#D5015D'; 
  leftEye1.style.fill='#D5015D';
  leftEye3.style.fill='#D5015D';
}
const e72 = document.getElementById("e72");
e72.addEventListener("click", color72);
function color72() {
  rightEye1.style.fill='#D6385D'; 
  rightEye2.style.fill='#D6385D'; 
  leftEye1.style.fill='#D6385D';
  leftEye3.style.fill='#D6385D';
}
const e73 = document.getElementById("e73");
e73.addEventListener("click", color73);
function color73() {
  rightEye1.style.fill='#D5555D'; 
  rightEye2.style.fill='#D5555D'; 
  leftEye1.style.fill='#D5555D';
  leftEye3.style.fill='#D5555D';
}
const e74 = document.getElementById("e74");
e74.addEventListener("click", color74);
function color74() {
  rightEye1.style.fill='#D6715E'; 
  rightEye2.style.fill='#D6715E'; 
  leftEye1.style.fill='#D6715E';
  leftEye3.style.fill='#D6715E';
}
const e75 = document.getElementById("e75");
e75.addEventListener("click", color75);
function color75() {
  rightEye1.style.fill='#D68D5E'; 
  rightEye2.style.fill='#D68D5E'; 
  leftEye1.style.fill='#D68D5E';
  leftEye3.style.fill='#D68D5E';
}

const e81 = document.getElementById("e81");
e81.addEventListener("click", color81);
function color81() {
  rightEye1.style.fill='#D50175'; 
  rightEye2.style.fill='#D50175'; 
  leftEye1.style.fill='#D50175';
  leftEye3.style.fill='#D50175';
}
const e82 = document.getElementById("e82");
e82.addEventListener("click", color82);
function color82() {
  rightEye1.style.fill='#D63975'; 
  rightEye2.style.fill='#D63975'; 
  leftEye1.style.fill='#D63975';
  leftEye3.style.fill='#D63975';
}
const e83 = document.getElementById("e83");
e83.addEventListener("click", color83);
function color83() {
  rightEye1.style.fill='#D55574'; 
  rightEye2.style.fill='#D55574'; 
  leftEye1.style.fill='#D55574';
  leftEye3.style.fill='#D55574';
}
const e84 = document.getElementById("e84");
e84.addEventListener("click", color84);
function color84() {
  rightEye1.style.fill='#D67175'; 
  rightEye2.style.fill='#D67175'; 
  leftEye1.style.fill='#D67175';
  leftEye3.style.fill='#D67175';
}
const e85 = document.getElementById("e85");
e85.addEventListener("click", color85);
function color85() {
  rightEye1.style.fill='#DCA27D'; 
  rightEye2.style.fill='#DCA27D'; 
  leftEye1.style.fill='#DCA27D';
  leftEye3.style.fill='#DCA27D';
}
*/