import "../SASS/main.scss";
import Ideas from "./models/Ideas";
import * as ideaView from "./views/ideasView";
import {
  elements,
  generateRandomColor,
  generateRandomTheme,
  generateRandomCode,
  getTypeAndCode,
} from "./views/base";

const state = {};

const generateController = () => {
  //if both are unlocked
  if (ideaView.checkIfAllAreUnlock()) {
    elements.body.style.backgroundColor = `${generateRandomColor()}`;
    elements.randomType.textContent = generateRandomCode();
    elements.randomFor.textContent = generateRandomTheme();
    // if Project Theme is lock
  } else if (!ideaView.randomTypeIsOnlyLock()) {
    elements.body.style.backgroundColor = `${generateRandomColor()}`;
    elements.randomType.textContent = generateRandomTheme();
  } else if (!ideaView.randomThemeIsOnlyLock()) {
    // if Code a is lock
    elements.body.style.backgroundColor = `${generateRandomColor()}`;
    elements.randomFor.textContent = generateRandomCode();
  }
};

const saveController = () => {
  //get the data
  const { type, codeFor, ID } = getTypeAndCode();

  // turn into an object
  (state.ideaSaved = {
    type,
    codeFor,
    ID,
  }),
    //add the obj to lS
    state.idea.addtoLS(state.ideaSaved);

  //display MENU
  ideaView.addToMenu(state.ideaSaved);

  ideaView.showMenu(state.idea.checkIdeasLength());
};

const deleteFavoriteController = (id, card) => {
  // delete from UI

  ideaView.deleteFavoriteFromMenu(card);
  // DELETE FROM LOCAL STORAGE
  state.idea.deleteIdeaFromLS(parseInt(id));

  ideaView.showMenu(state.idea.checkIdeasLength());
};

//init load
const init = () => {
  state.idea = new Ideas();
  state.idea.readLocalStorage();

  state.idea.ideas.forEach((idea) => ideaView.addToMenu(idea));

  ideaView.showMenu(state.idea.checkIdeasLength());
};
init();

// LISTENERS

elements.container.addEventListener("click", (e) => {
  if (e.target.closest(".header__btnGenerate ")) {
    generateController();
  }
  //if unlock for theme
  else if (e.target.matches("#unlockTheme")) {
    //change it to active
    if (e.target.classList.contains("header__icon--inactive")) {
      ideaView.lock(elements.iconLockTheme);
    } else {
      //change it to inactive

      ideaView.unlock(elements.iconLockTheme);
    }
    //check if all are locked
    ideaView.checkIfAllAreLocked();
  }
  //if unlock for Code
  else if (e.target.matches("#unlockCode")) {
    //change it to active
    if (e.target.classList.contains("header__icon--inactive")) {
      ideaView.lock(elements.iconLockCode);
      ideaView.checkIfAllAreLocked();
    } else {
      //change it to inactive

      ideaView.unlock(elements.iconLockCode);
    }
    //check if all are locked
    ideaView.checkIfAllAreLocked();
  } else if (e.target.closest(".header__btnSave")) {
    saveController();
  }
});

elements.navSavedItems.addEventListener("click", ideaView.toggleMenu);

elements.menu.addEventListener("click", (e) => {
  if (e.target.matches(".menu__close")) {
    const favoriteId = e.target.parentElement.dataset.id;
    const card = e.target.parentElement;
    deleteFavoriteController(favoriteId, card);
  }
});
