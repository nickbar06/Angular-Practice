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


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/