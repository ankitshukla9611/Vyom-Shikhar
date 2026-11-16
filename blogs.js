
// ==========================================
// BLOG VIEW ELEMENTS
// ==========================================

const blogView = document.getElementById("blogView");
const blogsSection = document.querySelector(".blogs");

const blogImage = document.getElementById("blogImage");
const blogTitle = document.getElementById("blogTitle");

const author = document.getElementById("author");
const date = document.getElementById("date");
const time = document.getElementById("time");

const tags = document.getElementById("tags");
const article = document.getElementById("article");


// ==========================================
// DISPLAY SELECTED BLOG
// ==========================================

function displayBlog(id) {

    const blog = blogs[id];

    if (!blog || !blogView || !blogsSection) {
        console.error("Blog or required HTML element not found:", id);
        return;
    }

    // Add blog information

    blogImage.src = blog.image;
    blogImage.alt = blog.alt;

    blogTitle.textContent = blog.title;

    author.textContent = "🍁🌿 " + blog.author;
    date.textContent = "📅 " + blog.date;
    time.textContent = "🕐 " + blog.time;

    // Add article content

    article.innerHTML = blog.content;

    // Add tags

    tags.innerHTML = "";

    blog.tags.forEach(function(tag) {

        const span = document.createElement("span");
        span.textContent = tag;

        tags.appendChild(span);

    });

    // Hide blog listing and show article

    blogsSection.style.display = "none";
    blogView.style.display = "block";

    // Load related articles

    loadRelated(id);

    // Reset progress bar

    const progress = document.getElementById("progress");

    if (progress) {
        progress.style.width = "0%";
    }

    // Scroll directly to article, not navbar

    const articlePosition =
        blogView.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
        top: Math.max(0, articlePosition),
        behavior: "instant"
    });
}


// ==========================================
// OPEN BLOG
// ==========================================

function openBlog(id, fromHistory = false) {

    if (!blogs[id]) {
        console.error("Blog not found:", id);
        return;
    }

    // Add browser history entry

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


// ==========================================
// CLOSE BLOG
// ==========================================

function closeBlog() {

    // Go back through browser history

    if (history.state && history.state.vyomBlog) {

        history.back();

    } else {

        showBlogListing();

    }

}


// ==========================================
// SHOW BLOG LISTING
// ==========================================

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

    // Scroll to blog cards

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


// ==========================================
// BROWSER BACK BUTTON SUPPORT
// ==========================================

window.addEventListener("popstate", function(event) {

    if (event.state && event.state.vyomBlog) {

        openBlog(event.state.blogId, true);

    } else {

        showBlogListing();

    }

});


// FORM //

const form =
document.getElementById("studentForm");
const successMessage =
document.getElementById("successMessage");

// FORM SUBMIT //
form.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName =
    document.getElementById("firstName");
    const email =
    document.getElementById("email");
    const mobile =
    document.getElementById("mobile");
    const terms =
    document.getElementById("terms");

    let valid = true;

    // FIRST NAME
    if(firstName.value.trim() === ""){
        document.getElementById("firstError")
        .style.display = "block";
        firstName.focus();
        valid = false;
    }else{
        document.getElementById("firstError")
        .style.display = "none"
    }
    // EMAIL

    const emailPattern =
    /^[^\s@]+@[6\s@]+\.[6\s@]+$/;
    
if(
    email.value &&
    !emailPattern.test(email.value)

){
    email.style.borderColor = "#DC2626";
    valid = false;
}else{
    email.style.borderColor = "";
}
// MOBILE
const mobilePattern =
/^[0-9]{10}$/;

if(
    mobile.value &&
    !mobilePattern.test(mobile.value)
){
    mobile.style.borderColor = "#dc2626";
    valid = false;
}else{
    email.style.borderColor = "";
}
// TERMS

if(!terms.checked){
    alert("Please accept the Terms & Conditions.");
    valid = false;
}
// SUCCESS
if(valid){
    successMessage.style.display = "block";
    successMessage.scrollIntoView({behavior:"smooth", block:"center"});

    form.reset();
}
});

// MOBILE NUMBER

document.getElementById("mobile")
.addEventListener("input", function(){
    this.value =
    this.value.replace(/\D/g,"");
});
// NAME VALIDATION

document
.getElementById("firstName")
.addEventListener("input", function(){
    this.value =
    this.value.replace(/[^a-zA-Z\s]/g,"")
});

