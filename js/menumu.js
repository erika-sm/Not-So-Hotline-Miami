class MenuMu {
constructor(theRoot) {
    this.root = theRoot;
    this.mm = document.createElement("audio");
    this.mm.src = "./sounds/menu.mp3";
    this.mm.setAttribute("preload", "auto");
    this.mm.setAttribute("controls", "false");
    this.mm.style.display = "none";
    this.mm.setAttribute("loop", "true");
    this.mm.setAttribute("autoplay", "true");
    theRoot.appendChild(this.mm);

    this.play = function () {
    this.mm.play();
    };

    this.pause = function () {
    this.mm.pause();
    };
}
}
