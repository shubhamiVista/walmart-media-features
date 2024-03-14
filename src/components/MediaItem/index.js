import React from 'react'
import styled from 'styled-components'

const MediaItem = (props) => {
  const { media } = props
  const { date, imageUrl, title, description } = media

  return (
    <MediaCon>
      <ImageCon url={imageUrl}>
        <p>{date}</p>
      </ImageCon>
      <ContentCon>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Read more</button>
      </ContentCon>
    </MediaCon>
  )
}

const MediaCon = styled.li`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-right: 20px;
  margin-bottom: 32px;
  flex-shrink: 0;
`

const ImageCon = styled.div`
  width: 100%;
  background-size: cover;
  background-image: url(${(props) => `${props.url}`});
  height: 225px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding: 6px 10px;
    font-weight: bold;
    background-color: #1472ce;
    border-bottom-right-radius: 4px;
    width: 40%;
  }
`
const ContentCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 10px 25px 5px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: absolute;
    bottom: 435px;
  }
  p {
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    margin-top: 1.2rem;
  }
  button {
    padding: 10px 24px;
    background-color: #fff;
    color: #1472ce;
    border: 2px solid #1472ce;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 2rem;
  }
`

export default MediaItem
