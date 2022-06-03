import React from 'react'
import CardItem from './CardItem'
import * as S from './styles'
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from 'components/Loading';
import { AnimeProps, CharacterProps } from 'types/character';


export default function Character({ characters, onHandleFetchMoreCharacters }: CharacterProps) {
  return (
    <>
      <InfiniteScroll
        dataLength={characters.length}
        next={onHandleFetchMoreCharacters}
        hasMore={true}
        loader={<Loading />}
      >
        <S.CardCharacterContainer>
          {characters && characters.map((character: AnimeProps, index: number) => (
            <CardItem key={index + 2} character={character} />
          ))}
        </S.CardCharacterContainer>
      </InfiniteScroll>
    </>
  )
}
