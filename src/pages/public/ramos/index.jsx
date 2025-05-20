import lobinho from '/lobinho.svg';
import { SectionTitle } from '../../../components/section-title';
import flordeliz from '/flor-de-liz.svg';
import { useEffect, useState } from 'react';
import { Modal } from '../../../components/modal';
import { PageTransition } from '../../../components/page-transition';
import { useTranslation } from 'react-i18next';
import { httpClient } from '../../../infra/httpClient';
import { toast } from 'sonner';

function Ramos() {
  const [openLobinho, setOpenLobinho] = useState(false);
  const [ramos, setRamos] = useState([]);

  useEffect(() => {
    httpClient.get('/Branch')
      .then((ramos) => setRamos(ramos))
      .catch((e) => {
        toast.error('Houve um problema ao buscar as informações dos ramos.');
        console.error(e);
      });
  });

  const { t } = useTranslation();

  const [openJunior, setOpenJunior] = useState(false);

  const handleModalOpenLobinho = () => {
    setOpenLobinho(state => !state);
  };

  const handleModalOpenJunior = () => {
    setOpenJunior(state => !state);
  };

  useEffect(() => {
    const hasAnyOpenedModal = openJunior || openLobinho;
    if (hasAnyOpenedModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [openJunior, openLobinho]);

  return (
    <PageTransition>
      <section className="pt-12 pb-20 dark:bg-dark-social-background dark:text-dark-social-white">
        <div
          className="lg:max-w-[1024px] lg:mx-auto
                     md:max-w-[620px] md:mx-auto
                     max-w-[320px] mx-auto">
          <SectionTitle
            className="lg:pt-12 lg:pb-14 lg:text-left
                       md:pt-12 md:pb-14 md:text-left
                       pt-4 pb-8 text-left"
            content={t('ramos.title')}
          />
          <div
            className="lg:flex lg:flex-row lg:gap-x-16
                       md:flex md:gap-x-32
                       flex flex-col text-left gap-y-10"
          >
            <div
              className="lg:flex lg:justify-start
                         md:flex md:justify-center
                         flex justify-center"
            >
              <img
                className="lg:w-[4000px] lg:h-[240px] lg:rounded-full lg:object-cover lg:shadow-default
                           md:w-[240px] md:h-[240px] md:rounded-full md:object-cover md:shadow-default
                           w-[180px] h-[180px] rounded-full object-cover shadow-default dark:shadow-dark-social-white"
                src={lobinho}
              />
            </div>
            <p
              className="lg:text-2xl
                         md:text-xl
                         text-lg"
            >
              <span className="text-social-brand pr-2">
                {t('ramos.spanLobinho')}
              </span>
              {
                ramos.length > 0 ? ramos[0].description : t('ramos.contentLobinho')
              }
              <button
                onClick={handleModalOpenLobinho}
                className="text-social-brand flex py-10 transition duration-500 hover:brightness-50"
                type="button"
              >
                {t('ramos.buttomVer')}
              </button>
            </p>
          </div>
          <div
            className="lg:flex lg:flex-row lg:gap-x-16
                       md:flex md:gap-x-32
                       flex flex-col text-left gap-y-10"
          >
            <div
              className="lg:hidden
                         md:flex md:justify-center
                         flex justify-center"
            >
              <img
                className="lg:w-[1800px] lg:h-[260px] lg:rounded-full lg:object-cover lg:shadow-default
                         md:w-[240px] md:h-[240px] md:rounded-full md:object-cover md:shadow-default
                         w-[180px] h-[180px] rounded-full object-cover shadow-default"
                src={flordeliz}
              />
            </div>
            <p
              className="lg:text-2xl
                         md:text-xl
                         text-lg"
            >
              <span className="text-social-brand pr-2">
                {t('ramos.spanJunior')}
              </span>
              {
                ramos.length > 0 ? ramos[1].description : t('ramos.contentJunior')
              }
              <button
                onClick={handleModalOpenJunior}
                className="text-social-brand flex py-10 transition duration-500 hover:brightness-50"
                type="button">
                {t('ramos.secondButtomVer')}
              </button>
            </p>
            <div
              className="lg:flex lg:justify-start
                         md:hidden
                         hidden"
            >
              <img
                className="lg:w-[1800px] lg:h-[260px] lg:rounded-full lg:object-cover lg:shadow-default
                         md:w-[240px] md:h-[240px] md:rounded-full md:object-cover md:shadow-default
                         w-[180px] h-[180px] rounded-full object-cover shadow-default dark:shadow-dark-social-white"
                src={flordeliz}
              />
            </div>
          </div>
        </div >
        <Modal
          open={openLobinho}
          onClose={handleModalOpenLobinho}
        >
          <div className="flex items-center gap-4">
            <img
              className="w-[140px] h-[140px]"
              src={lobinho}
            />
            <h2 className="text-xl font-bold text-social-brand">{t('ramos.h2Lobinho')}</h2>
          </div>
          <p
            className="lg:hidden
                       md:hidden
                       inline-block text-lg"
          >
            {t('ramos.modalLobinho')}
          </p>
          <p
            className="lg:inline-block lg:text-2xl
                       md:inline-block md:text-xl
                       hidden"
          >
            {t('ramos.secondModalLobinho')}
          </p>
          <div className="text-end py-6 px-12">
            <button
              onClick={handleModalOpenLobinho}
              className="mt-4 text-social-red transition duration-500 hover:brightness-50"
            >
              {t('ramos.secondButtomFechar')}
            </button>
          </div>
        </Modal>
        <Modal
          open={openJunior}
          onClose={handleModalOpenJunior}
        >
          <div className="flex items-center gap-4">
            <img
              className="w-[140px] h-[140px]"
              src={flordeliz}
            />
            <h2 className="text-xl font-bold text-social-brand">{t('ramos.h2Junior')}</h2>
          </div>
          <p
            className="lg:hidden
                       md:hidden
                       inline-block text-lg"
          >
            {t('ramos.modalJunior')}
          </p>
          <p
            className="lg:inline-block lg:text-2xl
                       md:inline-block md:text-xl
                       hidden"
          >
            {t('ramos.secondModalJunior')}
          </p>
          <div className="text-end py-6 px-12">
            <button
              onClick={handleModalOpenJunior}
              className="mt-4 text-social-red transition duration-500 hover:brightness-50"
            >
              {t('ramos.buttomFechar')}
            </button>
          </div>
        </Modal>
      </section>
    </PageTransition>
  );
}

export { Ramos };