import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '../../routing';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: 'Dovud Energy — Quyosh Energiyasi Yechimlari',
  description: 'Barqaror va ishonchli energetik yechimlar. OnGrid, Gibrid va OffGrid quyosh panel tizimlari.',
  keywords: 'quyosh paneli, solar energy, dovud energy, gibrid tizim, ongrid, uzbekistan',
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
