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
      </S.CoverContent>
    </S.CardItemContainer>
  )
}
