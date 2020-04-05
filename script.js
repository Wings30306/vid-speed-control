const speed = document.querySelector(".speed")
const bar = speed.querySelector(".speed-bar")
const video = document.querySelector(".flex")

const min = 0.4;
    const max = 4

 function handleMove(e) {
    const y = e.pageY - this.offsetTop
    const percent = y / this.offsetHeight
    const height = Math.round(percent * 100) + "%"
    const playbackRate = percent * (max - min) + min
    bar.style.height = height
    bar.textContent = playbackRate.toFixed(2) + "x"
    video.playbackRate = playbackRate
}

function keyControl(e) {
    let playbackRate = video.playbackRate
    const changeBy = 0.1
    if (e.key === "ArrowUp") {
        if (playbackRate < max - changeBy) {
            playbackRate += changeBy
        }
    } else if (e.key === "ArrowDown") {
        if (playbackRate > min + changeBy) {
            playbackRate -= changeBy
        }
    }
    video.playbackRate = playbackRate
    bar.textContent = playbackRate.toFixed(2) + "x"
    bar.style.height = (playbackRate * 100 / max) + "%" 
}

speed.addEventListener("mousemove", handleMove)
speed.addEventListener("touchchange", handleMove)
window.addEventListener("keydown", keyControl)
