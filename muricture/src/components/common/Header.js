import Link from "next/link";
import DarkModeToggleButton from "../home/dark-mode-toggle-button";

const Header = () =>{
  return (
    <>
      <header className="shadow-lg border-b border-gray-200 text-gray-600 body-font fixed w-full z-50 bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex justify-center items-center">
            <a href="/">
              <img className="h-4 w-auto" src="./img/Muricture.png" alt="logo" />
            </a>
          </div>
          
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center md:flex-row text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              홈
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              소개
            </Link>
            <Link href="/service" className="mr-5 hover:text-gray-900">
              서비스
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              연락
            </Link>
          </nav>
          <DarkModeToggleButton/>
          {/* 다크모드 버튼 */}
        </div>
      </header>
    </>
  );
}

export default Header;