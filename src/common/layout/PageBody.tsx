import styled from 'styled-components'
import { pageHeaderMargin } from '@/styles/layout-measurements'
import { ReactNode } from 'react'
import { Flex } from '@/styles/container'

const PageBody:React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <S.PageBody $column $center $marginTop={pageHeaderMargin}>
      {children}
    </S.PageBody>
  )
}

const S = {
  PageBody: styled(Flex)<{$marginTop: number}>`
    margin-top: ${(props) => props.$marginTop}rem;
    width: 100%;
    height: 100%;
  `
}
export default PageBody
