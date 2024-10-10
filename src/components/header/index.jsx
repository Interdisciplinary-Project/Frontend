import logo from '/logo.svg';
import avatar from '/avatar.png';
import { AnimatedLink } from './components/AnimatedLink';
import { Dropdown } from '../dropdown';
import { getAuth } from 'firebase/auth';
import { DropdownItem } from './components/dropdownItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilePenLine, LogOut, Settings, ShieldAlert } from 'lucide-react';
import { signOutAsync } from '../../services/firebase/auth';
import { toast } from 'sonner';

function Header() {

  const { currentUser } = getAuth();
  const [ isOpen, setIsOpen ] = useState(false);

  const navigate = useNavigate();
  
  async function logout() {
    try {
      await signOutAsync();
      toast.success('Usuário deslogado com sucesso!');
      navigate('/');
    } catch {
      toast.error('Erro ao deslogar o usuário!');
    }
  }
  
  return (
    <header className="w-full bg-light-social-brand">
      <div className="max-w-[1160px] mx-auto py-7 flex justify-between items-center">
        <figure
          className="flex gap-4 items-center cursor-pointer"
          title="Voltar à home"
          aria-label="Voltar à página inicial do Grupo Escoteiro Terra Da Saudade"
        >
          <img
            className="w-24 h-24"
            src={logo}
            alt="Árvore com um machado cravado no meio dela, diversos galhos e folhas."
          />
          <figcaption className="text-left max-w-44">
            Grupo <strong className="text-social-brand">Escoteiro</strong> Terra Da Saudade - 05/SP
          </figcaption>
        </figure>
        <nav>
          <ul className="flex items-center gap-4">
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
            <li className="relative">
              {currentUser ? (
                <>
                  <div className="flex justify-center">
                    <img 
                      className="w-12 h-12 rounded-full object-cover cursor-pointer transition 
                                 duration-500 hover:brightness-150"
                      src={avatar}
                      alt="Profile"
                      onClick={() => setIsOpen(prev => !prev)}
                    />
                  </div>
                  <div className="absolute right-0 transform mt-2">
                    <Dropdown
                      itemsList={[
                        {
                          id: 1,
                          trigger: () => navigate('/configuracao'),
                          component: <DropdownItem 
                            text="Configurações" 
                            edit="border-b border-social-gray pb-2"
                            icon={<Settings />}
                          />
                        },
                        {
                          id: 2,
                          trigger: () => navigate('/details'),
                          component: <DropdownItem 
                            text="Meus Dados" 
                            edit=""
                            icon={<FilePenLine />}
                          />
                        },
                        {
                          id: 3,
                          trigger: () => navigate('/ramos'),
                          component: <DropdownItem
                            text="Privacidade" 
                            edit=""
                            icon={<ShieldAlert />}
                          />
                        },
                        {
                          id: 4,
                          trigger: async () => await logout(),
                          component: <DropdownItem 
                            text="Logout" 
                            edit="text-social-red transition duration-500 hover:text-social-brand"
                            icon={<LogOut />}
                          />
                        },
                      ]}
                      visible={isOpen}
                    />
                  </div>
                </>
              ) : (
                <AnimatedLink
                  to="/autenticacao/login"
                  text="Login"
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
