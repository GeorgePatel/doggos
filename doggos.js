// const DOG_URL = "https://dog.ceo/api/breeds/image/random";
//
// const doggos = document.querySelector(".doggos");
//
// function addNewDoggo() {
//     const promise = fetch(DOG_URL);
//
//     promise
//         .then(function(response) {
//             const processingPromise = response.json();
//             return processingPromise;
//     })
//     .then(function(processedResponse) {
//         // const img = document.createElement("img");
//         const img = document.querySelector(".loading");
//         // img.className("loading");
//         img.src = processedResponse.message;
//         img.alt = "Cute doggo";
//         doggos.appendChild(img);
//     });
//
// }
//
// document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
const doggos = document.querySelector(".doggos");

const breed = document.querySelector(".breed");

const pic_length = 300;

function addNewDoggo() {
    const DOG_URL = "https://dog.ceo/api/breed/" + breed.value + "/images/random";

    const loading = document.createElement("img");

    loading.src = "https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif";
    loading.width = pic_length;
    loading.height = pic_length;

    doggos.appendChild(loading);

    const promise = fetch(DOG_URL);
    promise
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processedResponse) {
            const dog = document.createElement("img");

            dog.src = processedResponse.message;
            dog.width = pic_length;
            dog.height = pic_length;
            dog.alt = "Cute doggo";
            dog.className = "dog";

            doggos.removeChild(loading);
            doggos.appendChild(dog);
        });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);