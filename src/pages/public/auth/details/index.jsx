import { SectionTitle } from '../../../../components/section-title';
import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';
import { Container } from '../../../../components/container';
import { Sexo } from './components/sexo';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function UserDetails() {
  const [isActive, setIsActive] = useState(true);
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [isScoutActive, setIsScoutActive] = useState(true);

  const toggleStatus = () => {
    setIsActive(!isActive);
    setIsScoutActive(!isActive);
    if (isActive) {
      setIsVolunteer(false);
    }
  };

  const toggleScoutStatus = () => {
    setIsScoutActive(!isScoutActive);
  };

  const ramos = [
    { id: 1, nome: 'Lobinho' },
    { id: 2, nome: 'Junior' }
  ];
  
  const estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
  ];

  const [ramoSelecionadoAdulto, setRamoSelecionadoAdulto] = useState('');
  const [ramoSelecionadoEscoteiro, setRamoSelecionadoEscoteiro] = useState('');
  const [estadoSelecionadoAdulto, setEstadoSelecionadoAdulto] = useState('');
  const [estadoSelecionadoEscoteiro, setEstadoSelecionadoEscoteiro] = useState('');


  const handleSelectChangeRamoAdulto = (eventRamo) => {
    setRamoSelecionadoAdulto(eventRamo.target.value);
  };

  const handleSelectChangeRamoEscoteiro = (eventRamo) => {
    setRamoSelecionadoEscoteiro(eventRamo.target.value);
  };

  const handleSelectChangeAdulto = (event) => {
    setEstadoSelecionadoAdulto(event.target.value);
  };

  const handleSelectChangeEscoteiro = (event) => {
    setEstadoSelecionadoEscoteiro(event.target.value);
  };

  return (
    <section className="pt-12 pb-20">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex items-center justify-between">
          <SectionTitle
            className="pt-12 pb-14 whitespace-nowrap"
            content="Dados Detalhados"
          />
          <Button  
            variant={isActive ? 'green' : 'red'}
            content={isActive ? 'Ativo' : 'Inativo'}
            onClick={toggleStatus}
          />
        </div>
        <Container>
          <div className="py-20 px-16">
            <section>
              <h2 className="text-lg font-semibold mb-4">Informações pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-social-black">Nome completo</label>
                  <input 
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md" 
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Data de nascimento</label>
                  <input 
                    type="date" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md"
                    disabled 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">CPF</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray appearance-none
                               font-semibold brightness-125 rounded-md" 
                    disabled
                  />
                </div>
                <div>
                  <Sexo />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Telefone</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray appearance-none
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">E-mail</label>
                  <input 
                    type="email" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md" 
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">CEP</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Rua</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Bairro</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md" 
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Cidade</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Estado</label>
                  <div className="mt-1 relative">
                    <select
                      className="block w-full px-3 py-2 bg-social-white border border-social-gray
                                 rounded-md appearance-none"
                      id="estados"
                      disabled
                      value={estadoSelecionadoAdulto}
                      onChange={handleSelectChangeAdulto}
                    >
                      {estados.map((estado) => 
                        <option 
                          key={estado.sigla} 
                          value={estado.sigla}
                        >
                          {estado.nome}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Número da residência</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               appearance-none font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-5 w-5 rounded text-social-brand border-social-gray focus:ring-social-brand" 
                    checked={isVolunteer} 
                    onChange={(e) => setIsVolunteer(e.target.checked)}
                    disabled={!isActive}
                  />
                  <span className="ml-2 text-social-black">Voluntário</span>
                </label>
              </div>
              <AnimatePresence>
                {isVolunteer && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-social-black mb-1">Ramo</label>
                    <select
                      className="block px-20 py-2 bg-white border border-social-gray rounded-md shadow-sm 
                                 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      value={ramoSelecionadoAdulto}
                      onChange={handleSelectChangeRamoAdulto}
                    >
                      {ramos.map((ramo) => (
                        <option key={ramo.id} value={ramo.id}>
                          {ramo.nome}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
            <section className='py-16'>
              <h2 className="text-lg font-semibold mb-4">Informações do escoteiro</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-social-black">Nome completo</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md" 
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Data de nascimento</label>
                  <input 
                    type="date" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md"
                    disabled 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">CPF</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray appearance-none
                               font-semibold brightness-125 rounded-md" 
                    disabled
                  />
                </div>
                <div>
                  <Sexo />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">E-mail</label>
                  <input 
                    type="email" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md" 
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">CEP</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Rua</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Bairro</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Cidade</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Estado</label>
                  <div className="mt-1 relative">
                    <select
                      className="block w-full px-3 py-2 bg-social-white border border-social-gray
                                 rounded-md appearance-none"
                      id="estados"
                      disabled
                      value={estadoSelecionadoEscoteiro}
                      onChange={handleSelectChangeEscoteiro}
                    >
                      {estados.map((estado) => 
                        <option 
                          key={estado.sigla} 
                          value={estado.sigla}
                        >
                          {estado.nome}
                        </option>
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Número da residência</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full px-3 py-2 bg-social-gray 
                               font-semibold brightness-125 rounded-md"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-social-black">Status</label>
                  <button
                    type="button"
                    className={`mt-1 flex justify-center items-center w-full px-3 py-2 
                    font-semibold transition duration-500 hover:brightness-95 rounded-md ${
                    isScoutActive ? 'bg-social-brand text-social-white' : 'bg-social-red text-social-white'
                  }`}
                    onClick={toggleScoutStatus}
                    disabled={!isActive}
                  >
                    {isScoutActive ? 'Ativo' : 'Inativo'}
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-social-black">Ramo</label>
                <div className="mt-1 relative">
                  <select
                    className="block w-60 px-3 py-2 bg-gray-100 
                               border border-gray-300 rounded-md"
                    id="ramos"
                    value={ramoSelecionadoEscoteiro}
                    onChange={handleSelectChangeRamoEscoteiro}
                    disabled={!isActive || !isScoutActive}
                  >
                    {ramos.map((ramo) => 
                      <option 
                        key={ramo.id} 
                        value={ramo.id}
                      >
                        {ramo.nome}
                      </option>
                    )}
                  </select>
                </div>
              </div>
            </section>
            <div className="flex justify-end items-center gap-x-4">
              <Link className="text-social-red transition duration-500 hover:brightness-50">
                Voltar
              </Link>
              <Button 
                variant="green"
                content="Atualizar"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export { UserDetails };