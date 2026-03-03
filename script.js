const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const resultLine = document.getElementById("resultLine");
const resultSubline = document.getElementById("resultSubline");
const admissionSliderImage = document.getElementById("admissionSliderImage");
const updatesSliderImage = document.getElementById("updatesSliderImage");
const pressSliderImage = document.getElementById("pressSliderImage");
const gamesSliderImage = document.getElementById("gamesSliderImage");
const campusBuildingSlider = document.getElementById("campusBuildingSlider");
const selectedTopImage = document.getElementById("selectedTopImage");
const visitorCount = document.getElementById("visitorCount");
const brandTicker = document.getElementById("brandTicker");

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
  const admissionImages = ["Admissionopen1.jpeg", "Admissionopen2.jpeg", "Admission3.jpeg"];
  let admissionIndex = 0;
  setInterval(() => {
    admissionIndex = (admissionIndex + 1) % admissionImages.length;
    admissionSliderImage.src = admissionImages[admissionIndex];
  }, 2000);
}

if (campusBuildingSlider) {
  const campusBuildingImages = ["academy-building.jpeg", "academy-building2.jpeg"];
  let campusBuildingIndex = 0;
  setInterval(() => {
    campusBuildingIndex = (campusBuildingIndex + 1) % campusBuildingImages.length;
    campusBuildingSlider.src = campusBuildingImages[campusBuildingIndex];
  }, 2000);
}

if (updatesSliderImage) {
  const updatesImages = ["Holi.jpeg", "image1.jpeg", "image2.jpeg", "image3.jpeg"];
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

if (gamesSliderImage) {
  const gameImages = ["Game.jpg", "Game1.jpg", "Game2.jpg", "Game3.jpg", "Game4.jpg", "Game5.jpg", "Game6.jpg", "Game7.jpg", "Game8.jpg"];
  let gameIndex = 0;
  setInterval(() => {
    gameIndex = (gameIndex + 1) % gameImages.length;
    gamesSliderImage.src = gameImages[gameIndex];
  }, 2000);
}

if (selectedTopImage) {
  const selectedImages = ["select1.jpg", "select2.jpg", "select3.jpg", "select4.jpg", "select5.jpg", "select6.jpg"];
  let selectedIndex = 0;
  setInterval(() => {
    selectedIndex = (selectedIndex + 1) % selectedImages.length;
    selectedTopImage.src = selectedImages[selectedIndex];
  }, 2000);
}

if (visitorCount) {
  const storageKeys = ["nasa_total_visitors", "visitor_count", "totalVisitors"];
  const sessionKey = "nasa_visitor_counted_session";
  const storedValues = storageKeys
    .map((key) => Number(localStorage.getItem(key) || "0"))
    .filter((value) => Number.isFinite(value) && value >= 0);

  let current = storedValues.length ? Math.max(...storedValues) : 0;

  // Increment once per browser session, but keep total in persistent localStorage.
  if (!sessionStorage.getItem(sessionKey)) {
    current += 1;
    sessionStorage.setItem(sessionKey, "1");
  }

  storageKeys.forEach((key) => localStorage.setItem(key, String(current)));
  visitorCount.textContent = current.toLocaleString("en-IN");
}

if (brandTicker) {
  const brandNames = ["NASA PUBLIC SCHOOL", "NAV AKASH SAINIK ACADEMY [NASA]"];
  let brandIndex = 0;
  setInterval(() => {
    brandIndex = (brandIndex + 1) % brandNames.length;
    brandTicker.textContent = brandNames[brandIndex];
  }, 2000);
}
