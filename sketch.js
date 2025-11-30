// All slider values stored here
let inputData = {
  social: 0,
  entertainment: 0,
  productivity: 0
};

function setup() {
  noCanvas(); // 页面设计不需要画布

  // sliders
  const social = document.getElementById("socialSlider");
  const ent = document.getElementById("entSlider");
  const prod = document.getElementById("prodSlider");

  // number displays
  const socialVal = document.getElementById("socialVal");
  const entVal = document.getElementById("entVal");
  const prodVal = document.getElementById("prodVal");

  // Update values on slide
  social.addEventListener("input", () => {
    inputData.social = Number(social.value);
    socialVal.innerText = inputData.social.toFixed(1) + " h";
    console.log(inputData);
  });

  ent.addEventListener("input", () => {
    inputData.entertainment = Number(ent.value);
    entVal.innerText = inputData.entertainment.toFixed(1) + " h";
    console.log(inputData);
  });

  prod.addEventListener("input", () => {
    inputData.productivity = Number(prod.value);
    prodVal.innerText = inputData.productivity.toFixed(1) + " h";
    console.log(inputData);
  });
}

function draw() {
  // 未来视觉输出将用 inputData
}
