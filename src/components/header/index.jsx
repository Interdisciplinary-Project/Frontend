import logo from '/logo.svg';
import avatar from '/avatar.png';
import { AnimatedLink } from './components/AnimatedLink';
import { Dropdown } from '../dropdown';
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Settings, ShieldAlert, Star, LockKeyhole } from 'lucide-react';
import { signOutAsync } from '../../services/firebase/auth';
import { toast } from 'sonner';
import { DropdownItem } from './components/DropdownItem';

function Header() {
  const { currentUser } = getAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRoutes = ['/configuracao', '/privacy', '/chat', '/admin'];

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  async function logout() {
    try {
      await signOutAsync();
      toast.success('Usuário deslogado com sucesso!');
      navigate('/');
    } catch {
      toast.error('Erro ao deslogar o usuário!');
    }
  }

  const dropdownItems = [
    { id: 1, to: '/configuracao', text: 'Configurações', icon: <Settings />, edit: 'border-b border-social-gray pb-2' },
    { id: 3, to: '/privacy', text: 'Privacidade', icon: <ShieldAlert /> },
    { id: 4, to: '/chat', text: 'Chat', icon: <Star /> },
    { id: 5, to: '/admin', text: 'Admin', icon: <LockKeyhole /> },
    {
      id: 6,
      to: '/logout',
      text: 'Logout',
      icon: <LogOut />,
      trigger: logout,
      edit: 'text-social-red transition duration-500 hover:text-social-brand'
    },
  ];

  function handleNavigate(to) {
    setActiveRoute(to);
    navigate(to);
  }

  return (
    <header className="w-full bg-light-social-brand">
      <div className="max-w-[1160px] mx-auto py-7 flex justify-between items-center">
        <figure
          className="flex gap-4 items-center cursor-pointer"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
          onClick={() => handleNavigate('/')}
        >
          <img className="w-24 h-24" src={logo} 
          alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas." />
          <figcaption className="text-left max-w-44">
            Grupo <strong className="text-social-brand">Escoteiro</strong> Terra Da Saudade - 05/SP
          </figcaption>
        </figure>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <AnimatedLink 
                text="Home"
                to="/" 
                isActive={activeRoute === '/'} 
                onClick={() => handleNavigate('/')} />
            </li>
            <li>
              <AnimatedLink 
                to="/ramos" 
                text="Ramos" 
                isActive={activeRoute === '/ramos'} 
                onClick={() => handleNavigate('/ramos')} />
            </li>
            <li>
              <AnimatedLink 
                to="/galeria" 
                text="Galeria" 
                isActive={activeRoute === '/galeria'} 
                onClick={() => handleNavigate('/galeria')} />
            </li>
            <li className="relative">
              {currentUser ? (
                <>
                  <div className="flex justify-center">
                    <img
                      className={`w-12 h-12 rounded-full object-cover cursor-pointer transition duration-500 
                        ${(isOpen || dropdownRoutes.includes(activeRoute)) ?
                           'brightness-150 border-2 border-green-600' : 'hover:brightness-150'}
                      `}
                      src={avatar}
                      alt="Profile"
                      onClick={() => setIsOpen(prev => !prev)}
                    />
                  </div>
                  <Dropdown
                    itemsList={dropdownItems.map(({ id, to, text, icon, edit, trigger }) => ({
                      id,
                      trigger: () => {
                        setIsOpen(false);
                        if (trigger) trigger();
                        else handleNavigate(to);
                      },
                      component: <DropdownItem to={to} text={text} icon={icon} edit={edit} />
                    }))}
                    visible={isOpen}
                    className="absolute right-0 transform mt-2"
                  />
                </>
              ) : (
                <AnimatedLink to="/autenticacao/login"
                  text="Login" 
                  isActive={activeRoute === '/autenticacao/login'} 
                  onClick={() => handleNavigate('/autenticacao/login')} />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
