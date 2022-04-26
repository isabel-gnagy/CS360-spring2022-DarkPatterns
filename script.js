function porp() {
    pp = document.getElementById("play_Pause").src;
    switch (pp) {
        case "../images/pause.png":
            document.getElementById("play_Pause").src = "images/play.png";
        break;
        case "../images/play.png":
            document.getElementById("play_Pause").src = "images/pause.png"
        break;
        default:
            document.getElementById("play_Pause").src = "blank.jpg";
        break;
      }
}
function next(){}
function back(){}
function play(ele){
    let album = ele.parentElement.children[0].src;
    let name = ele.parentElement.children[1].textContent;
    let singer = ele.parentElement.children[2].textContent;
    document.getElementsByClassName("playing-song-album")[0].src = album;
    document.getElementsByClassName("playing-song-name")[0].innerHTML = name;    
    document.getElementsByClassName("playing-song-singer")[0].innerHTML = singer;
    document.getElementsByClassName("d-play")[0].style.display = "none";
    document.getElementsByClassName("play")[0].style.display = "block";
}
function listPlay(){
        let album = ele.parentElement.children[0].src;
        let name = ele.parentElement.children[1].textContent;
        let singer = ele.parentElement.children[2].textContent;
        document.getElementsByClassName("playing-song-album")[0].src = album;
        document.getElementsByClassName("playing-song-name")[0].innerHTML = name;    
        document.getElementsByClassName("playing-song-singer")[0].innerHTML = singer;    
}
function closeForm2() {
    document.getElementsByClassName("popup")[0].style.display = "none";
}
function closeForm() {
    document.getElementsByClassName("acc")[0].style.display = "none";
}
function closeForm1() {
    document.getElementsByClassName("ads")[0].style.display = "none";
}
