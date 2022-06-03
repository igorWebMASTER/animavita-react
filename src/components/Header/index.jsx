import React, { useEffect, useState } from 'react';
import { verifyLocalTheme } from 'utils/verify-local-theme';
import { Icon } from './Icon';
import * as S from './styled';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(verifyLocalTheme());

  useEffect(() => {
    const html = window.document.documentElement;

    const prevTheme = isDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);

    const nextTheme = isDarkMode ? "dark" : "light";
    html.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [isDarkMode])

  const handleDarkMode = () => setIsDarkMode(!isDarkMode);
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.HeaderTitle>
          ANIMAVITA
        </S.HeaderTitle>
        <S.ToggleCollorMode>
          <span onClick={handleDarkMode}><Icon isDarkMode={isDarkMode} /></span>
        </S.ToggleCollorMode>
      </S.HeaderContent>
      <S.LineBottom />
    </S.HeaderWrapper>
  );
}

