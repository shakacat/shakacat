document.addEventListener("DOMContentLoaded", function() {
    var mainImage = document.getElementById("mainImage");
    var diamond = document.querySelector(".diamond");

    var audioPlayer = document.createElement("audio");
    var audioList = ["isi1.ogg", "isi2.ogg", "isi3.ogg", "isi4.ogg"];

    var audioInterval; // インターバルを格納する変数

    diamond.addEventListener("click", function() {
        if (mainImage.src.includes("steve1.png")) {
            mainImage.src = "steve2.gif";
            playRandomAudio();
        } else {
            mainImage.src = "steve1.png";
            stopAudio();
        }
    });

    function playRandomAudio() {
        stopAudio(); // 音声を停止する
        audioInterval = setInterval(function() {
            var randomIndex = Math.floor(Math.random() * audioList.length);
            var audioSource = audioList[randomIndex];
            audioPlayer.src = audioSource;
            audioPlayer.play();
        }, 200);
    }

    function stopAudio() {
        clearInterval(audioInterval); // インターバルをクリアする
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
});
