import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/VIdeo";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header isMenuOpen={isMenuOpen} handleOpenMenu={toggleMenuOpen} />
      <main className="flex flex-1 ">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar isOpen={isMenuOpen} />
      </main>
    </div>
  );
}
