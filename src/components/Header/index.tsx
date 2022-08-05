import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { HederContainer } from './styles';

export function Header() {
  return (
    <HederContainer>
      <span>Logo</span>
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HederContainer>
  );
}
