let partyImag = document.querySelectorAll(".image");
let voteCount = document.querySelectorAll(".voteCount");
let selectedImg = document.querySelector(".selected img");
let selected = document.querySelector(".selected");
let parties = document.querySelector(".parties");

let candidates = [
    {name: "candidate 2", imgUrl: "images/bjp.png"},
    {name: "candidate 4", imgUrl: "images/congress.jpeg"},
    {name: "candidate 1", imgUrl: "images/AAp.jpeg"},
    {name: "candidate 5", imgUrl: "images/Shapaa.jpg"},
    {name: "candidate 3", imgUrl: "images/tmc.jpg"},
];

let voted = 0;
candidates.forEach((cu, index) => {
    partyImag[index].addEventListener("click", () => {
        if (voted === 0) {
            voteCount[index].innerHTML = 1;
            selectedImg.src = cu.imgUrl;
            voted = 1;

            const re = setTimeout(() => {
                selected.style.display = "block";
                parties.style.display = "none";
                
                const clear = setTimeout(() => {
                    selected.style.display = "none";
                    parties.style.display = "block";
                    voteCount[index].innerHTML = 0;
                    voted = 0;
                }, 2000);

            }, 2000);
        }
    });
});