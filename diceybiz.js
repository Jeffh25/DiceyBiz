// I Do What I Want XP
// let generateDie = document.createElement('button')
// generateDie.textContent = 'Create Die'
// document.body.appendChild(generateDie)
let buttonBox = document.getElementById("buttonBox");
let createDie = document.getElementById("createDie");
let rollDice = document.createElement("button");
let getSum = document.createElement("button")
let container = document.createElement("main");
let counter = 0;
let max = 6;
let min = 1;
let diceArr = [];
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

rollDice.id = "rollIt";
rollDice.textContent = "Roll Dice";
container.id = "dieBox";
getSum.id = "sumItUp";
getSum.textContent = "Get Sum"
buttonBox.append(rollDice);
buttonBox.append(getSum);
document.body.append(container);
createDie.addEventListener("click", function () {
  new Die();
  counter++;
});
rollDice.addEventListener("click", () => { diceArr.forEach(die => {die.roll()})
  // this.roll;
  //loop over array and tell everything in the array to roll
  //for (let i = 0; i < diceArr.length; i++){
    // diceArr.push("#die".val)
  //}
  // let randomNum = Math.floor(Math.random() * (max - min) + min);
  // diceArr.innerText = randomNum
  // console.log("#die")
});
getSum.addEventListener("click", () => { 
  let sum = 0;
  diceArr.forEach(die => sum += die.value)
  alert(sum)
})

class Die {
  constructor() {
    this.div = document.createElement("div");
    this.div.id = "die";
    this.div.className = counter;
    // this.div.style.backgroundColor = 'beige'
    this.div.style.height = "100px";
    this.div.style.width = "100px";
    container.append(this.div);
    this.roll();
    this.value = Math.floor(Math.random() * 6 + 1);
    this.div.innerText = this.value;
    this.div.style.color = "#" + randomColor;

    //google how to push something into an array
    diceArr.push(this)
    console.log(diceArr)
    
    //normal func won't work here with the "This" keyword
    this.div.addEventListener("click", () => {
      this.roll();
     // diceArr.push(this.value);
    });
  }
  roll() {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    this.value = randomNum;
    this.getChar();
    this.div.innerText = this.value;
  }
  getChar() {
      if (this.value === 1) {
        this.char = "⚀";
      } else if (this.value === 2) {
        this.char = "⚁"
      } else if (this.value === 3) {
        this.char = "⚂";
      } else if (this.value === 4) {
        this.char = "⚃";
      } else if (this.value === 5) {
        this.char = "⚄";
      } else {
        this.char = "⚅";}
  }
}
// class
