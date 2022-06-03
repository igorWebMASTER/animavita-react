export type Anime = {
  animes: {
    attributes: {
      image: {
        medium?: string;
        small?: string;
      },
      posterImage: {
        large?: string;
        medium?: string;
        small?: string;
      },
      synopsis?: string;
      canonicalTitle?: string;
      description?: string;
      title?: string;
      popularityRank?: number;
      episodeCount?: number;
      youtubeVideoId?: number;
    }
  };
}

export interface AnimeProps {
  animes: Anime[];
  onHandleFetchMoreCharacters: () => void;
}
