import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #D21F3C;
`;
export const Logo = styled.Image`
  align-self: center;
  margin-top: 20;
`;
export const TextInput = styled.TextInput`
  color: #FFF;
  font-size: 25px;
  width: 90%;
`;
export const ViewInput = styled.View`
  flex-direction: row;
  width: 100%;
  border-bottom-color: #FFF;
  border-bottom-width: 2px;
`;
export const ButtonGroup = styled.TouchableOpacity`
  background: #FFF;
  width: 40%;
  height: 50px;
  border-radius: 60px;
  align-self: center;
  margin-top: 10%;
  align-items: center;

`;
 export const TextButton = styled.Text`
  color: ${props => props.color};
  margin-top: ${props => props.top};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: ${props => props.decoration};
`; 

