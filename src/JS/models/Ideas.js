export default class Ideas {
  constructor() {
    this.ideas = [];
  }

  addtoLS(idea) {
    this.ideas.push(idea);

    this.savedToLS();
  }

  checkIdeasLength() {
    return this.ideas.length;
  }
  savedToLS() {
    localStorage.setItem("ideas", JSON.stringify(this.ideas));
  }
  readLocalStorage() {
    const ideas = JSON.parse(localStorage.getItem("ideas"));

    if (ideas) {
      this.ideas = ideas;
    }
  }
}
