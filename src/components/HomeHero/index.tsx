/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';

import photo from '../../assets/images/photo.png';

function HomeHero() {
  return (
    <Container>
      <img src={photo} alt='photo' />

      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>My name is Giovanni Crabi</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className='comment'>//Apresentação</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Title: <span className='blue'>majoring in computer science,</span>
            </div>

            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className='purple'>Cargo</span> {'\u007B'}
            <div className='left'>
              Função: <span className='blue'>Front-End Developer,</span>
            </div>
            {'\u007D'}
          </CodeItem>

          </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
