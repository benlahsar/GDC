import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      //...(await import(`../../messages/${locale}/common.json`)).default,
      // ...(await import(`../../messages/${locale}/navigation.json`)).default,
      ...(await import(`../messages/${locale}/home.json`)).default,
      ...(await import(`../messages/${locale}/agency.json`)).default,
      ...(await import(`../messages/${locale}/equipe.json`)).default,
      ...(await import(`../messages/${locale}/creation-site-web.json`)).default,
      ...(await import(`../messages/${locale}/hosting.json`)).default,
      ...(await import(`../messages/${locale}/ecommerce.json`)).default,
      ...(await import(`../messages/${locale}/domain-name.json`)).default,
      ...(await import(`../messages/${locale}/maintenance.json`)).default,
      footer: (await import(`../messages/${locale}/footer.json`)).default,
      // ...(await import(`../../messages/${locale}/about.json`)).default,
      // ...(await import(`../../messages/${locale}/services.json`)).default,
      // ...(await import(`../../messages/${locale}/contact.json`)).default,
      // ...(await import(`../../messages/${locale}/components.json`)).default,
    }
  };
});
