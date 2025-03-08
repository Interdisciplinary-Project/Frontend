import { useEffect } from 'react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export function useOnlineStatus() {

  const { t } = useTranslation ();

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await fetch('https://api.ipify.org/?format=json');
        toast.getHistory().forEach(element => toast.dismiss(element.id));
        toast.success(t('useOnline.toastSuccess'));
      } catch {
        toast.error(t('useOnline.toastError'), {
          action: {
            label: t('useOnline.label'),
            onClick: checkConnection,
          },
        });
      }
    };

    const handleOnline = () => {
      toast.success(t('useOnline.toastSuccess'));
    };

    const handleOffline = () => {
      toast.info(t('useOnline.toastInfo'), {
        action: {
          label: t('useOnline.label'),
          onClick: checkConnection,
        },
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [t]);
}