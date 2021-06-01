const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let button = document.querySelector("button");
button.textContent = "Get Started"

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let h1 = document.querySelector("h1");
h1.textContent = "DOM IS AWESOME"

// the nav

let nav = document.querySelectorAll("a")

console.log(nav)
const arr = []
console.log(arr)

const anchor1 = nav[0]
anchor1.textContent = siteContent["nav"]["nav-item-1"]

const anchor2 = nav[1]
anchor2.textContent = siteContent["nav"]["nav-item-2"]

const anchor3 = nav[2]
anchor3.textContent = siteContent["nav"]["nav-item-3"]

const anchor4 = nav[3]
anchor4.textContent = siteContent["nav"]["nav-item-4"]

const anchor5 = nav[4]
anchor5.textContent = siteContent["nav"]["nav-item-5"]

const anchor6 = nav[5]
anchor6.textContent = siteContent["nav"]["nav-item-6"]


// headings
const headings = document.querySelectorAll("h4")

const heading1  = headings[0]
heading1.textContent = siteContent["main-content"]["features-h4"]

const heading2  = headings[1]
heading2.textContent = siteContent["main-content"]["about-h4"]

const heading3  = headings[2]
heading3.textContent = siteContent["main-content"]["services-h4"]

const heading4  = headings[3]
heading4.textContent = siteContent["main-content"]["product-h4"]

const heading5  = headings[4]
heading5.textContent = siteContent["main-content"]["vision-h4"]

const heading6  = headings[5]
heading6.textContent = siteContent["contact"]["contact-h4"]

// paragraphs 
const paragraphs = document.querySelectorAll("p")

const paragraph1 = paragraphs[0]
paragraph1.textContent = siteContent["main-content"]["features-content"]

const paragraph2 = paragraphs[1]
paragraph2.textContent = siteContent["main-content"]["about-content"]

const paragraph3 = paragraphs[2]
paragraph3.textContent = siteContent["main-content"]["services-content"]

const paragraph4 = paragraphs[3]
paragraph4.textContent = siteContent["main-content"]["product-content"]

const paragraph5 = paragraphs[4]
paragraph5.textContent = siteContent["main-content"]["vision-content"]


// footer
const paragraph6 = paragraphs[5]
paragraph6.textContent = siteContent["contact"]["address"]

const paragraph7 = paragraphs[6]
paragraph7.textContent = siteContent["contact"]["phone"]

const paragraph8 = paragraphs[7]
paragraph8.textContent = siteContent["contact"]["email"]

const paragraph9 = paragraphs[8]
paragraph9.textContent = siteContent["footer"]["copyright"]
