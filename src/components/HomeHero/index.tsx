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
              Name: <span className='blue'>Giovanni,</span> 
            </div>
            <div>
              Last Name: <span className='blue'>Crabi</span>
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
