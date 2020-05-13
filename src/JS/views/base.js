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
  "A Design Agency",
  "A favorite youtuber",
  "A Anime you loved",
  "A Tech Products",
  "A Music Artist",
  "A TV Shows",
  "A Video Game Company",
  "A Dessert",
  "A Clothing Company",
  "A Recipe Show",
  "A Pokemon",
  "A Photographer",
  "A American Diner",
  "A yourself",
  "A Restaurant Site",
  "A Startup Company",
  "A Blog Website",
  "A HealthCare",
  "A Church site",
  "A School",
  "A Local Event",
];
const code = [
  "A Flip Cards",
  "A Cards with Hover Effect",
  "A Profile Cards",
  "A Image Gallery",
  "A Book Style Page",
  "A Parallax Scrolling",
  "A Modal Windows",
  "A Magazine Style Page",
  "A Blog Style Page",
  "A Carousel",
  "A Slideshow",
  "A Accordian Style",
  "A Login Page",
  "A Buttons with Click Effects",
  "A Buttons with Hover Effects",
  "A Page Transitions",
  "A Fullscreen Menu",
  "A Hamburger Menu",
  "A Sidebar Menu",
  "A Subscribe Form",
  "A Stacked Cards",
  "A CSS Animations",
  "A Social Buttons",
  "A Contact Form",
  "A Portfolio",
  "A Pagination",
  "A Footer",
  "A Grid Layout",
  "A Web App",
  "A Ecommerce site",
  "A Sticky Footer",
  "A Poster",
  "A News Layout",
  "A Picture Frame Style",

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
