import { Howl } from "howler";
import "./App.css";
import kick from "./assets/kick.mp3";
import snare from "./assets/snare.mp3";
import hiHat from "./assets/hi-hat.mp3";
import tom from "./assets/tom.mp3";
import clap from "./assets/clap.mp3";
import shaker from "./assets/shaker.mp3";
import tambourine from "./assets/tambourine.mp3";
import cymbal from "./assets/cymbal.mp3";
import cowbell from "./assets/cowbell.mp3";

const sounds = [
  { key: "Q", name: "Kick", src: kick },
  { key: "W", name: "Snare", src: snare },
  { key: "E", name: "Hi-hat", src: hiHat },
  { key: "A", name: "Tom", src: tom },
  { key: "S", name: "Clap", src: clap },
  { key: "D", name: "Shaker", src: shaker },
  { key: "Z", name: "Tambourine", src: tambourine },
  { key: "X", name: "Cymbal", src: cymbal },
  { key: "C", name: "Cowbell", src: cowbell },
];

function App() {
  const handlePlay = (src: any) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key.toUpperCase();
    switch (key) {
      case "Q":
        handlePlay(sounds[0].src);
        break;
      case "W":
        handlePlay(sounds[1].src);
        break;
      case "E":
        handlePlay(sounds[2].src);
        break;
      case "A":
        handlePlay(sounds[3].src);
        break;
      case "S":
        handlePlay(sounds[4].src);
        break;
      case "D":
        handlePlay(sounds[5].src);
        break;
      case "Z":
        handlePlay(sounds[6].src);
        break;
      case "X":
        handlePlay(sounds[7].src);
        break;
      case "C":
        handlePlay(sounds[8].src);
        break;
      case "C":
        handlePlay(sounds[9].src);
        break;
      default:
        break;
    }
  };

  return (
    <div id="drum-machine" onKeyDown={handleKeyDown} tabIndex={0}>
      <div id="display"></div>
      <div id="pad-container">
        {sounds.map((sound) => (
          <button
            className="drum-pad"
            id={sound.name}
            key={sound.key}
            onClick={() => handlePlay(sound.src)}
          >
            {sound.key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
