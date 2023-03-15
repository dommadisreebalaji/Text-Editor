import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  padding: 10px;
  height: 70vh;
  width: 50vw;
`

export const ImageContainer = styled.div`
  width: 50%;
`
export const ImageContainerHeading = styled.h1`
  text-align: center;
  font-family: Roboto;
  font-weight: 500;
  color: #ffffff;
`

export const TextImage = styled.img`
  width: 80%;
  margin-top: 50px;
  margin-left: 20px;
  height: 60%;
`

export const TextDisplayContainer = styled.div`
  background-color: #25262c;
  padding-top: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const BoldButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
  font-size: 18px;
`

export const ItalicButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
  font-size: 18px;
`

export const UnderLineButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.underLine ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
  font-size: 18px;
`

export const ButtonContainer = styled.ul`
  display: flex;
  list-style-type: none;
`

export const List = styled.li``

export const TextArea = styled.textarea`
  background-color: transparent;
  padding: 10px;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: Roboto;
  font-weight: 300;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underLine ? 'underline' : 'normal')};
`
