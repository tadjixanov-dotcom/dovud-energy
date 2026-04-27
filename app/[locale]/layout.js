import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const locales = ['uz', 'ru', 'en', 'zh'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: 'Dovud Energy — Quyosh Energiyasi Yechimlari',
  description: 'Barqaror va ishonchli energetik yechimlar. OnGrid, Gibrid va OffGrid quyosh panel tizimlari.',
  keywords: 'quyosh paneli, solar energy, dovud energy, gibrid tizim, ongrid, uzbekistan',
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

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
