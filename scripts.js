const movieCards = document.getElementsByClassName("movie-card");
const dialogBackdrop = document.getElementById("dialog-backdrop");

const dialogTitle = document.getElementById("dialog-title");

const dialogPoster = document.getElementById("dialog-poster");
const dialogTrailer = document.getElementById("dialog-trailer");
const dialogDescription = document.getElementById("dialog-description");
const dialogDetails = document.getElementById("dialog-details");


for (const movieCard of movieCards) {
    movieCard.addEventListener("click", function (ev) {
        // Load Movie Data in the Dialog Box
        const name = movieCard.querySelector(".movie-name").textContent;
        const { description, details, trailerUrl } = movieData[name];

        // Load Movie Title
        const title = document.createElement("h1");
        title.textContent = name;

        dialogTitle.appendChild(title);


        // Load Movie Poster
        const image = movieCard.querySelector("img").cloneNode();

        image.style.setProperty("border-radius","10px")
        image.style.setProperty("border","2px solid #fff")
        dialogPoster.appendChild(image);

        // Load Movie Trailer
        if (trailerUrl != "") {
            const iframe = document.createElement("iframe");
            iframe.src = trailerUrl;
            iframe.width = "560";
            iframe.height = "315";
            iframe.allowFullscreen = true;

            dialogTrailer.appendChild(iframe);
        } else {
            dialogTrailer.style.display = "none";
        }

        // Load Movie Description
        const paragraph = document.createElement("p");
        paragraph.textContent = description;

        dialogDescription.appendChild(paragraph);

        // Load Movie Details
        for (let [key, value] of Object.entries(details)) {
            const strong = document.createElement("strong");
            strong.textContent = key.split(/(?=[A-Z])/).join(' ') + ": ";
            strong.style.textTransform = "capitalize";

            if (value instanceof Array) {
                value = value.join(", ");
            }

            const lineBreak = document.createElement("br");

            dialogDetails.append(strong, value + " ", lineBreak);
        }

        dialogBackdrop.style.display = "block";

        // Prevent Scrolling when Dialog Box is Displayed
        document.body.style.overflowY = "hidden";
    });
}

dialogBackdrop.addEventListener("click", function (ev) {
    if (ev.target === this || ev.target instanceof HTMLButtonElement) {
        // Delete Movie Data before Closing Dialog Box
        dialogTitle.replaceChildren(dialogTitle.firstElementChild);

        dialogPoster.replaceChildren();

        dialogTrailer.replaceChildren(dialogTrailer.firstElementChild);
        dialogTrailer.style.display = "block";

        dialogDescription.replaceChildren(dialogDescription.firstElementChild);
        dialogDetails.replaceChildren();

        dialogBackdrop.style.display = "none";

        // Enable Scroll for Body
        document.body.style.overflowY = "auto";
    }
});
