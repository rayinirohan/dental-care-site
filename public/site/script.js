(function () {
  "use strict";

  var ICONS = {
    tooth: '<svg viewBox="0 0 24 24"><path d="M12 4.5c-1.2-.9-2.6-1.3-4-1.3C5.2 3.2 3 5.4 3 8.6c0 4.4 3 9.5 4.7 11.4.9 1 2.3.6 2.6-.7l.9-3.5c.2-.6 1-.6 1.2 0l.9 3.5c.3 1.3 1.7 1.7 2.6.7C17.6 18.1 21 13 21 8.6c0-3.2-2.2-5.4-5-5.4-1.4 0-2.8.4-4 1.3Z"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24"><path d="M11 4.4c-1-.8-2.2-1.2-3.4-1.2C5.1 3.2 3 5.3 3 8.4c0 4.2 2.9 9.1 4.5 10.9.9 1 2.2.6 2.5-.7l.9-3.3c.2-.6.9-.6 1.1 0l.9 3.3c.3 1.3 1.6 1.7 2.5.7 1.6-1.8 4.5-6.7 4.5-10.9 0-.5-.1-1-.2-1.5l-1.4 1.5-1.9-.8 1-1.8-1.9-.5.5-1.9-1.8 1-.8-1.9-1.5 1.4c-.5.2-1 .3-1.9.5Z"/></svg>',
    root: '<svg viewBox="0 0 24 24"><path d="M12 3c-2.2 0-4 .8-5.4 1.9C5.4 5.8 5 7 5.2 8.2l1.4 9.3c.2 1.2 1.9 1.4 2.4.3l1.7-4c.2-.5.9-.5 1.1 0l1.7 4c.5 1.1 2.2.9 2.4-.3l1.4-9.3c.2-1.2-.2-2.4-1.4-3.3C16 3.8 14.2 3 12 3Z"/></svg>',
    whiten: '<svg viewBox="0 0 24 24"><path d="M10.5 4.4c-.9-.8-2-1.2-3.2-1.2C4.9 3.2 3 5.3 3 8.4c0 4.2 2.7 9.1 4.2 10.9.8 1 2.1.6 2.4-.7l.8-3.3c.2-.6.9-.6 1.1 0l.8 3.3c.3 1.3 1.6 1.7 2.4.7 1.5-1.8 4.2-6.7 4.2-10.9 0-3.1-1.9-5.2-4.3-5.2-1.2 0-2.3.4-3.2 1.2ZM18 2l.7 1.8L20.5 4.5l-1.8.7L18 7l-.7-1.8-1.8-.7 1.8-.7L18 2Z"/></svg>',
    implant: '<svg viewBox="0 0 24 24"><path d="M12 2c-2.6 0-4.5 1.6-4.5 3.6C7.5 7.1 9 8 12 8s4.5-.9 4.5-2.4C16.5 3.6 14.6 2 12 2Zm-2.6 8 1 1.6-1 1.2 1 1.5-1 1.2 1 1.5-1 1.2 1.8 3.4c.3.6 1.2.6 1.5 0l1.8-3.4-1-1.2 1-1.5-1-1.2 1-1.5-1-1.2 1-1.6c-.8.3-1.7.4-2.6.4s-1.8-.1-2.5-.4Z"/></svg>',
    braces: '<svg viewBox="0 0 24 24"><path d="M4 6h16v3h-2V8H6v1H4V6Zm0 6h16v2H4v-2Zm2 4h12v3h-2v-1H8v1H6v-3Z"/></svg>',
    doctor: '<svg viewBox="0 0 24 24"><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 1.5c-3.3 0-6 2-6 4.5V20h12v-3c0-2.5-2.7-4.5-6-4.5ZM17.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5c-.8 0-1.6.2-2.3.5 1 1 1.6 2.3 1.6 3.7V20H22v-2.3c0-2.3-2-4.2-4.5-4.2Z"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1 13-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6Z"/></svg>',
    smile: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM8.5 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12 18c-2.5 0-4.6-1.6-5.4-3.8h10.8C16.6 16.4 14.5 18 12 18Z"/></svg>',
    price: '<svg viewBox="0 0 24 24"><path d="M3 6a2 2 0 0 1 2-2h11l4 4v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm5 3h6V7H8v2Zm8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>'
  };

  var SERVICES = [
    { icon: "tooth", title: "Dental Checkup", text: "Complete oral examination to keep your teeth healthy." },
    { icon: "sparkle", title: "Teeth Cleaning", text: "Professional scaling and polishing for a brighter smile." },
    { icon: "root", title: "Root Canal", text: "Painless root canal treatment to save your natural tooth." },
    { icon: "whiten", title: "Teeth Whitening", text: "Safe and effective whitening to brighten your smile." },
    { icon: "implant", title: "Dental Implants", text: "Permanent solution for missing teeth with natural look." },
    { icon: "braces", title: "Braces", text: "Straighten your teeth and improve your smile." }
  ];

  var WHY = [
    { icon: "doctor", title: "Experienced Doctor", text: "Expert care by Dr. Y. Praveen Kumar, BDS." },
    { icon: "shield", title: "Hygienic & Safe", text: "Strict sterilization and high hygiene standards." },
    { icon: "smile", title: "Patient Comfort", text: "Friendly environment and pain-free treatment." },
    { icon: "price", title: "Affordable Pricing", text: "Quality dental care that fits your budget." }
  ];

  function cardHTML(item) {
    return (
      '<article class="card reveal">' +
      '<div class="bubble">' + (ICONS[item.icon] || "") + "</div>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.text + "</p>" +
      "</article>"
    );
  }

  function render(id, items) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = items.map(cardHTML).join("");
  }

  render("serviceGrid", SERVICES);
  render("whyGrid", WHY);

  // Year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  function closeNav() {
    nav.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  // Header shadow on scroll
  var header = document.querySelector(".site-header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
  });

  // Scroll reveal
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  // Active nav link on scroll
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute("href")); })
    .filter(Boolean);
  function setActive() {
    var pos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
    links.forEach(function (l) {
      l.classList.toggle("active", current && l.getAttribute("href") === "#" + current.id);
    });
  }
  window.addEventListener("scroll", setActive);
  setActive();
})();
