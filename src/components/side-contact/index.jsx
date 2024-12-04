import { SocialIcon } from 'react-social-icons';

// eslint-disable-next-line max-len
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=%2B5516991385661&data=ARAS4x0OdBvanOLmwpq6EgbrzRhqqGzQavOL0LJAHmqkGe4Y2HW0jerhFAI69cjU1AcYYdUi0gxhIzbT5elFJEe3IhkcmeFv5R4fAOUk5e-n-0iwKVs9sD4NlsChPH1pDzwSUw9qrzFJcJD66C-DsmzQ-w&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1JWOTuaIobAOSxqwj705nb6VK2li9ahZ0RdW1hkecmsJSTrF7yTIwmgdA';
const INSTAGRAM_URL = 'https://instagram.com/grupoescoteiroterradasaudade?igshid=YTQwZjQ0Nml0OA==';

function SideContact() {
  return (
    <ul
      className="fixed left-2 md:top-1/2 lg:-translate-y-1 md:-translate-y-1/3 flex flex-col gap-y-2
                 bottom-0 md:bottom-auto -translate-y-[105px]">
      <li
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <SocialIcon
          href={WHATSAPP_URL}
          rel="follow external noopener noreferrer"
          target="_blank"
          url="https://whatsapp.com"
          className="hover:brightness-90 transition duration-200"
        />
      </li>
      <li
        aria-label="Instagram"
        title="Instagram"
      >
        <SocialIcon
          href={INSTAGRAM_URL}
          rel="follow external noopener noreferrer"
          target="_blank"
          url="https://instagram.com"
          className="hover:brightness-90 transition duration-200"
        />
      </li>
    </ul>
  );
}

export { SideContact };
