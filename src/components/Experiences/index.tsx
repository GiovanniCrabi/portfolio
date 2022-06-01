import { SectionTitle } from '../SectionTitle';
import ExperiencesItem from './ExperiencesItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiências" />

      <section>
        <ExperiencesItem
          year={2021}
          title="Dev Front-End"
          description="Experiencia com next etc"
        />
        <ExperiencesItem
          year={2021}
          title="Dev Front-End"
          description="Experiencia com next etc"
        />
        <ExperiencesItem
          year={2021}
          title="Dev Front-End"
          description="Experiencia com next etc"
        />
        <ExperiencesItem
          year={2021}
          title="Dev Front-End"
          description="Experiencia com next etc"
        />
      </section>
    </Container>
  );
}
