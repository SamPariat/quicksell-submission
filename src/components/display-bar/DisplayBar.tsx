import {
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from 'lucide-react';
import { useState } from 'react';

import classes from './DisplayBar.module.css';
import SettingsMenu from './SettingsMenu';

export default function DisplayBar() {
  const [menuOpen, setMenuOpen] =
    useState<boolean>(false);

  return (
    <>
      <nav className={classes.main_display_nav}>
        <button
          className={classes.display_button}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <SlidersHorizontal size={12} />
          <span>Display</span>
          {menuOpen ? (
            <ChevronUp size={12} />
          ) : (
            <ChevronDown size={12} />
          )}
        </button>
      </nav>
      {menuOpen && <SettingsMenu />}
    </>
  );
}
