import React from 'react'
import { MoonIcon } from "../Icons";
import { func, string } from 'prop-types';
import styled from "styled-components"
import s from "../../styles/Icons.module.css"

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 0.5px solid ${({ theme }) => theme.toggleBorder};
  justify-content: ${({ theme }) => theme.toggleAlign};
  cursor: pointer;
  z-index: 10;
  }
  `;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button className={s.themeButton} onClick={toggleTheme} >
      <div className={`${s.lightThemeCircle} lightThemeCircle`}><MoonIcon /></div>
      <div className={`${s.darkThemeCircle} darkThemeCircle`} />
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default Toggle;