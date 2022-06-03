import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styled';
import { Header } from 'components/Header';
import { getCharacterInfo } from 'app/api';
import Character from 'components/Character';

type AnimeProps = {
  results: AnimeProps[];
  next: string;
}

export function Home() {
  const [animes, setCharacters] = useState<AnimeProps>({
    results: [],
    next: '',
  });

  useEffect(() => {
    handleGetCharacters();
  }, [])

  const handleGetCharacters = useCallback(async (urlParams = null) => {
    try {
      const response = await getCharacterInfo(urlParams)
      let newResults = [...animes.results, ...response.data]
      setCharacters((prevState) => ({
        ...prevState,
        results: newResults,
        next: response?.links?.next,
      }))
    } catch (error) {
      alert('Ocorreu um erro ao buscar os animes');
    }
  }, [animes]);

  return (
    <>
      <S.AnimeWrapper className="map">
        <S.AnimeContent>
          <Header />
          <Character
            animes={animes?.results as any}
            onHandleFetchMoreCharacters={() => handleGetCharacters(animes?.next)}
          />
        </S.AnimeContent>
      </S.AnimeWrapper>
    </>
  );
}

