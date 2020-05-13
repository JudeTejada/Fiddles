export const elements = {
  container: document.querySelector("#mainContainer"),
  body: document.querySelector("body"),
  randomType: document.querySelector("#challengeType"),
  randomFor: document.querySelector("#challengeFor"),
  iconLockTheme: document.querySelector("#unlockTheme"),
  iconLockCode: document.querySelector("#unlockCode"),
  btnGenerate: document.querySelector(".header__btnGenerate"),
  menu: document.querySelector(".menu"),
  navSavedItems: document.querySelector(".nav__savedItems"),
  popup: document.querySelector(".popup"),
  modal: document.querySelector(".modal"),
  faqIcon: document.querySelector(".faq"),
};

export const colors = [
  "#086972",
  "#88bef5",
  "#fc5185",
  "#482ff7",
  "#2d6cdf",
  "#fc5c9c",
  "#f3558e",
  "#22d1ee",
  "#ff9f68",
  "#775ada",
  "#cb3b3b",
  "#cabbe9",
  "#ee5a5a",
  "#b31e6f",
  "#f26d5b",
  "#713045",
  "#ea7dc7",
  "#2cb978",
  "#107a8b",
  "#2d767f",
  "#3d6cb9",
  "#d05a8c",
  "#626fff",
  "#5a9956",
  "#d46443",
  "#705fff",
];

const theme = [
  "Design Agency",
  "favorite youtuber",
  "Anime you loved",
  "Tech Products",
  "Music Artist",
  "TV Shows",
  "Video Game Company",
  "Dessert",
  "Clothing Company",
  "Recipe Show",
  "Pokemon",
  "Photographer",
  "American Diner",
  "yourself",
  "Restaurant Site",
  "Startup Company",
  "Blog Website",
  "HealthCare",
  "Church site",
  "School",
  "Local Event",
];
const code = [
  "Flip Cards",
  "Cards with Hover Effect",
  "Profile Cards",
  "Image Gallery",
  "Book Style Page",
  "Parallax Scrolling",
  "Modal Windows",
  "Magazine Style Page",
  "Blog Style Page",
  "Carousel",
  "Slideshow",
  "Accordian Style",
  "Login Page",
  "Buttons with Click Effects",
  "Buttons with Hover Effects",
  "Page Transitions",
  "Fullscreen Menu",
  "Hamburger Menu",
  "Sidebar Menu",
  "Subscribe Form",
  "Stacked Cards",
  "CSS Animations",
  "Social Buttons",
  "Contact Form",
  "Portfolio",
  "Pagination",
  "Footer",
  "Grid Layout",
  "Web App",
  "Ecommerce site",
  "Sticky Footer",
  "Poster",
  "News Layout",
  "Picture Frame Style",

  "Breadcrumbs",
];
const randomText = [
  "A Wise Choice",
  "Excellent Pick",
  "Wow Can you do it?",
  "You don't say",
  "I believe in you",
  "We are in this together",
  "Oh yeah",
];

export const generateRandomColor = () => {
  const idx = Math.floor(Math.random() * colors.length);

  return colors[idx];
};

export const generateRandomTheme = () => {
  const idx = Math.floor(Math.random() * theme.length);
  return theme[idx];
};

export const generateRandomCode = () => {
  const idx = Math.floor(Math.random() * code.length);

  return code[idx];
};

export const getRandomtext = () => {
  const idx = Math.floor(Math.random() * randomText.length);

  return randomText[idx];
};

export const getTypeAndCode = () => {
  const type = elements.randomType.textContent;
  const codeFor = elements.randomFor.textContent;
  const ID = randomID();
  return {
    type,
    codeFor,
    ID,
  };
};

export const randomID = () => Math.floor(Math.random() * 10000000);
