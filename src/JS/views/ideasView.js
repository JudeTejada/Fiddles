import { elements } from "./base";

export const checkIfAllAreUnlock = () => {
  if (
    document
      .querySelector("#unlockTheme")
      .classList.contains("header__icon--inactive") &&
    document
      .querySelector("#unlockCode")
      .classList.contains("header__icon--inactive")
  ) {
    //which means all of them are unlock
    return true;
  }
};

export const checkIfAllAreLocked = () => {
  if (
    elements.iconLockTheme.classList.contains("header__icon--active") &&
    elements.iconLockCode.classList.contains("header__icon--active")
  ) {
    elements.btnGenerate.innerHTML = `
    <span class="material-icons">
    lock
  </span>
    Unlock To Generate
    `;
  } else {
    elements.btnGenerate.innerHTML = `
<span class="material-icons">
    autorenew
  </span> New Challenge
    `;
  }
};

export const randomTypeIsOnlyLock = () => {
  if (elements.iconLockTheme.classList.contains("header__icon--active")) {
    return true;
  }
};

export const randomThemeIsOnlyLock = () => {
  if (elements.iconLockCode.classList.contains("header__icon--active")) {
    return true;
  }
};
export const lock = (elm) => {
  if (elm) {
    elm.classList.replace("header__icon--inactive", "header__icon--active");
    elm.textContent = "lock";
  }
};

export const unlock = (elm) => {
  if (elm) {
    elm.classList.replace("header__icon--active", "header__icon--inactive");
    elm.textContent = "lock_open";
  }
};
export const isSaved = (saved) => {
  let btn;
  //if its true
  if (saved) {
    btn = document.querySelector(".header__btnSave");
    btn.classList.replace("header__btnSave", "header__btnSaved");
    btn.innerHTML = `<span class="material-icons">
    bookmark
    </span> Saved`;
  }
};

export const resetSave = () => {
  const btn = document.querySelector(".header__btnSaved");
  if (btn) {
    btn.classList.replace("header__btnSaved", "header__btnSave");
    btn.innerHTML = `<span class="material-icons">
    bookmark_border
    </span> Saved`;
  }
};
export const addToMenu = (idea) => {
  if (idea) {
    const markup = `
    <div class="menu__content" data-id="${idea.ID}">
       <div className="menu__flex mb-2">
          <span class="menu__type">Code A:</span>
          <span class ="menu__type menu__type--random">${idea.type}</span>
      </div>

      <div className="menu__flex">
         <span class="menu__type">For a:</span>
          <span class="menu__type menu__type--random">${idea.codeFor}</span>
       </div> 


       <span class="material-icons menu__close">delete</span>
 
    </div>
    `;

    elements.menu.insertAdjacentHTML("afterbegin", markup);
  }
};

export const showMenu = (length) => {
  if (length > 0) {
    elements.navSavedItems.classList.remove("hide");
  } else {
    elements.navSavedItems.classList.add("hide");
  }
};

export const toggleMenu = () => {
  if (elements.menu.classList.contains("hide")) {
    elements.menu.classList.remove("hide");
  } else {
    elements.menu.classList.add("hide");
  }
};

export const deleteFavoriteFromMenu = (card) => {
  const parent = card.parentElement;

  parent.removeChild(card);
};
