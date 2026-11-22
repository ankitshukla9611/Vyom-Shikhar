
// =====================================================
// VYOMSHIKHAR - COMPLETE BLOGS JAVASCRIPT
// =====================================================


// =====================================================
// 1. BLOG DATA
// =====================================================

const blogs = {

    1: {
        title: "True Democracy: The Power of People",
        author: "VyomShikhar Editorial Team",
        date: "20 November 2026",
        time: "8 min read",
        alt: "Democracy and people",
        tags: ["Democracy", "Politics", "Society", "Constitution"],

        content: `
            <h2>Introduction: Understanding Democracy</h2>

            <p>
                Democracy is more than a system of government.
                It is an idea built upon freedom, equality,
                participation and the dignity of every individual.
                It gives people the power to participate in the
                decisions that shape their society.
            </p>

            <p>
                A true democracy does not exist only through
                elections. It becomes meaningful when citizens
                understand their rights, fulfil their responsibilities
                and actively participate in public life.
            </p>

            <h2>The Voice of Every Citizen</h2>

            <p>
                Every individual deserves the opportunity to express
                their thoughts and opinions. A democratic society
                respects different perspectives and encourages
                peaceful discussions.
            </p>

            <p>
                The strength of democracy lies not in the agreement
                of everyone, but in the freedom to disagree
                respectfully.
            </p>

            <h2>Why Education Matters</h2>

            <p>
                An educated citizen can question information,
                understand public policies and make responsible
                decisions. Education strengthens democratic values
                and creates awareness about social responsibilities.
            </p>

            <h2>Conclusion</h2>

            <p>
                Democracy becomes stronger when people are aware,
                responsible and active. Its real power belongs
                to citizens who think independently and work
                for the common good.
            </p>
        `
    },


    2: {
        title: "Fundamental Rights: The Foundation of Freedom",
        author: "VyomShikhar Editorial Team",
        date: "20 November 2026",
        time: "7 min read",
        alt: "Indian Constitution and fundamental rights",
        tags: ["Constitution", "Fundamental Rights", "India", "Law"],

        content: `
            <h2>Introduction</h2>

            <p>
                The Constitution of India provides a framework
                for protecting the rights and freedoms of citizens.
                Fundamental Rights are essential for individual
                development and the functioning of a democratic society.
            </p>

            <p>
                These rights protect human dignity, promote equality
                and help individuals live with freedom and security.
            </p>

            <h2>Right to Equality</h2>

            <p>
                Equality is one of the central principles of the
                Indian Constitution. It ensures equality before
                the law and prohibits discrimination on specified
                grounds.
            </p>

            <h2>Right to Freedom</h2>

            <p>
                The Constitution protects important freedoms,
                including freedom of speech and expression,
                peaceful assembly and movement, subject to
                constitutional restrictions.
            </p>

            <h2>Right Against Exploitation</h2>

            <p>
                This right protects individuals against human
                trafficking, forced labour and certain forms
                of child labour.
            </p>

            <h2>Right to Freedom of Religion</h2>

            <p>
                Every person has the freedom of conscience
                and the right to profess, practise and propagate
                religion, subject to constitutional limitations.
            </p>

            <h2>Conclusion</h2>

            <p>
                Fundamental Rights are not merely constitutional
                provisions. They represent the values of liberty,
                equality and dignity that form the foundation
                of Indian democracy.
            </p>
        `
    },


    3: {
        title: "Artificial Intelligence: Shaping the Future",
        author: "VyomShikhar Technology Desk",
        date: "20 November 2026",
        time: "9 min read",
        alt: "Artificial intelligence and future technology",
        tags: ["Artificial Intelligence", "Technology", "Future", "Innovation"],

        content: `
            <h2>Introduction</h2>

            <p>
                Artificial Intelligence, commonly known as AI,
                is transforming the way people work, learn,
                communicate and solve problems.
            </p>

            <p>
                AI systems can analyse information, recognise
                patterns and generate useful responses.
                These capabilities are creating new opportunities
                across many industries.
            </p>

            <h2>AI in Education</h2>

            <p>
                AI can support personalised learning, explain
                difficult concepts and help students practise
                new skills.
            </p>

            <p>
                However, technology should support independent
                thinking rather than replace the learning process.
            </p>

            <h2>AI in Everyday Life</h2>

            <p>
                AI is used in digital assistants, translation,
                recommendation systems, image recognition
                and many other applications.
            </p>

            <h2>Challenges and Responsibility</h2>

            <p>
                Privacy, misinformation, bias and the impact
                on employment are important challenges.
                Responsible development and human oversight
                are necessary for trustworthy AI.
            </p>

            <h2>Conclusion</h2>

            <p>
                The future of AI will depend not only on
                technological progress but also on how
                responsibly society chooses to use it.
            </p>
        `
    },


    4: {
        title: "The Indian Freedom Movement: A Journey of Courage",
        author: "VyomShikhar History Desk",
        date: "20 November 2026",
        time: "10 min read",
        alt: "Indian freedom movement and independence",
        tags: ["History", "India", "Freedom Movement", "Independence"],

        content: `
            <h2>Introduction</h2>

            <p>
                India's freedom movement was a long and complex
                struggle involving people from different regions,
                communities and backgrounds.
            </p>

            <p>
                It included political movements, public protests,
                social reform, revolutionary activities and
                countless individual sacrifices.
            </p>

            <h2>Early Resistance</h2>

            <p>
                Resistance to colonial rule developed in different
                forms throughout the nineteenth century.
                The Revolt of 1857 became a major turning point
                in the history of colonial India.
            </p>

            <h2>Mass Participation</h2>

            <p>
                During the twentieth century, movements such as
                Non-Cooperation, Civil Disobedience and Quit India
                brought large numbers of people into the struggle.
            </p>

            <h2>Role of Different Leaders</h2>

            <p>
                Many leaders and ordinary citizens contributed
                to the freedom movement. Their approaches,
                ideas and methods were diverse, but their
                contributions became part of India's
                independence struggle.
            </p>

            <h2>Independence</h2>

            <p>
                India became independent on 15 August 1947.
                Independence marked the beginning of a new
                chapter in the country's political history.
            </p>

            <h2>Conclusion</h2>

            <p>
                The freedom movement reminds us of the importance
                of courage, unity, justice and collective
                responsibility in shaping a nation.
            </p>
        `
    }

};


// =====================================================
// 2. BLOG HTML ELEMENTS
// =====================================================

const blogView = document.getElementById("blogView");
const blogsSection = document.querySelector(".blogs");

const blogImage = document.getElementById("blogImage");
const blogTitle = document.getElementById("blogTitle");

const author = document.getElementById("author");
const date = document.getElementById("date");
const time = document.getElementById("time");

const tags = document.getElementById("tags");
const article = document.getElementById("article");


// =====================================================
// 3. DISPLAY SELECTED BLOG
// =====================================================

function displayBlog(id) {

    const blog = blogs[id];

    if (!blog || !blogView || !blogsSection) {
        console.error("Blog or required HTML element not found:", id);
        return;
    }

    if (
        !blogImage ||
        !blogTitle ||
        !author ||
        !date ||
        !time ||
        !tags ||
        !article
    ) {
        console.error("Blog HTML elements are missing.");
        return;
    }

    // Find corresponding blog card image
    const cards = document.querySelectorAll(".blog-card");
    const selectedCard = cards[id - 1];

    const cardImage = selectedCard
        ? selectedCard.querySelector("img")
        : null;

    // Blog image
    blogImage.src = blog.image ||
        (cardImage ? cardImage.src : "");

    blogImage.alt = blog.alt || blog.title;

    // Blog information
    blogTitle.textContent = blog.title;

    author.textContent = "🍁🌿 " + blog.author;
    date.textContent = "📅 " + blog.date;
    time.textContent = "🕐 " + blog.time;

    // Article content
    article.innerHTML = blog.content;

    // Tags
    tags.innerHTML = "";

    blog.tags.forEach(function(tag) {

        const span = document.createElement("span");

        span.textContent = tag;

        tags.appendChild(span);

    });

    // Hide listing and show article
    blogsSection.style.display = "none";
    blogView.style.display = "block";

    // Load related articles
    loadRelated(id);

    // Reset progress
    const progress = document.getElementById("progress");

    if (progress) {
        progress.style.width = "0%";
    }

    // Update sharing links
    updateShareLinks(blog);

    // Scroll to article
    const position =
        blogView.getBoundingClientRect().top +
        window.scrollY - 100;

    window.scrollTo({
        top: Math.max(0, position),
        behavior: "smooth"
    });

}


// =====================================================
// 4. OPEN BLOG
// =====================================================

function openBlog(id, fromHistory = false) {

    if (!blogs[id]) {
        console.error("Blog not found:", id);
        return;
    }

    if (!fromHistory) {

        history.pushState(
            {
                vyomBlog: true,
                blogId: id
            },
            "",
            "#blog-" + id
        );

    }

    displayBlog(id);

}


// =====================================================
// 5. CLOSE BLOG
// =====================================================

function closeBlog() {

    if (history.state && history.state.vyomBlog) {

        history.back();

    } else {

        showBlogListing();

    }

}


// =====================================================
// 6. SHOW BLOG LISTING
// =====================================================

function showBlogListing() {

    if (blogView) {
        blogView.style.display = "none";
    }

    if (blogsSection) {
        blogsSection.style.display = "block";
    }

    const progress = document.getElementById("progress");

    if (progress) {
        progress.style.width = "0%";
    }

    const blogListing = document.getElementById("blog-posts");

    if (blogListing) {

        const position =
            blogListing.getBoundingClientRect().top +
            window.scrollY - 100;

        window.scrollTo({
            top: Math.max(0, position),
            behavior: "smooth"
        });

    }

}


// =====================================================
// 7. RELATED ARTICLES
// =====================================================

function loadRelated(currentId) {

    const relatedContainer =
        document.querySelector(".related-container");

    if (!relatedContainer) {
        return;
    }

    relatedContainer.innerHTML = "";

    Object.keys(blogs).forEach(function(id) {

        if (Number(id) === Number(currentId)) {
            return;
        }

        const blog = blogs[id];

        const card = document.createElement("div");

        card.className = "related-card";

        card.innerHTML = `
            <h3></h3>
            <p></p>
            <button type="button">Read Article →</button>
        `;

        card.querySelector("h3").textContent = blog.title;

        card.querySelector("p").textContent =
            blog.tags.join(" • ");

        card.querySelector("button").addEventListener(
            "click",
            function() {
                openBlog(Number(id));
            }
        );

        relatedContainer.appendChild(card);

    });

}


// =====================================================
// 8. BROWSER BACK / FORWARD SUPPORT
// =====================================================

window.addEventListener("popstate", function(event) {

    if (event.state && event.state.vyomBlog) {

        displayBlog(event.state.blogId);

    } else {

        showBlogListing();

    }

});


// =====================================================
// 9. OPEN BLOG DIRECTLY FROM URL HASH
// =====================================================

function checkBlogHash() {

    const match = window.location.hash.match(/^#blog-(\d+)$/);

    if (match) {

        const id = Number(match[1]);

        if (blogs[id]) {

            displayBlog(id);

        }

    }

}


// =====================================================
// 10. READING PROGRESS BAR
// =====================================================

window.addEventListener("scroll", function() {

    const progress = document.getElementById("progress");

    if (!progress || !blogView) {
        return;
    }

    if (blogView.style.display === "none") {
        return;
    }

    const articleElement = document.getElementById("article");

    if (!articleElement) {
        return;
    }

    const articleTop =
        articleElement.getBoundingClientRect().top +
        window.scrollY;

    const articleHeight = articleElement.offsetHeight;

    const scrollPosition =
        window.scrollY + window.innerHeight;

    const distance = scrollPosition - articleTop;

    const percentage =
        articleHeight > 0
            ? Math.min(100, Math.max(0, (distance / articleHeight) * 100))
            : 0;

    progress.style.width = percentage + "%";

});


// =====================================================
// 11. WHATSAPP AND FACEBOOK SHARE
// =====================================================

function updateShareLinks(blog) {

    const whatsapp = document.getElementById("whatsapp");
    const facebook = document.getElementById("facebook");

    const pageURL = window.location.href;

    const shareText =
        blog.title + " - Read this article on VyomShikhar";

    if (whatsapp) {

        whatsapp.onclick = function() {

            const url =
                "https://api.whatsapp.com/send?text=" +
                encodeURIComponent(shareText + " " + pageURL);

            window.open(url, "_blank", "noopener,noreferrer");

        };

    }

    if (facebook) {

        facebook.onclick = function() {

            const url =
                "https://www.facebook.com/sharer/sharer.php?u=" +
                encodeURIComponent(pageURL);

            window.open(url, "_blank", "noopener,noreferrer");

        };

    }

}


// =====================================================
// 12. STUDENT REGISTRATION FORM
// =====================================================

const form = document.getElementById("studentForm");

const successMessage =
    document.getElementById("successMessage");


if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const firstName = document.getElementById("firstName");

        const email = document.getElementById("email");

        const mobile = document.getElementById("mobile");

        const terms = document.getElementById("terms");

        const firstError = document.getElementById("firstError");

        let valid = true;


        // ---------------------------------------------
        // FIRST NAME VALIDATION
        // ---------------------------------------------

        if (firstName && firstName.value.trim() === "") {

            if (firstError) {
                firstError.style.display = "block";
            }

            firstName.focus();

            valid = false;

        } else if (firstError) {

            firstError.style.display = "none";

        }


        // ---------------------------------------------
        // EMAIL VALIDATION
        // ---------------------------------------------

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email && email.value.trim() !== "") {

            if (!emailPattern.test(email.value.trim())) {

                email.style.borderColor = "#DC2626";

                valid = false;

            } else {

                email.style.borderColor = "";

            }

        }


        // ---------------------------------------------
        // MOBILE VALIDATION
        // ---------------------------------------------

        const mobilePattern = /^[0-9]{10}$/;

        if (mobile && mobile.value.trim() !== "") {

            if (!mobilePattern.test(mobile.value.trim())) {

                mobile.style.borderColor = "#DC2626";

                valid = false;

            } else {

                mobile.style.borderColor = "";

            }

        }


        // ---------------------------------------------
        // TERMS VALIDATION
        // ---------------------------------------------

        if (terms && !terms.checked) {

            alert("Please accept the Terms & Conditions.");

            valid = false;

        }


        // ---------------------------------------------
        // SUCCESS MESSAGE
        // ---------------------------------------------

        if (valid) {

            if (successMessage) {

                successMessage.style.display = "block";

                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

            form.reset();

            if (firstError) {
                firstError.style.display = "none";
            }

            if (email) {
                email.style.borderColor = "";
            }

            if (mobile) {
                mobile.style.borderColor = "";
            }

        }

    });


    // =================================================
    // 13. MOBILE NUMBER INPUT
    // =================================================

    const mobileInput = document.getElementById("mobile");

    if (mobileInput) {

        mobileInput.addEventListener("input", function() {

            this.value = this.value.replace(/\D/g, "");

            this.value = this.value.slice(0, 10);

            this.style.borderColor = "";

        });

    }


    // =================================================
    // 14. FIRST NAME INPUT
    // =================================================

    const nameInput = document.getElementById("firstName");

    if (nameInput) {

        nameInput.addEventListener("input", function() {

            this.value = this.value.replace(/[^a-zA-Z\s]/g, "");

            this.style.borderColor = "";

            if (firstError) {
                firstError.style.display = "none";
            }

        });

    }


    // =================================================
    // 15. EMAIL INPUT
    // =================================================

    const emailInput = document.getElementById("email");

    if (emailInput) {

        emailInput.addEventListener("input", function() {

            this.style.borderColor = "";

        });

    }

}


// =====================================================
// 16. INITIAL PAGE CHECK
// =====================================================

document.addEventListener("DOMContentLoaded", function() {

    checkBlogHash();

});
