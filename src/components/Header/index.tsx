import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title='home' path='/' />
        <NavLink title='Projects' path='/projects' />
      </ul>
    </Container>
  );
}

export default Header;
