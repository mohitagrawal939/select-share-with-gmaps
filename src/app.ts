import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    console.log(enteredAddress);

    axios.get(``);
}

form.addEventListener("submit", searchAddressHandler);
