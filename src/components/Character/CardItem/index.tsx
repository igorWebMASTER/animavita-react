import React from 'react'
import * as S from './styles'

export default function CardItem({ character }: any) {
  return (
    <S.CardItemContainer>
      <S.CardImage src={character.attributes?.image?.small} />
      <S.CardCoverImg src={character.attributes?.posterImage?.large} />
      <S.CoverContent>
        <S.CardCharacterName>{character?.attributes?.canonicalTitle}</S.CardCharacterName>
        <S.CardCharacterBio>{character?.attributes?.description}</S.CardCharacterBio>
        <S.CardCharacterName>Popularity rank</S.CardCharacterName>
        <S.CardCharacterText>{character?.attributes?.popularityRank}</S.CardCharacterText>
        <S.CardCharacterName>Number of episodes</S.CardCharacterName>
        <S.CardCharacterText>{character?.attributes?.episodeCount}</S.CardCharacterText>
        <S.CardCharacterText><a href={`https://www.youtube.com/watch?v=${character?.attributes?.youtubeVideoId}`} target="_blank">See online video</a></S.CardCharacterText>
      </S.CoverContent>
    </S.CardItemContainer>
  )
}
