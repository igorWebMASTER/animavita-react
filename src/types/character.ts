export type AnimeProps = {
    name: string;
    type: string;
    image: string;
    bio: string;
    color: string;
    img: string;
}


export interface CharacterProps {
  characters: AnimeProps[];
  onHandleFetchMoreCharacters: () => void;
}
