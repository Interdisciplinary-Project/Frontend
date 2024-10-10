import { useState } from 'react';

function Sexo() {

  const tipoSexo = [
    { sigla: 'M', nome: 'Masculino' },
    { sigla: 'F', nome: 'Feminino' }
  ];

  const [sexoSelecionado, setSexoSelecionado] = useState(''); 

  const handleSelectChangeSexo = (eventSexo) => {
    setSexoSelecionado(eventSexo.target.value);
  };

  return (
    <>
      <label className="block text-sm font-medium text-social-black">Sexo</label>
      <div className="mt-1 relative"> 
        <select
          className="block w-full px-3 py-2 bg-gray-100 
                                 border border-gray-300 rounded-md appearance-none"
          id="sexo"
          value={sexoSelecionado}
          disabled
          onChange={handleSelectChangeSexo}
        >
          {tipoSexo.map((sexo) => 
            <option 
              key={sexo.sigla} 
              value={sexo.sigla}
            >
              {sexo.nome}
            </option>
          )}
        </select>
      </div>
    </>
  );
}

export { Sexo };