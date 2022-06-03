import React from 'react'
import CardItem from './CardItem'
import * as S from './styles'
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from 'components/Loading';
import { Anime, AnimeProps } from 'types/anime';

export default function Character({ animes, onHandleFetchMoreCharacters }: AnimeProps) {

  return (
    <>
      <InfiniteScroll
        dataLength={animes.length}
        next={onHandleFetchMoreCharacters}
        hasMore={true}
        loader={<Loading />}
      >
        <S.CardCharacterContainer>
          {animes && animes.map((animes: any, index: number) => (
            <CardItem key={index + 2} animes={animes as any} />
          ))}
        </S.CardCharacterContainer>
      </InfiniteScroll>
    </>
  )
}
