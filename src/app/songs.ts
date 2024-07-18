export interface Song {
  title: String,
  artist: String,
  artwork: String
  liked: Boolean
}

export interface Library {
  libraryName: String,
  author: String,
  artwork: String,
  songs: Array<Song>
}

export const likedSongs =
{
  libraryName: "Liked Songs",
  author: "Nick Barrionuevo",
  artwork: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
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
    artwork: "https://mosaic.scdn.co/300/ab67616d00001e025827bd81ec8856a483fcbc24ab67616d00001e02b807bb9570b53ea3aa52788eab67616d00001e02d41957efbabde915386bced1ab67616d00001e02ffbb8f2c37ee31f75c2faa1f",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2020",
    author: "Spotify",
    artwork: "https://lineup-images.scdn.co/wrapped-2020-top100_DEFAULT-en.jpg",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2021",
    author: "Spotify",
    artwork: "https://lineup-images.scdn.co/wrapped-2021-top100_DEFAULT-en.jpg",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2022",
    author: "Spotify",
    artwork: "https://wrapped-images.spotifycdn.com/image/yts-2022/default/your-top-songs-2022_default_en.jpg",
    songs: []
  },
  {
    libraryName: "Your Top Songs 2023",
    author: "Spotify",
    artwork: "https://wrapped-images.spotifycdn.com/image/yts-2023/default/your-top-songs-2023_DEFAULT_en.jpg",
    songs: []
  },
  {
    libraryName: "Ira + Nick",
    author: "Spotify",
    artwork: "https://blend-playlist-covers.spotifycdn.com/v2/blend_DEFAULT-gold-yellow-en.jpg",
    songs: []
  },
  {
    libraryName: "j-rock/indie",
    author: "dear_rinn",
    artwork: "https://mosaic.scdn.co/300/ab67616d00001e0224e4422aefb74f5e04c9ba9cab67616d00001e023111791fb43bf16766b90177ab67616d00001e0258d1de24fa8a2b26a4065303ab67616d00001e02ab06d693e8163a4d25e3b7da",
    songs: []
  },

]


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/