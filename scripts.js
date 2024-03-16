// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playlist = document.getElementById("playlist");
  
    // Define your songs here with their titles and paths
    const songs = [
      { title: "Song 1", path: "song11.mp3" },
      { title: "Song 2", path: "song12.mp3" },
      // Add more songs here
    ];
  
    // Create playlist items and add click event listeners to play songs
    songs.forEach(song => {
      const listItem = document.createElement("li");
      listItem.textContent = song.title;
      listItem.addEventListener("click", function() {
        audioPlayer.src = song.path;
        audioPlayer.play();
      });
      playlist.appendChild(listItem);
    });
  });
  