import styled from 'styled-components'

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
`

export const ImageElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh
  margin-left: 50px;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-height: 50vh;
  min-width: 235px;
  margin-left: 30px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
`
export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 2px;
`
export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  color: white;
  padding-left: 0px;
  margin-left: 10px;
`
export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`