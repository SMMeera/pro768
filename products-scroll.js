const scrollContainer = document.querySelector(".products-scroll");
const btnLeft = document.querySelector(".scroll-btn.left");
const btnRight = document.querySelector(".scroll-btn.right");

/* ARROW SCROLL */
btnLeft.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
});

/* AUTO SCROLL */
let autoScroll = setInterval(() => {
  scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
}, 30);

/* PAUSE ON HOVER */
scrollContainer.addEventListener("mouseenter", () => {
  clearInterval(autoScroll);
});

scrollContainer.addEventListener("mouseleave", () => {
  autoScroll = setInterval(() => {
    scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
  }, 30);
});

/* REVEAL ON SCROLL */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => revealObserver.observe(el));
