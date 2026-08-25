
console.log("Script running...");

let home1 = document.querySelector(".home");
home1.addEventListener("click", function () {
      event.preventDefault();
      console.log("click the button");
});

var typed = new Typed('#element', {
    strings: [
        'Web Developer.',
        'Frontend Developer.',
        'Web Designer.'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

const resume = document.querySelector(".btn");

resume.addEventListener("click", () => {
    alert("resume is downloading!");
});


