import { Container, Illustration, Content, Title, SubTitle } from './styles';

import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Illustration 
        source={illustrationImg}
        resizeMode="stretch"
      />
      <Content>
        <Title>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubTitle>
        <ButtonIcon 
          title='Entrar com Discord' 
          activeOpacity={.7}
        />
      </Content>
    </Container>
  );
}