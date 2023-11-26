const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {

  //use the below code for making box
  const inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.placeholder = "Enter your name";
  inputBox.classList.add("input-box");
  wrapper.appendChild(inputBox);
  inputBox.focus();
  inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      if (inputBox.value) {
        question.innerHTML = "Yay, " + inputBox.value + "! See you soon 😍😍😍!";
        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
        setTimeout(function(){ window.location.href = "https://forms.gle/pJYCn8Mvm3CvhgSC7"; }, 8000);
      }
    }
  });


});

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


//copilot   