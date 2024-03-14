console.log("Welcome to Spotify")
let songIndex=0;
let audioElemnet=new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songs=[
    {songName:"Salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg" },
    {songName:"Salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg" },
    {songName:"Salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg" },
    {songName:"Salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg" },
    {songName:"Salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg" },
    {songName:"Salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg" },
    {songName:"Salam-e-ishq",filepath:"song/1.mp3",coverpath:"cover/1.jpg" },
]

masterPlay.addEventListener('click',()=>{
    if(audioElemnet.paused||audioElemnet.currentTime<=0){
        audioElemnet.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElemnet.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElemnet.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElemnet.currentTime/audioElemnet.duration)*100);
    console.log(progress)
    myProgressBar.value = progress
})