import React from 'react'
import { useHome } from '../../context/HomeContext'

type Props = {}

const Home = (props: Props) => {
  const { text } = useHome()
  return (
    <div>{text} || ---text context</div>
  )
}

export default Home
