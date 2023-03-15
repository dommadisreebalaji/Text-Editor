import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  TextContainer,
  ImageContainer,
  ImageContainerHeading,
  TextArea,
  TextImage,
  TextDisplayContainer,
  ButtonContainer,
  List,
  BoldButton,
  ItalicButton,
  UnderLineButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderLine: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state
    console.log(isBold)
    return (
      <AppContainer>
        <TextContainer>
          <ImageContainer>
            <ImageContainerHeading>Text Editor</ImageContainerHeading>
            <TextImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextDisplayContainer>
            <ButtonContainer>
              <List>
                <BoldButton
                  type="button"
                  onClick={this.onClickBold}
                  data-testid="bold"
                  bold={isBold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </List>
              <List>
                <ItalicButton
                  type="button"
                  onClick={this.onClickItalic}
                  data-testid="italic"
                  italic={isItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </List>
              <List>
                <UnderLineButton
                  type="button"
                  onClick={this.onClickUnderLine}
                  data-testid="underline"
                  underLine={isUnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </UnderLineButton>
              </List>
            </ButtonContainer>
            <TextArea
              rows="28"
              cols="50"
              bold={isBold}
              italic={isItalic}
              underLine={isUnderLine}
            />
          </TextDisplayContainer>
        </TextContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
