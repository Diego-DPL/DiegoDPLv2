// src/Pages/Home/Home.jsx
import Logo from '../Logo/Logo';

function Header() {

    return (
        <div className="flex justify-center items-center gap-[15%] h-[8vh] top-0 z-20"  >
            <Logo  />
            {/* <nav className="p-6">
                <ul className="flex space-x-20">
                    <li className="text-color6 hover:text-color4">Home</li>
                    <li className="text-color6 hover:text-color4">About</li>
                    <li className="text-color6 hover:text-color4">Music</li>
                    <li className="text-color6 hover:text-color4">Events</li>
                    <li className="text-color6 hover:text-color4">Gallery</li>
                    <li className="text-color6 hover:text-color4">Contact</li>
                </ul>
            </nav> */}
      </div>
    );
  }
  
  export default Header;