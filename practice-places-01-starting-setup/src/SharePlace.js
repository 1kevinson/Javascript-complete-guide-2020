import swal from "sweetalert";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      swal("Location is not available", "please allow geolocation", "error");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (success) => {
        const coordinates = {
          lat: success.coords.latitude + Math.random() * 50,
          lng: success.coords.longitude + Math.random() * 50,
        };
        console.log(coordinates);
      },
      (error) => {
        swal("Couldn't locate you unfortunately...", error.message);
      }
    );
  }

  findAddressHandler() {}
}

new PlaceFinder();
