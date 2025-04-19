import PropTypes from "prop-types";
import Title from "./styles";

function DefaultTitle({ children, theme, ...props }) {
  //spread operator -> ... Todo o resto

  return (
    
    <Title {...props} theme={theme}>
      Cadastrar Usuários
      {children} </Title>
     ); 
   
}

DefaultTitle.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};
export default DefaultTitle;
