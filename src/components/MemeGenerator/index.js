import {Component} from 'react'
import {
  Container,
  Form,
  Heading,
  Label,
  Input,
  Select,
  Button,
  ContainerTwo,
  MemeContainer,
  MemeParagraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    memeImgUrl: '',
    memeTopText: '',
    memeBottomText: '',
    memeFontSize: '',
  }

  onGetImgUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onGetTopText = event => {
    this.setState({topText: event.target.value})
  }

  onGetBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onGetFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onGetFormDetails = event => {
    event.preventDefault()
    const {imgUrl, topText, bottomText, fontSize} = this.state
    this.setState({
      memeImgUrl: imgUrl,
      memeTopText: topText,
      memeBottomText: bottomText,
      memeFontSize: fontSize,
    })
  }

  onGetFormLayout = () => {
    const {imgUrl, topText, bottomText, fontSize} = this.state
    return (
      <Form onSubmit={this.onGetFormDetails}>
        <Label htmlFor="img-url">Image URL</Label>
        <br />
        <Input
          id="img-url"
          placeholder="Enter the image URL"
          value={imgUrl}
          onChange={this.onGetImgUrl}
        />
        <br />
        <Label htmlFor="top-text">Top Text</Label>
        <br />
        <Input
          id="top-text"
          placeholder="Enter the Top Text"
          value={topText}
          onChange={this.onGetTopText}
        />
        <br />
        <Label htmlFor="bottom-text">Bottom Text</Label>
        <br />
        <Input
          id="bottom-text"
          placeholder="Enter the Bottom Text"
          value={bottomText}
          onChange={this.onGetBottomText}
        />
        <br />
        <Label htmlFor="font-size">Font Size</Label>
        <br />
        <Select id="font-size" onChange={this.onGetFontSize} value={fontSize}>
          {fontSizesOptionsList.map(eachItem => (
            <option key={eachItem.optionId} value={eachItem.optionId}>
              {eachItem.displayText}
            </option>
          ))}
        </Select>
        <br />
        <Button type="submit">Generate</Button>
      </Form>
    )
  }

  onGetMeme = () => {
    const {memeImgUrl, memeTopText, memeBottomText, memeFontSize} = this.state
    return (
      <MemeContainer data-testid="meme" img={memeImgUrl}>
        <MemeParagraph fontSize={memeFontSize}>{memeTopText}</MemeParagraph>
        <MemeParagraph fontSize={memeFontSize}>{memeBottomText}</MemeParagraph>
      </MemeContainer>
    )
  }

  render() {
    return (
      <Container padding>
        <Heading>Meme Generator</Heading>
        <ContainerTwo>
          {this.onGetFormLayout()}
          {this.onGetMeme()}
        </ContainerTwo>
      </Container>
    )
  }
}

export default MemeGenerator
