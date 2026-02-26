const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const resultLine = document.getElementById("resultLine");
const resultSubline = document.getElementById("resultSubline");
const admissionSliderImage = document.getElementById("admissionSliderImage");
const updatesSliderImage = document.getElementById("updatesSliderImage");
const pressSliderImage = document.getElementById("pressSliderImage");
const visitorCount = document.getElementById("visitorCount");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    formMessage.textContent = `Thanks ${name || "there"}, your request has been submitted.`;
    formMessage.style.color = "#1f7a4f";
    contactForm.reset();
  });
}

if (resultLine && resultSubline) {
  const resultMessages = [
    {
      line: "Two parallel coaching batches run at the same timing: 9:00 AM to 3:00 PM.",
      subline: "Separate support strategy for bright and average students.",
    },
    {
      line: "Bright Students Batch focuses on direction, motivation, mock tests, and weekly testing.",
      subline: "Goal-based planning with performance tracking.",
    },
    {
      line: "Average Students Batch provides one-to-one mentorship with proper analysis and two weekly tests.",
      subline: "Confidence building with continuous improvement support.",
    },
  ];

  let resultIndex = 0;
  setInterval(() => {
    resultIndex = (resultIndex + 1) % resultMessages.length;
    resultLine.textContent = resultMessages[resultIndex].line;
    resultSubline.textContent = resultMessages[resultIndex].subline;
  }, 3000);
}

if (admissionSliderImage) {
  const admissionImages = ["Admissionopen1.jpeg", "Admissionopen2.jpeg"];
  let admissionIndex = 0;
  setInterval(() => {
    admissionIndex = (admissionIndex + 1) % admissionImages.length;
    admissionSliderImage.src = admissionImages[admissionIndex];
  }, 2000);
}

if (updatesSliderImage) {
  const updatesImages = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];
  let updatesIndex = 0;
  setInterval(() => {
    updatesIndex = (updatesIndex + 1) % updatesImages.length;
    updatesSliderImage.src = updatesImages[updatesIndex];
  }, 2000);
}

if (pressSliderImage) {
  const pressImages = ["Media1.jpeg", "Media2.jpeg", "Media3.jpeg", "Media4.jpeg", "Media5.jpeg"];
  let pressIndex = 0;
  setInterval(() => {
    pressIndex = (pressIndex + 1) % pressImages.length;
    pressSliderImage.src = pressImages[pressIndex];
  }, 2000);
}

if (visitorCount) {
  const key = "nasa_total_visitors";
  const current = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(current));
  visitorCount.textContent = String(current);
}
