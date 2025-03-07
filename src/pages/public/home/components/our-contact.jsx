import { SectionTitle } from '../../../../components/section-title';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactUsFormScheme } from '../../../../helpers/contact-us-validations-scheme.js';
import { useTranslation } from 'react-i18next';

function OurContact() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactUsFormScheme),
    defaultValues: {
      email: '',
      name: '',
      content: ''
    }
  });

  async function handleContactSubmit(data) {
    await fetch('https://localhost:7033/teste', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  return (
    <section
      className="bg-light-social-blue py-16 dark:bg-dark-social-background
      dark:text-dark-social-white">
      <div
        className="lg:max-w-[1024px] lg:mx-auto
                   md:max-w-[620px] md:mx-auto
                   max-w-[320px] mx-auto">
        <SectionTitle
          content={t('home.ourContact.title')}
          className="lg:mb-9 lg:text-left
                     md:mb-9 md:text-left
                     mb-9 text-left"
        />
        <form
          id="contact-form"
          className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 lg:px-0 lg:box-content lg:max-w-[1160px]
                     md:grid md:grid-cols-1 md:px-0 md:gap-y-6 md:box-content md:max-w-[620px]
                     grid grid-cols-1 px-0 gap-y-6 box-content max-w-[320px]"
          onSubmit={handleSubmit(handleContactSubmit)}
        >
          <Input
            {...register('name')}
            label={t('home.ourContact.firstLabel')}
            placeholder={t('home.ourContact.firstPlace')}
            errorMessage={errors.name?.message}
            name="name"
          />
          <div
            className="lg:hidden 
                       inline-block"
          >
            <Input
              {...register('email')}
              label={t('home.ourContact.secondLabel')}
              placeholder={t('home.ourContact.secondPlace')}
              errorMessage={errors.email?.message}
              name="email"
            />
          </div>
          <fieldset
            className="lg:flex lg:flex-col lg:row-span-2
                       flex flex-col row-span-2">
            <label className="font-medium text-[16px] text-social-black dark:text-dark-social-white">Mensagem</label>
            <textarea
              {...register('content')}
              className={`
                my-2 rounded py-5 px-4 h-full
                placeholder:font-regular placeholder:text-sm placeholder:text-social-gray
                dark:bg-dark-social-gray dark:text-dark-social-white
                resize-none focus:outline-none text-social-black
                ${!errors.content?.message
                  ? 'border border-solid border-social-gray text-social-gray'
                  : errors.content?.message
                    ? 'border border-solid border-social-red text-social-red'
                    : 'border border-solid border-social-brand text-social-brand'
                }
              `}
              placeholder={t('home.ourContact.thirdPlace')}
            />
            {errors.content && (
              <span className="text-social-red font-regular text-sm">
                {errors.content.message}
              </span>
            )}
          </fieldset>
          <div className="lg:inline-block hidden">
            <Input
              {...register('email')}
              label={t('home.ourContact.forthLabel')}
              placeholder={t('home.ourContact.forthPlace')}
              errorMessage={errors.email?.message}
              name="email"
            />
          </div>
        </form>
        <div
          className="lg:flex lg:flex-row lg:justify-end lg:w-full lg:gap-x-5 lg:mt-10
                     md:flex md:flex-row md:justify-between md:w-full md:gap-y-5 md:mt-10 
                     flex flex-col w-full gap-y-5 mt-10"
        >
          <Button
            form="contact-form"
            type="reset"
            content={t('home.ourContact.buttomCancel')}
          />
          <Button
            type="submit"
            form="contact-form"
            variant="green"
            content={t('home.ourContact.buttomEnviar')}
          />
        </div>
      </div>
    </section>
  );
}

export { OurContact };
