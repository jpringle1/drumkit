const list = document.getElementById("noteList");

let listObj = {
    a :'boom',
    s : 'clap',
    d : 'hihat',
    f : 'kick',
    g : 'openhat',
    h : 'ride',
    j : 'snare',
    k : 'tink',
    l : 'tom'
}


let playAudio = (name) => {
    const audio = new Audio(`./sounds/${name}.wav`);
    audio.play();
} 

list.addEventListener('click', (event) => {
    console.log(event.target.id)
    if(event.target.id == '' || event.target.id == "noteList" ) {
        tag=event.target.parentNode.id;
        playAudio(tag);
    } else {
        tag=event.target.id;
        playAudio(tag);
    };
})


document.addEventListener("keydown", (event) => {
    playAudio(listObj[event.key])
})

