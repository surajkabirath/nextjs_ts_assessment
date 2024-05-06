import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6  absolute w-full z-10 ">
      <nav className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="header_logo">
         <span className='font-bold cursor-pointer  '>Logo</span>
        </div>
        <div className="header_links">
          <ul className="flex items-center gap-4">
           
            <li>
              <Link href="#" className="text-white font-bold text-lg">
                Token
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-bold text-lg">
                AI Revenue
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-bold text-lg">
                AI Launch Pad
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white font-bold text-lg border-2 border-white px-4 py-2 rounded-md ml-2"
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;