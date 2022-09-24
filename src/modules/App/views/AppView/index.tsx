import React from 'react'
import * as S from './styles'

interface IApp  {
  children: React.ReactNode
}

const App: React.FC<IApp> = ({children}) => {
  return (
    <S.Container>{children}</S.Container>
  )
}

export default App
