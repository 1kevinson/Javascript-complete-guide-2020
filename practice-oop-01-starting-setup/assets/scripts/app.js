/** @format */

class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn.addEventListener('click',);
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

  addProject() {}

  switchProject(projectId) {
    //Filter array to remove unmatching project p
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activesProjectList = new ProjecList('active');
    const finishedProjectList = new ProjecList('finished');
  }
}

App.init();
