import { ItemContainer } from './styles';

interface ExperiencesItemProps {
  year: number;
  title: string;
  description: string;
}

export default function ExperiencesItem({
  year,
  title,
  description
}: ExperiencesItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
