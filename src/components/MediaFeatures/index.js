import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import MediaItem from '../MediaItem'

const dummyDataList = [
  {
    id: uuidv4(),
    date: 'January 23, 2024',
    imageUrl: 'dummyImage.png',
    title: 'Pioneer',
    description:
      'Walmart Vriddhi empowers 50,000+ MSMEs to join retail supply chains through digital training and mentorship',
  },
  {
    id: uuidv4(),
    date: 'January 23, 2024',
    imageUrl: 'dummyImage.png',
    title: 'Pioneer',
    description:
      'Walmart Vriddhi empowers 50,000+ MSMEs to join retail supply chains through digital training and mentorship',
  },
  {
    id: uuidv4(),
    date: 'January 23, 2024',
    imageUrl: 'dummyImage.png',
    title: 'Pioneer',
    description:
      'Walmart Vriddhi empowers 50,000+ MSMEs to join retail supply chains through digital training and mentorship',
  },
  {
    id: uuidv4(),
    date: 'January 23, 2024',
    imageUrl: 'dummyImage.png',
    title: 'Pioneer',
    description:
      'Walmart Vriddhi empowers 50,000+ MSMEs to join retail supply chains through digital training and mentorship',
  },
  {
    id: uuidv4(),
    date: 'January 23, 2024',
    imageUrl: 'dummyImage.png',
    title: 'Pioneer',
    description:
      'Walmart Vriddhi empowers 50,000+ MSMEs to join retail supply chains through digital training and mentorship',
  },
  {
    id: uuidv4(),
    date: 'January 23, 2024',
    imageUrl: 'dummyImage.png',
    title: 'Pioneer',
    description:
      'Walmart Vriddhi empowers 50,000+ MSMEs to join retail supply chains through digital training and mentorship',
  },
]

const MediaFeatures = () => {
  return (
    <MainCon>
      <h1>MSME Media Features</h1>
      <img src="line.png" alt="line" />
      <ul>
        {dummyDataList.map((item) => (
          <MediaItem media={item} key={item.id} />
        ))}
      </ul>
    </MainCon>
  )
}

const MainCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  background-color: #eaeaea;
  h1 {
    font-weight: 600;
    font-size: 2rem;
    color: #3081d2;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1140px;
    margin-top: 50px;
  }
`

export default MediaFeatures
