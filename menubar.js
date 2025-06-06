(function () {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-S2MRGL563X";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-S2MRGL563X");
})();
const hbtn = document.getElementById("hbtn");
window.addEventListener("load", () => {
  const hbtn = document.getElementById("hbtn");
  for (const bar of document.getElementsByClassName("menubar")) {
    for (const a of bar.getElementsByTagName("a")) {
      if (a.href == window.location.href) {
        a.className = "active";
      } else if (
        "https://pipo-smart-kanzume.glitch.me/" == window.location.href
      ) {
        hbtn.className = "active";
      }
    }
  }
});
window.addEventListener("click", (event) => {
  for (const bar of document.getElementsByClassName("menubar")) {
    for (const icon of bar.getElementsByClassName("menuicon")) {
      if (event.target == icon && bar.className == "menubar") {
        bar.className = "menubar open";
      } else {
        bar.className = "menubar";
      }
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});