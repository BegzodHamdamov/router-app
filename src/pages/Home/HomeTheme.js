import styled from "styled-components";
const colors = {
    dark: "rgb(0, 15, 20)",
    light: "rgb(236, 234, 255)"
}

const HomeTheme = styled.div`
transition: 1s;
&.light{
    background-color: ${colors.light};
    color: ${colors.dark} !important;
    a{
        color: ${colors.dark} !important;
    }
}
&.dark{
    background-color: ${colors.dark};
    color: ${colors.light} !important;
    a{
        color: ${colors.light} !important;
    }
}
.task{
    display: flex;
  position: relative;
  border-radius: 20px;
  margin-bottom: 50px;
}
.HomeTheme  {
    color: white;
}Button{
    margin: 0;
    padding-top: 0;
    height: 60px;
    border-radius: 10px;
}
.p-3{
    margin: 0;
border-radius: 20px;
}

`;
export default HomeTheme;