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
  deleteIdeaFromLS(id) {
    //get the index
    console.log(this.ideas);
    const index = this.ideas.findIndex((el) => el.ID === id);

    //delete idea from LS
    this.ideas.splice(index, 1);
    //Update storage
    this.savedToLS();
  }
  readLocalStorage() {
    const ideas = JSON.parse(localStorage.getItem("ideas"));

    if (ideas) {
      this.ideas = ideas;
    }
  }
}
