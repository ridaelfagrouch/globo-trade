document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu elements
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Get navbar height for smooth scrolling
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.offsetHeight;

  // Smooth scrolling with offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const section = document.querySelector(this.getAttribute("href"));
      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

// slide ------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".nav-dot");
  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => {
      slide.classList.remove("active");
      slide.style.top = "100%";
      slide.style.opacity = "0";
    });
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to current slide and dot
    slides[index].classList.add("active");
    slides[index].style.top = "0";
    slides[index].style.opacity = "1";
    dots[index].classList.add("active");

    currentSlide = index;
  }

  // Function for next slide
  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  // Start automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  // Reset timer when manually changing slides
  function resetTimer() {
    clearInterval(slideInterval);
    startSlideshow();
  }

  // Add click event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetTimer();
    });
  });

  // Initialize the slideshow
  startSlideshow();
});

// products section -------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      id: 1,
      name: "Pickers Toppers Milk Chocolate",
      description: `Discover Pickers Toppers Milk Chocolate, one of our product, the ultimate indulgence. Crafted with innovative recipes and
                        international quality, each wafer showcases visible layers of chocolate, cream, and hazelnuts, offering
                        rich texture and bold flavors. Made with creamy milk, wholesome wheat, and fresh hazelnuts, Pickers
                        deliver a natural, premium snacking experience. Perfect for sharing or savoring, Pickers redefine the
                        art of flavor and indulgence.`,
      image: "./assets/images/product1.png",
    },
    {
      id: 2,
      name: "Pickers Dark Chocolate",
      description: `Discover Pickers Dark Chocolate, one of our product, the ultimate indulgence. Crafted with innovative recipes and
                        international quality, each wafer showcases visible layers of chocolate, cream, and hazelnuts, offering
                        rich texture and bold flavors. Made with creamy milk, wholesome wheat, and fresh hazelnuts, Pickers
                        deliver a natural, premium snacking experience. Perfect for sharing or savoring, Pickers redefine the
                        art of flavor and indulgence.`,
      image: "./assets/images/product2.png",
    },
    {
      id: 3,
      name: "Pickers White Chocolate",
      description: `Discover Pickers White Chocolate, one of our product, the ultimate indulgence. Crafted with innovative recipes and
                        international quality, each wafer showcases visible layers of chocolate, cream, and hazelnuts, offering
                        rich texture and bold flavors. Made with creamy milk, wholesome wheat, and fresh hazelnuts, Pickers
                        deliver a natural, premium snacking experience. Perfect for sharing or savoring, Pickers redefine the
                        art of flavor and indulgence.`,
      image: "./assets/images/product3.png",
    },
    {
      id: 4,
      name: "Pickers Classic",
      description: `Discover Pickers Classic, one of our product, the ultimate indulgence. Crafted with innovative recipes and
                        international quality, each wafer showcases visible layers of chocolate, cream, and hazelnuts, offering
                        rich texture and bold flavors. Made with creamy milk, wholesome wheat, and fresh hazelnuts, Pickers
                        deliver a natural, premium snacking experience. Perfect for sharing or savoring, Pickers redefine the
                        art of flavor and indulgence.`,
      image: "./assets/images/product4.png",
    },
  ];

  const productItems = document.querySelectorAll(".product-item");
  const mainImage = document.getElementById("mainProductImage");
  const productTitle = document.getElementById("productTitle");
  const productDescription = document.getElementById("productDescription");
  let currentIndex = 0;

  // Add click event to each product item
  productItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      updateActiveProduct(index);
    });
  });

  // Navigation buttons
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateActiveProduct(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % products.length;
    updateActiveProduct(currentIndex);
  });

  function updateActiveProduct(index) {
    // Remove active class from all items
    productItems.forEach((item) => item.classList.remove("active"));
    // Add active class to selected item
    productItems[index].classList.add("active");

    // Update main product display
    mainImage.src = products[index].image;
    productTitle.textContent = products[index].name;
    productDescription.textContent = products[index].description;

    currentIndex = index;
  }
});

// scrollTopButton event --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopButton = document.getElementById("scrollTopButton");

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
