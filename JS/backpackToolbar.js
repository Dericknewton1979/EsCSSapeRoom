const closedBackpack = document.querySelector("#closed-backpack");
const openBackpack = document.querySelector("#open-backpack");
const backpackBG = document.querySelector("#backpack-menu-bg");

const accountBtn = document.querySelector("#accountBtn");
const accountBubble = document.querySelector(".accountBubble");

const aboutBtn = document.querySelector("#aboutBtn");
const aboutBubble = document.querySelector(".aboutBubble");

const contactBtn = document.querySelector("#contactBtn");
const contactBubble = document.querySelector(".contactBubble");

const startGameBtn = document.querySelector("#startGameBtn");
const startGameBubble = document.querySelector(".startGameBubble");

const backpackMenu = document.querySelector("#backpackMenu");

const cluesBtn = document.querySelector("#cluesBtn");
const cluesBubble = document.querySelector(".cluesBubble");

const mapBtn = document.querySelector("#mapBtn");
const mapBubble = document.querySelector(".mapBubble");

const notesBtn = document.querySelector("#notesBtn");
const notesBubble = document.querySelector(".notesBubble");

const hintsBtn = document.querySelector("#hintsBtn");
const hintsBubble = document.querySelector(".hintsBubble");


closedBackpack.addEventListener("click", openBackpackItem);
openBackpack.addEventListener("click", closeBackpackItem);

accountBtn.addEventListener("mouseover", () => { speechBubbleIn(1) });
accountBtn.addEventListener("mouseout", () => { speechBubbleOut(1) });

aboutBtn.addEventListener("mouseover", () => { speechBubbleIn(2) });
aboutBtn.addEventListener("mouseout", () => { speechBubbleOut(2) });

contactBtn.addEventListener("mouseover", () => { speechBubbleIn(3) });
contactBtn.addEventListener("mouseout", () => { speechBubbleOut(3) });

startGameBtn.addEventListener("mouseover", () => { speechBubbleIn(4) });
startGameBtn.addEventListener("mouseout", () => { speechBubbleOut(4) });

cluesBtn.addEventListener("mouseover", () => { speechBubbleIn(5) });
cluesBtn.addEventListener("mouseout", () => { speechBubbleOut(5) });

mapBtn.addEventListener("mouseover", () => { speechBubbleIn(6) });
mapBtn.addEventListener("mouseout", () => { speechBubbleOut(6) });

notesBtn.addEventListener("mouseover", () => { speechBubbleIn(7) });
notesBtn.addEventListener("mouseout", () => { speechBubbleOut(7) });

hintsBtn.addEventListener("mouseover", () => { speechBubbleIn(8) });
hintsBtn.addEventListener("mouseout", () => { speechBubbleOut(8) });

closeBackpackItem ();

function openBackpackItem () {
    closedBackpack.style.display = "none";
    openBackpack.style.display = "inline-block";
    backpackBG.style.display = "inline-block";
    backpackMenu.style.display = "inline-block";

}

function closeBackpackItem () {
    closedBackpack.style.display = "inline-block";
    openBackpack.style.display = "none";
    backpackBG.style.display = "none";
    backpackMenu.style.display = "none";
}

function speechBubbleIn(num) {
    switch (num) {
        case 1:
            accountBubble.style.display = "inline-block";
            break;
        case 2:
            aboutBubble.style.display = "inline-block";
            break;
        case 3:
            contactBubble.style.display = "inline-block";
            break;
        case 4:
            startGameBubble.style.display = "inline-block";
            break;
        case 5:
            cluesBubble.style.display = "inline-block";
            break;
        case 6:
            mapBubble.style.display = "inline-block";
            break;
        case 7:
            notesBubble.style.display = "inline-block";
            break;
        case 8:
            hintsBubble.style.display = "inline-block";
            break;           
        default:
            break;
    }
}

function speechBubbleOut(num) {
    switch (num) {
        case 1:
            accountBubble.style.display = "none";
            break;
        case 2:
            aboutBubble.style.display = "none";
            break;
        case 3:
            contactBubble.style.display = "none";
            break;
        case 4:
            startGameBubble.style.display = "none";
            break;
        case 5:
            cluesBubble.style.display = "none";
            break;
        case 6:
            mapBubble.style.display = "none";
            break;
        case 7:
            notesBubble.style.display = "none";
            break;
        case 8:
            hintsBubble.style.display = "none";
            break;           
        default:
            break;
    }
}
