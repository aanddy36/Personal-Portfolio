import { IFacts } from "../moduls";
import graduation from '../images/about/graduation.png'
import head from '../images/about/head.png'
import languages from '../images/about/languages.png'
import america from '../images/about/america.png'
import musicnotes from '../images/about/music-notes.png'
import microphone from '../images/about/microphone.png'
import partners from '../images/about/partners.png'
import pencil from '../images/about/pencil.png'

///src/images/logos/matlab.png
export const myFacts:IFacts[] = [
  { sentence: "23 years old.", url: head },
  {
    sentence: "Geologist graduated from Universidad del Norte.",
    url: graduation,
  },
  {
    sentence:
      "Fluent Spanish and English, and basic Portuguese.",
    url: languages,
  },
  {
    sentence: "I did my university internship in Mississippi for 6 months.",
    url: america,
  },
  
  {
    sentence: "My favorite music genres are rap and indie rock.",
    url: musicnotes,
  },
  {
    sentence: "In my free time I like to play the guitar and sing.",
    url: microphone,
  },
  {
    sentence:
      "Fast-learner, team-worker and dedicated person.",
    url: partners,
  },
  {
    sentence: "I enjoy drawing hyperrealistc portraits.",
    url: pencil,
  },/*
  {
    sentence:
      "I have read the entire Game of Thrones, Harry Potter and Lord of the Rings saga.",
    url: "/src/images/about/book.png",
  },*/
];
