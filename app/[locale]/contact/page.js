export const dynamic = 'force-dynamic';

import { setRequestLocale } from 'next-intl/server';
import Contact from '../../../components/Contact';

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div style={{ paddingTop: 72 }}>
      <Contact />
    </div>
  );
}
