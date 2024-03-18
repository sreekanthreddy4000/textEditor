import React, {Component} from 'react'
import {Container, ButtonsList}
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  handleBoldClick = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  handleItalicClick = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  handleUnderlineClick = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <Container>
        <h1>Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <ButtonsList>
          <li>
            <Button
              isActive={isBold}
              onClick={this.handleBoldClick}
              data-testid="bold"
            >
              <VscBold />
            </Button>
          </li>
          <li>
            <Button
              isActive={isItalic}
              onClick={this.handleItalicClick}
              data-testid="italic"
            >
              <GoItalic />
            </Button>
          </li>
          <li>
            <Button
              isActive={isUnderline}
              onClick={this.handleUnderlineClick}
              data-testid="underline"
            >
              <AiOutlineUnderline />
            </Button>
          </li>
        </ButtonsList>
        <TextArea
          style={{
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            textDecoration: isUnderline ? 'underline' : 'none',
          }}
        />
      </Container>
    )
  }
}

export default TextEditor
