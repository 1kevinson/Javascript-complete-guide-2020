/** @format */

class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id; //test contributions
  }
}

class ProjecList {
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
  }
}

class App {
  static init() {
    const activesProjectList = new ProjecList('active');
    const finishedProjectList = new ProjecList('finished');
  }
}

App.init();
