class Sound {
  constructor(theRoot) {
    this.root = theRoot;
    this.sound = document.createElement("audio");

    let songNum = 1 + Math.floor(Math.random() * 3);
    let songName = "./sounds/song" + songNum + ".mp3";

    this.sound.src = songName;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "true");
    this.sound.style.display = "block";
    this.sound.style.position = "absolute";
    this.sound.style.left = "394px";
    this.sound.style.top = "425px";
    this.sound.style.zIndex = "150";
    this.sound.style.width = "100px";
    this.sound.style.background = "none";
    this.sound.style.display = "none";
    this.sound.setAttribute("loop", "true");
    theRoot.appendChild(this.sound);

    this.show = function () {
      this.sound.style.display = "block";
    };

    this.hide = function () {
      this.sound.style.display = "none";
    };

    this.play = function () {
      this.sound.play();
    };

    this.pause = function () {
      this.sound.pause();
    };
  }
}
