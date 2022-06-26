import RocketseatLogo from "./Rocketseat-logo";

export function Footer() {
  return (
    <footer className="w-full px-6 py-8 lg:py-6 flex flex-col gap-4 lg:gap-4 lg:flex-row items-center justify-center lg:justify-start text-gray-100 bg-gray-700">
      <RocketseatLogo />
      <p>Rocketseat&trade; - All rights reserved</p>
      <p className="lg:ml-auto">Privacy policy</p>
    </footer>
  );
}
