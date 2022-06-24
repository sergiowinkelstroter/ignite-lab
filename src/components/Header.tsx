import { Logo } from "./Logo";
import { HamburgerButton } from "./Burguer-button";

interface HeaderProps {
  isMenuOpen: boolean;
  handleOpenMenu: () => void;
}

export function Header({ isMenuOpen, handleOpenMenu }: HeaderProps) {
  return (
    <header className="w-[100vw] 2xl-[1248px] flex items-center justify-between md:justify-center py-[1.45rem] px-4 bg-gray-600 border-b border-gray-400">
      <Logo />
      <HamburgerButton
        className="text-gray-100 md:hidden"
        onClick={handleOpenMenu}
        isOpen={isMenuOpen}
      />
    </header>
  );
}
