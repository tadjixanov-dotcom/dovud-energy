import { setRequestLocale } from 'next-intl/server';
import Certificates from '../../../components/Certificates';

export default async function CertificatesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ paddingTop: 72 }}>
      <Certificates />
    </div>
  );
}
