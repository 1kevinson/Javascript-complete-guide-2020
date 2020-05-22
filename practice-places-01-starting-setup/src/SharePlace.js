import swal from "sweetalert";
import { Modal } from "./UI/Modal.js";
import { Map } from "./UI/Map.js";
import { getCoordsFromAddress } from "./Utility/location.js";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  selectPlace(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      swal("Location is not available", "please allow geolocation", "error");
      return;
    }

    const modal = new Modal(
      "loading-modal-content",
      "loading location - please wait!"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (success) => {
        modal.hide();
        const coordinates = {
          lat: success.coords.latitude + Math.random() * 50,
          lng: success.coords.longitude + Math.random() * 50,
        };
        this.selectPlace(coordinates);
      },
      (error) => {
        modal.hide();
        swal("Couldn't locate you unfortunately...", error.message);
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;
    if (!address || address.trim().length === 0) {
      swal("invalid address entered", "please try again...", "error");
    }

    const modal = new Modal(
      "loading-modal-content",
      "loading loaction please wait."
    );
    modal.show();

    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates);
    } catch (e) {
      swal(e.message);
    }

    modal.hide();
  }
}

new PlaceFinder();
