
console.log("Script running...");

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




