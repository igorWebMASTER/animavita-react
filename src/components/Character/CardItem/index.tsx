import { useScrollTop } from 'hooks/useScrool';
import React from 'react'
import { Anime } from 'types/anime';
import * as S from './styles'

const YOUTUBE_BASE_URL = 'https://www.youtube.com/watch?v='

export default function CardItem({ animes }: Anime) {
  const [scrollTop, scrollProps] = useScrollTop();
  return (
    <S.CardItemContainer  >
      <S.CardImage src={animes?.attributes?.image?.small} />
      <S.CardCoverImg src={animes?.attributes?.posterImage?.large} />
      <S.CoverContent>
        <S.CardCharacterName>{animes?.attributes?.canonicalTitle}</S.CardCharacterName>
        <S.CardCharacterBio>{animes?.attributes?.description}</S.CardCharacterBio>
        <S.CardCharacterName>Popularity rank</S.CardCharacterName>
        <S.CardCharacterText>{animes?.attributes?.popularityRank}</S.CardCharacterText>
        <S.CardCharacterName>Number of episodes</S.CardCharacterName>
        <S.CardCharacterText>{animes?.attributes?.episodeCount}</S.CardCharacterText>
        <S.CardCharacterText><a href={`${YOUTUBE_BASE_URL}${animes?.attributes?.youtubeVideoId}`} target="_blank">See online video</a></S.CardCharacterText>
      </S.CoverContent>
    </S.CardItemContainer>
  )
}
