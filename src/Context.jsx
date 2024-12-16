import { createContext, useReducer } from "react";
import {
  Adele,
  Billie,
  Eminem,
  Fiftycent,
  Jony,
  Konsta,
  Ladygaga,
  Lanadelrey,
  Lola,
  Miyagi,
  Shahlo,
  Sheralijorayev,
  Theweekend,
  Xcho,
} from "./assets";

const initialState = {
  artists: [
    {
      id: 1,
      artist: "Artist",
      image: Fiftycent,
      title: "50 cent",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 2,
      artist: "Artist",
      image: Adele,
      title: "Adele",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 3,
      artist: "Artist",
      image: Billie,
      title: "Billie Eilish",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 4,
      artist: "Artist",
      image: Eminem,
      title: "Eminem",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 5,
      artist: "Artist",
      image: Jony,
      title: "Jony",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 6,
      artist: "Artist",
      image: Konsta,
      title: "Konsta",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 7,
      artist: "Artist",
      image: Ladygaga,
      title: "Ladygaga",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 8,
      artist: "Artist",
      image: Lanadelrey,
      title: "Lana Del Rey",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 9,
      artist: "Artist",
      image: Lola,
      title: "Lola Ahmedova",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 10,
      artist: "Artist",
      image: Shahlo,
      title: "Shahlo Ahmedova",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 11,
      artist: "Artist",
      image: Miyagi,
      title: "Miyagi&Endspiel",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 12,
      artist: "Artist",
      image: Sheralijorayev,
      title: "Sherali Jo'rayev",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 13,
      artist: "Artist",
      image: Theweekend,
      title: "The Weeknd",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
    {
      id: 14,
      artist: "Artist",
      image: Xcho,
      title: "XCHO",
      musics: [],
      albums: [],
      listeners: 117368051,
    },
  ],
  albums: [
    {
      title: "The Avairy",
      artist: "Galantis",
      year_released: 2017,
      songs: [
        {
          title: "Hey Alligator",
          length: 197,
        },
        {
          title: "True Feeling",
          length: 214,
        },
        {
          title: "Written in the scars",
          length: 194,
        },
        {
          title: "No Money",
          length: 185,
        },
      ],
    },
    {
      title: "Kolony",
      artist: "Steve Aoki",
      year_released: 2017,
      songs: [
        {
          title: "Lit",
          length: 150,
        },
        {
          title: "Without you",
          length: 207,
        },
        {
          title: "Been Ballin",
          length: 180,
        },
        {
          title: "How Else",
          length: 152,
        },
      ],
    },
  ],
};

export const Context = createContext();

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
