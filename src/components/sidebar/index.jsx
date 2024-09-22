import logo from '../../../public/logo.svg';
import { AnimatedLink } from '../header/components/AnimatedLink';
import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function Openbar() {
    setIsOpen(!isOpen);
    document.querySelector('.sidebar').classList.toggle('translate-x-full');
  };
  
  return (
    <aside className="hidden">
      <div
        className={`sidebar fixed top-0 bottom-0 right-0 p-2 w-2/3 text-center bg-light-social-brand 
                    z-10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="text-lg">
          <div className="p-2 mt-1 flex justify-center items-center">
            <img
              className="w-20 h-20"
              src={logo}
              alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
            />
          </div>
          <nav className="flex justify-center items-center">
            <ul className="flex flex-col gap-4 pt-8">
              <li>
                <AnimatedLink
                  text={'Home'}
                  to="/"
                />
              </li>
              <li>
                <AnimatedLink
                  to="/ramos"
                  text={'Ramos'}
                />
              </li>
              <li>
                <AnimatedLink
                  to="/galeria"
                  text={'Galeria'}
                />
              </li>
              <li>
                <AnimatedLink
                  to="/autenticacao/login"
                  text={'Login'}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="absolute left-4 top-16">
        <span 
          className="cursor-pointer transition-all ease-in-out duration-200
                     text-4xl"
          onClick={Openbar}>
          <i
            className={`fa-solid fa-xmark absolute transition-all duration-500
                        ease-in-out transform ${isOpen ? 'opacity-100 scale-100 delay-200' : 
                        'opacity-0 scale-50'}`}></i>
          <i
            className={`fa-solid fa-bars absolute transition-all duration-500 
                        ease-in-out transform ${isOpen ? 'opacity-0 scale-50' : 
                        'opacity-100 scale-100 delay-200'}`}></i>
        </span>
      </div>
    </aside>
  );
}
  
  
  

export { Sidebar };