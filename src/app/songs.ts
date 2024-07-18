export interface Song {
  title: String,
  artist: String,
  artwork: String
  liked: Boolean
}

export interface Library {
  libraryName: String,
  songs: Array<Song>
}

export const likedSongs =
{
  libraryName: "Liked Songs",
  author: "Nick Barrionuevo",
  songs: [
    {
      title: "Pure Imagination",
      artist: "Ruben Wan",
      artwork: "https://i.scdn.co/image/ab67616d0000b273e5979135c1dfb7d16b9f4971",
      liked: true,
    },
    {
      title: "GOLDEN SZN",
      artist: "Oguz",
      artwork: "https://m.media-amazon.com/images/I/51-eHGxHWIL._UXNaN_FMjpg_QL85_.jpg",
      liked: true,
    },
    {
      title: "Gute Nacht",
      artist: "Lorenzo",
      artwork: "https://i.scdn.co/image/ab67616d0000b27302fd2fe300f923a62d26e0e5",
      liked: true,
    }
  ]
};

export const libraries: Library[] = [
  likedSongs,
  {
    libraryName: "Hard Techno",
    author: "Nick Barrionuevo",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2020",
    author: "Spotify",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2021",
    author: "Spotify",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2022",
    author: "Spotify",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2023",
    author: "Spotify",
    songs: []
  },
  {
    libraryName: "Ira + Nick",
    author: "Spotify",
    songs: []
  },
  {
    libraryName: "j-rock/indie",
    author: "dear_rinn",
    songs: []
  },

]


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/