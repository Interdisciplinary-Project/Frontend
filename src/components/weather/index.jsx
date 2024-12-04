import { Cloud } from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';

function Weather() {
  return (
    <div
      onClick={useWeather}
      title="Ver previsão do tempo"
      className={`
      fixed right-[10px] rounded-md lg:top-1/2 lg:-translate-y-[73px] bg-social-gray p-2
      cursor-pointer hover:brightness-90 z-50 transition-all lg:inline-block
      md:top-1/2 md:-translate-y-[73px] md:bottom-auto -translate-y-1/4 bottom-[164px]
    `}>
      <Cloud className='text-social-white' />
    </div>
  );
}

export { Weather };