import styled from "styled-components";

export const CardItemContainer =  styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  position: relative;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;

  cursor: pointer;

  margin-right: 25px;
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: var(--shadow-elevation-medium);
`

export const CardCharacterName =  styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

export const CardCharacterBio =  styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  width: 100%;
  text-overflow: ellipsis;
`

export const CardCharacterInfo =  styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  text-overflow: ellipsis;
`

export const CardCoverImg =  styled.div<{ src?: string }>`
  width: 100%;
  background-image: url(${props => props.src || ''});
  background-size: cover;
  border-radius: 8px;
  box-shadow: inset 0 0 100px black;
  position: relative;
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);

  &:hover{
    transform: scale(1.10, 1.10);
  }
`

export const CardImage =  styled.div<{ src?: string }>`
  width: 100%;
  height: 120px ;
  top: 0;
  position: absolute ;
  background-image: url(${props => props.src || ''});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  top: 0;
`

export const CoverContent =  styled.div`
  background: #f2f2f2;
  position: absolute;
  width: 100%;
  height: 20rem;
  bottom: 0;
  border-radius: 8px;
  display: flex;
  padding: 1.6rem 2rem;
  flex-direction: column;
  overflow-y: auto;
  transition: all 300ms ease-in-out;

  &:hover{
    height: 100%;
  }
`


export const CardCharacterText = styled.p`
  font-size: 1.5rem;
`
