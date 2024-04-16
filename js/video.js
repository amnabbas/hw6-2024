var video;

//On page loading
window.addEventListener("load", function() {
	video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
	console.log("Good job opening the window")
	console.log("Autoplay is disabled");
    console.log("Loop is disabled");

});

//Click Play Button
document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Play Video");
    
});

//Click Pause Button
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
});

//Click Slow Down Button
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("Updated speed:", video.playbackRate);
});

//Click Speed Up Button
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("Updated speed:", video.playbackRate);
});

//Click Skip Ahead Button
document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
        video.pause(); // Pause the video when resetting time to 0
    } else {
        video.currentTime += 10;
    }
	console.log("Skip Ahead");
    console.log("Current video time:", video.currentTime);
});

// Click Mute Button
document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute";
    console.log(video.muted ? "Mute" : "Unmute");
});

//Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").textContent = video.volume * 100 + "%";
    console.log("Current volume value:", video.volume);
});

//Old School
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
