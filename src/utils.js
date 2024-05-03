// import { faL } from "@fortawesome/free-solid-svg-icons";
import {v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name  : "Forgive Me",
            cover : "https://img2.goodfon.com/original/1024x1024/f/a8/art-jjune-anime-tokiyskiy.jpg",
            artist : "Ward Wills",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=21738",
            color : ["A2705A","ECE3AA"],
            id : uuidv4(),
            active : true
        },
        {
            name  : "Fly High Newborn",
            cover : "https://cdn.wallpapersafari.com/81/28/wdzZH7.png",
            artist : "Avilion",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=55317",
            color : ["22A1D9","DE408D"],
            id : uuidv4(),
            active : false
        },
        {
            name  : "Shung",
            cover : "https://img5.goodfon.com/original/1024x1024/1/bf/anime-art-klinok-rassekaiushchii-demonov-demon-slayer-kimets.jpg",
            artist : "Shofel",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=58855",
            color : ["DC7622","578237"],
            id : uuidv4(),
            active : false
        },
    ];
}


export default chillHop