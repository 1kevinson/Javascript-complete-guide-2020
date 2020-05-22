import swal from "sweetalert";

export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }

  show() {
    //check compatibility with IE
    if ("content" in document.createElement("template")) {
      //Use importNode to clone the content of a template node
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );

      this.modalElement = modalElements.querySelector(".modal");
      this.backdropElement = modalElements.querySelector(".backdrop");

      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modalElement.appendChild(contentElement);
      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      // fallback code
      swal(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement);
      document.body.removeChild(this.backdropElement);
      // Use these two line to remove unwanted elements
      this.modalElement = null;
      this.backdropElement = null
    }
  }
}
