//Navbar Scroll
window.addEventListener("scroll", function () {
  const headerHeight = document.querySelector(".header").offsetHeight;
  const navbar = document.getElementById("navbar");
  if (window.scrollY > headerHeight - 80) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

//Scroll Animation
window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
  }
}

//Random Quotes Generator
const raw_Quotes = [
  '"Suro sudhiro jayaningrat, lebur dening pangastuti." ',
  '"Adigang, Adigung, Adiguna"',
  '"Durung punjul keselak jujul, Durung pecus keselak besus."',
  '"Ngono yo ngono nanging ojo ngono."',
  '"Wani ngalah luluh wekasane."',
  '"Rila lamun ketaman, kelangan nora gegetun."',
  '"Sepi ing pamrih, rame ing gawe."',
  '"Sopo ubet bakal ngiwet."',
  '"Bener ketenger, bejik ketitik, olo kethara."',
  '"Ngelmu iku kelakon kanthi laku."',
  '"Rukun agawe santosa, crah agawe bubrah."',
  '"Ana dina ana upo, ora obah ora mamah."',
  '"Darbe kawuh ora ditangkarake, bareng mati tanpa tilas."',
  '"Ojo Gumunan, Ojo Getunan, Ojo Kagetan, Ojo Aleman"',
  '"Sinau maca mawi kaca, sinau mawos mawi raos."',
  '"Aja ngomong waton, nanging ngomongo nganggo waton."',
  '"Ciri wanci lelahi ginawa mati."',
  '"Ajining diri dumunung ana ing lathi, ajining raga saka busana."',
  '"Gremet-gremet waton slamet, alon-alon waton kelakon."',
  '"Dudu sanak dudu kadhang, yen mati melu kelangan."',
];

const eng_Quotes = [
  '"All qualities of stubbornness, pettiness, and wrath can be overcome with wise, gentle, and patient demeanor."',
  '"Behave responsibly, do not be arrogant about your strength, position, or background."',
  '"Its not time yet to be proud."',
  '"So it is, but dont be like that. You can do anything, but dont exceed the limits."',
  '"Being willing to yield is a mark of high stature."',
  '"Losing without regrets."',
  '"Not expecting many rewards, diligent in work."',
  '"Those who are diligent will receive blessings."',
  '"Doing good or bad will eventually be known by others."',
  '"Learning is the way while doing."',
  '"Unity brings prosperity, discord brings destruction."',
  '"There is fortune on certain days, no work means no fortune."',
  '"Having knowledge but not putting it into practice is like losing it completely after death."',
  '"[We should] not easily be surprised, not quick to regret, not easily startled, not demanding or spoiled."',
  '"Learning something should come from a reliable source."',
  '"Dont speak impulsively, but speak with proper etiquette."',
  '"Flaws that have already happened will be carried until death."',
  '"A persons dignity lies in their words, and a persons appearance is determined by how they dress."',
  '"Slowly but surely, as long as its safe and successful."',
  '"Not family, not relatives, if you feel no loss when they pass away."',
];

function quotesSwap() {
  // getting random index
  let randomIndex = Math.random() * raw_Quotes.length;
  // round off the index
  let roundOff = Math.floor(randomIndex);
  // setting up
  document.getElementById("quote-ttl").innerHTML = raw_Quotes[roundOff];
  document.getElementById("quote-sub").innerHTML = eng_Quotes[roundOff];
}
window.onload = quotesSwap;
