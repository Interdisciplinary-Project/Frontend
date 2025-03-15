import { useState } from 'react';
import { SectionTitle } from '../../../components/section-title';
import { imagesList } from '../../../helpers/gallery-images-list.js';
import { PageTransition } from '../../../components/page-transition/index.jsx';
import { useTranslation } from 'react-i18next';


const layoutClasses = [
  'lg:col-span-8 lg:row-span-2 md:col-span-6',
  'lg:col-span-4 md:col-span-3',
  'lg:col-span-4 md:col-span-3',
  'lg:col-span-4 md:col-span-6',
  'lg:col-span-4 md:col-span-3',
  'lg:col-span-4 md:col-span-3',
  'lg:col-span-8 lg:row-span-2 md:col-span-6',
  'lg:col-span-4 md:col-span-3',
  'lg:col-span-4 md:col-span-3',
  'lg:col-span-12 md:col-span-6'
];

function Gallery() {

  const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const partialImagesList = imagesList.filter(image => image.id <= layoutClasses.length * page);
  const partialImageListHasTheSameSize = partialImagesList.length === imagesList.length;

  return (
    <PageTransition>
      <section className="pt-12 pb-20 dark:bg-dark-social-background dark:text-dark-social-white">
        <div
          className="lg:max-w-[1024px] lg:mx-auto
                     md:max-w-[620px] md:mx-auto
                     max-w-[320px] mx-auto"
        >
          <SectionTitle
            className="lg:pt-12 lg:pb-14
                       md:pt-0 md:pb-14
                       pt-0 pb-14"
            content={t('galery.title')}
          />
          <div
            className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center
                       md:grid md:grid-cols-6 md:gap-8 md:items-center
                       grid grid-cols-1 gap-8 items-center">
            {partialImagesList.map((image, index) => (
              <div
                key={image.id}
                className={`${layoutClasses[index % layoutClasses.length]} cursor-pointer w-full h-full`}
              >
                <a
                  href={image.url}
                  target="_blank"
                  rel="follow noopener noreferrer"
                  title="Clique para abrir a imagem"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading='lazy'
                    className="w-full h-full object-cover shadow-default transition duration-500 hover:scale-105
                    dark:shadow-dark-social-white"
                  />
                </a>
              </div>
            ))}
          </div>
          {!partialImageListHasTheSameSize && (
            <div className="flex justify-center items-center pt-14">
              <button
                className="text-social-gray text-3xl transition duration-500 hover:brightness-75 hover:scale-105"
                id="loadMore"
                type="button"
                onClick={() => setPage(prev => prev + 1)}
              >
                {t('galery.carregar')}
              </button>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}

export { Gallery };
