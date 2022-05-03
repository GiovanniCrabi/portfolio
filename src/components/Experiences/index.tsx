import { SectionTitle } from "../SectionTitle";
import ExperiencesItem from "./ExperiencesItem";
import { Container } from "./styles";

export function Experiences() {
  return (
    <Container>
        <SectionTitle title='02 Anos' description='de experiências' />

        <section>
          <ExperiencesItem />
          <ExperiencesItem />
          <ExperiencesItem />
          <ExperiencesItem />
        </section>

    </Container>
    
        
    
  )
}