/* Your data here */
import luffy from "./assets/luffy.jpg";
import zoro from "./assets/zoro.jpg";
import sanji from "./assets/sanji.jpg";
import law from "./assets/law.jpg";  

export const AVAILABLE_ITEM = [
    {
        name: "Monkey D. Luffy",
        occupation: "Strawhats pirate captain",
        description: "Luffy is a fearless and optimistic pirate with the ability to stretch like rubber.",
        image: {
              src: luffy,
              alt: "img",
        },
    },
    {
        name: "Roronoa Zoro",
        occupation: "King of hell",
        description: "Zoro is a skilled swordsman with a goal to become the world's greatest.",
        image: {
              src: zoro,
              alt: "img",
        },
    }, 
    {
        name: "Sanji",
        occupation: "Blackfoot Sanji",
        description: "Sanji is a chivalrous and powerful cook with exceptional martial arts skills.",
        image: {
              src: sanji,
              alt: "img",
        },
    }, 
    {
        name: "Trafalgar D. Water Law",
        occupation: "Surgeon of the Death",
        description: "Law is a calm and calculating pirate with the power to manipulate space through his Devil Fruit abilities.",
        image: {
              src: law,
              alt: "img",
        },
    }
];