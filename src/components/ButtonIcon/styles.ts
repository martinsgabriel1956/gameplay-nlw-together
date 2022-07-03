import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  `;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: ${theme.colors.line};
`;

export const DiscordIcon = styled(Image)`
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
`;

