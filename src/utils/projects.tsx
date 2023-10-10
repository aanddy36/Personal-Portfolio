import { IProjects } from "../moduls";
import wordrowMain from "../images/wordrow/wordrow-main.png";
import flagsMain from "../images/flags/flags-main.png";
import trviaMain from "../images/trivia/trivia-main.png";
import wordrowTreasure from "../images/wordrow/wordrow-treasure.png";
import wordrowExamples from "../images/wordrow/wordrow-examples.png";
import flagsAfrica from "../images/flags/flags-africa.png";
import flagsEnd from "../images/flags/flags-end.png";
import triviaQuestion from "../images/trivia/trivia-question.png";
import triviaEnd from "../images/trivia/trivia-end.png";
//import portrait from "../utils/background.png";

export const personalProjects: IProjects[] = [
  {
    id: 1,
    title: "The Trivia Quiz",
    description:
      "15 general knowledge questions of easy, medium or hard difficulty with a time-limit of 3 minutes. Created using the open source Trivia API.",
    portrait: trviaMain,
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "React Router",
      "CSS",
      "HTML",
    ],
    githubRepo: "https://github.com/aanddy36/Trivia-Quiz",
    url: "https://the-trivia-quiz.netlify.app/",
    imagesModal: [
      {
        image: trviaMain,
        position: 1,
        status: "active",
      },
      {
        image: triviaQuestion,
        position: 2,
        status: "before",
      },
      {
        image: triviaEnd,
        position: 3,
        status: "after",
      },
    ],
  },
  {
    id: 2,
    title: "Wordrow",
    description:
      "An English dictionary which displays meanings, examples, syllables, antonyms and synonyms of the English word you like. Created using the WordsAPI from RapidAPI",
    portrait: wordrowMain,
    technologies: ["React", "JavaScript", "React Router", "CSS", "HTML", "TypeScript", "Tailwind"],
    githubRepo: "https://github.com/aanddy36/English-Dictionary",
    url: "https://wordrow.netlify.app/",
    imagesModal: [
      {
        image: wordrowMain,
        position: 1,
        status: "active",
      },
      {
        image: wordrowTreasure,
        position: 2,
        status: "before",
      },
      {
        image: wordrowExamples,
        position: 3,
        status: "after",
      },
    ],
  },
  {
    id: 3,
    title: "Flags Game",
    description:
      "In this game you can pick a continent (or the entire world) and guess their flags. You'll be timed and have a score according to the amount of wrong answers you have. Created using the open-source API REST Countries.",
    portrait: flagsMain,
    technologies: ["React", "JavaScript", "React Router", "CSS", "HTML"],
    githubRepo: "https://github.com/aanddy36/Flags-game",
    url: "https://flags-game-quiz.netlify.app/",
    imagesModal: [
      {
        image: flagsMain,
        position: 1,
        status: "active",
      },
      {
        image: flagsAfrica,
        position: 2,
        status: "before",
      },
      {
        image: flagsEnd,
        position: 3,
        status: "after",
      },
    ],
  },
  /*{
    id: 4,
    title: "Fake Project",
    description:
      "A fake project created because no one would ever see this portfolio as im a bad programmer.",
    portrait: portrait,
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "React Router",
      "CSS",
      "HTML",
    ],
    githubRepo: "https://github.com/aanddy36/Trivia-Quiz",
    url: "https://the-trivia-quiz.netlify.app/",
    imagesModal: [
      {
        image: trviaMain,
        position: 1,
        status: "active",
      },
      {
        image: triviaQuestion,
        position: 2,
        status: "before",
      },
      {
        image: triviaEnd,
        position: 3,
        status: "after",
      },
    ],
  },*/
];
