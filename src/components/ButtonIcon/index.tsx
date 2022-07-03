import { Container, IconWrapper, DiscordIcon, Title } from './styles';

import discordImg from '../../assets/discord.png'
import { ButtonIconProps } from './types';

export const ButtonIcon: React.FC<ButtonIconProps> = ({ title, ...props }) => {
  return (
    <Container
      {...props}
    >
      <IconWrapper>
        <DiscordIcon
          source={discordImg}
        />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  )
}