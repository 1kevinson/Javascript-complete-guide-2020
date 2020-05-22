const GOOGLE_API_KEY = "AIzaSyAX7O11NXTyrdslFOe7I_p_od1N3rr1epw";

export async function getAddressFromCoords() {
  // I'm tired today 😨
}

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}key=${GOOGLE_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. please try again!");
  }

  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = data.results[0].geometry.location;
  return coordinates;
}


// TO copy some text content to clipboard use Clipboard API / MDN
