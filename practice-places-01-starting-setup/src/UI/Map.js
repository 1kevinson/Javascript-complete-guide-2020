export class Map {
  constructor(coords) {
    this.render(coords);
  }

  render(coordinates) {
    if (!google) {
      swal("Couln't load Maps Library");
      return;
    }

    const map = new google.maps.Map(document.getElementById("map"), {
      center: coordinates,
      zoom: 8,
    });

    new google.maps.Marker({
      position: coordinates,
      map: map,
    });
  }
}
