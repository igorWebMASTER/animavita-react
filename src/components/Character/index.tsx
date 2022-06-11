import React from 'react'
import CardItem from './CardItem'
import * as S from './styles'
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from 'components/Loading';
import { Anime, AnimeProps } from 'types/anime';
import { Variants, motion } from 'framer-motion';

export default function Character({ animes, onHandleFetchMoreCharacters }: AnimeProps) {


  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={animes.length}
        next={onHandleFetchMoreCharacters}
        hasMore={true}
        loader={<Loading />}
      >
        <S.CardCharacterContainer>
          {animes && animes.map((animes: Anime, index: number) => (
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <CardItem key={index + 2} animes={animes as any} />
              </motion.div>
            </motion.div>
          ))}
        </S.CardCharacterContainer>
      </InfiniteScroll>
    </>
  )
}
