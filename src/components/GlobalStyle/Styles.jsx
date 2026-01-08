import { Global, css } from "@emotion/react";

const estilos = css`
  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Styles = () => {
  return <Global styles={estilos} />;
};
