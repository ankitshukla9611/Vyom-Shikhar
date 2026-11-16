
document.addEventListener("DOMContentLoaded", function () {

    // ===== IMAGE SLIDER =====
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");

    if (slider && slides.length > 0 && dotsContainer && prev && next) {

        let index = 0;
        let autoSlide;

        // Purane dots clear karein
        dotsContainer.innerHTML = "";

        // Dots create karein
        slides.forEach((slide, i) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.classList.add("dot");
            dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

            dot.addEventListener("click", () => {
                index = i;
                updateSlider();
                resetAutoSlide();
            });

            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll(".dot");

        function updateSlider() {
            slider.style.transform =
                `translateX(-${index * 100}%)`;

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function startAutoSlide() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, 3000);
        }

        function resetAutoSlide() {
            startAutoSlide();
        }

        next.addEventListener("click", () => {
            nextSlide();
            resetAutoSlide();
        });

        prev.addEventListener("click", () => {
            prevSlide();
            resetAutoSlide();
        });

        updateSlider();
        startAutoSlide();

        console.log("Slider initialized. Total slides:", slides.length);

    } else {
        console.warn("Slider elements not found. Check your HTML selectors.");
    }


    // ===== SUBSCRIBE MODAL =====
    const subscribeBtn = document.getElementById("subscribeBtn");
    const modal = document.getElementById("subscribeModal");
    const closeBtn = document.querySelector(".close");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");

    if (subscribeBtn && modal) {
        subscribeBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
    });

    if (submitBtn && successMessage) {
        submitBtn.addEventListener("click", () => {
            successMessage.innerText =
                "Thank you for subscribing to VyomShikhar!";
        });
    }

});