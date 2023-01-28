// navbar js
const navBar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});

// slides js
const slideElm = document.querySelectorAll(".slide"),
  btnElm = document.querySelectorAll(".circles span");
function changeSlide() {
  let count = 0;
  setInterval(() => {
    count++;
    if (count > 2) {
      count = 0;
    }
    slideElm.forEach((slide) => {
      slide.classList.remove("active");
    });
    btnElm.forEach((btn) => {
      btn.classList.remove("active");
      btn.addEventListener("click", () => {
        count = btn.dataset.id;
        slideElm.forEach((slide) => {
          slide.classList.remove("active");
          btnElm.forEach((btn) => {
            btn.classList.remove("active");
          });
          slideElm[count].classList.add("active");
          btnElm[count].classList.add("active");
        });
      });
    });
    slideElm[count].classList.add("active");
    btnElm[count].classList.add("active");
  }, 10000);
}
changeSlide();

// menu js
const menuElms = document.querySelectorAll(".menu");
const modalImgs = document.querySelectorAll(".modal-img img");
const closeBtn = document.querySelector(".cross i");
const modal = document.querySelector(".modal");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

menuElms.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    modal.classList.add("active");
    let id = e.currentTarget.dataset.id;
    // console.log(id);
    modalImage(id);
    prevBtn.addEventListener("click", () => {
      id = id - 1;
      if (id < 1) {
        id = menuElms.length;
      }
      // console.log(id);
      modalImage(id);
    });
    nextBtn.addEventListener("click", () => {
      id = id + 1;
      if (id > menuElms.length) {
        id = 1;
      }
      // console.log(id);
      modalImage(id);
    });
    function modalImage(id) {
      modalImgs.forEach((img) => {
        img.classList.remove("active");
        let imgId = img.dataset.id;
        if (id == imgId) {
          img.classList.add("active");
        }
      });
      const slide = document.querySelector(".menu-slide");
      // console.log(menu-slide);
      const title =
        menuElms[id - 1].querySelector(".menu-text_left h3").textContent;
      const dishName = document.querySelector(".dish-name");
      dishName.textContent = title;
      slide.textContent = `${id} of ${menuElms.length}`;
    }
  });
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// testimonials js
const testimonialElms = document.querySelectorAll(".testimonial");
const testimonialBtns = document.querySelectorAll(".testimonial-btns div");
let id = 0;
testimonialBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    id = e.currentTarget.dataset.id;
    changeTestimonial(id);
  });
});

setInterval(() => {
  id++;
  if (id >= testimonialElms.length) {
    id = 0;
  }
  changeTestimonial(id);
}, 5000);
function changeTestimonial(id) {
  testimonialElms.forEach((testimonial) => {
    testimonial.classList.remove("active");
    testimonialElms[id].classList.add("active");
    testimonialBtns.forEach((btn) => {
      btn.classList.remove("active");
      testimonialBtns[id].classList.add("active");
    });
  });
}
changeTestimonial(id);
