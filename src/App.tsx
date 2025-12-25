import { Container } from './components/Container';
import { Heading } from './components/Headind';
import { Logo } from './components/Logo';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
