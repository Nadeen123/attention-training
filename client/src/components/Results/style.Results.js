import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.h3`
  font-size: 28px;
  margin-bottom: 8px;
  margin-top: 32px;
`

const TypeContainer = styled.div`
  width: 90%;
  max-width: 800px;
  min-width: 275px;
  hyphens: auto;
  margin: 0 auto;
`

const Img = styled.img`
  width: 328px;
  @media only screen and (min-width: 600px) {
    width: 450px;
  }
`

const Type = styled.h4`
  font-size: 21px;
  text-shadow: 0px 4px 13px #00000040;
`

const Description = styled.p`
  font-size: 19px;
  opacity: 0.8;
`

export { Container, Header, TypeContainer, Img, Type, Description }
