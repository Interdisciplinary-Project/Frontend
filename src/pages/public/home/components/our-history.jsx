import { useRef, useState } from 'react';
import { SectionTitle } from '../../../../components/section-title';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const imagesData = [
  {
    src: '/gallery/imagem-1.jpg',
    title: 'Piquenique com as crianças',
    date: 'xx/mm/yyyy',
    text: (
      <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    )
  },
  {
    src: '/gallery/imagem-2.jpg',
    title: 'Eu não sei de nada',
    date: 'xx/mm/yyyy',
    text: (
      <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    )
  },
  {
    src: '/gallery/imagem-3.jpg',
    title: 'Escoteiros em atividade',
    date: 'xx/mm/yyyy',
    text: (
      <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    )
  },
  {
    src: '/gallery/imagem-4.jpg',
    title: 'Culpa do Alemão',
    date: 'xx/mm/yyyy',
    text: (
      <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    )
  },
  {
    src: '/gallery/imagem-5.jpg',
    title: 'Texto Ryan Bolado',
    date: 'xx/mm/yyyy',
    text: (
      <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    )
  },
  {
    src: '/gallery/imagem-6.jpg',
    title: 'Texto teste',
    date: 'xx/mm/yyyy',
    text: (
      <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    )
  },
  {
    src: '/gallery/imagem-7.jpg',
    title: 'Texto 4',
    date: 'xx/mm/yyyy',
    text: (
      <p className="pl-16 text-justify">
        is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    )
  },
];

function OurHistory() {
  const imageRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(imagesData[0]);

  function handleImageClick(imageData, e) {
    setSelectedImage(imageData);
    addOutlineOnSelectedImage(e);
  };

  function removeOutlineOnDeselectedImage() {
    imageRefs.current.forEach(image => {
      if (image) {
        image.classList.remove(
          'outline',
          'outline-social-brand',
          'outline-[2px]',
          'scale-105'
        );
      }
    });
  }

  function addOutlineOnSelectedImage(e) {
    removeOutlineOnDeselectedImage();
    e.target.classList.add(
      'outline',
      'outline-social-brand',
      'outline-[2px]',
      'scale-105'
    );
  }

  function generateImagesBoard() {
    return imagesData.map((imageData, index) => (
      <img
        key={`${index}-${imageData.text}-${imageData.title}-${imageData.src}`}
        className={`
          w-24 h-24 rounded-full cursor-pointer object-cover hover:scale-105
          transition duration-500
          ${index === 0 && 'outline outline-social-brand outline-[2px] scale-105'}
        `}
        title={imageData.date}
        aria-describedby={imageData.text}
        src={imageData.src}
        alt={`Imagem ${index + 1}`}
        onClick={e => handleImageClick(imageData, e)}
        draggable={false}
        ref={el => (imageRefs.current[index] = el)}
      />
    ));
  }

  return (
    <section className="bg-light-social-brand pt-12 pb-28">
      <div className="max-w-[1160px] mx-auto">
        <SectionTitle content="Nossa História" />
        <div className="pt-12 flex gap-20">
          {generateImagesBoard()}
        </div>
        <div className="flex pt-12">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[580px] h-[420px] rounded-md cursor-pointer object-cover shadow-lg"
              title={selectedImage.date}
              src={selectedImage.src}
              alt={selectedImage.title}
              aria-describedby={selectedImage.date}
              draggable={false}
            />
          </AnimatePresence>
          <div className="text-center w-full">
            <AnimatePresence mode="wait">
              <motion.h1
                key={selectedImage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="py-6 text-2xl font-semibold"
              >
                <span className="text-social-brand font-semibold text-2xl">{selectedImage.title}</span>
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {selectedImage.text}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-start items-center gap-4 px-16 pt-16">
              <p>
                <span className="text-social-brand font-semibold">Venha</span>{' '}
                fazer parte desta
                <span className="text-social-brand font-semibold"> história:</span>
              </p>
              <Link
                className={`
                  flex items-center bg-social-brand text-social-white
                  font-semibold py-1 px-4 rounded-md shadow-lg
                  hover:text-social-black hover:bg-transparent hover:border-social-brand
                  border transition-colors cursor-pointer
                `}
                type="button"
                to={'/autenticacao/cadastrar'}
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { OurHistory };
