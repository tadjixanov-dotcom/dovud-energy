import { setRequestLocale } from 'next-intl/server';
import SystemTypes from '../../../components/SystemTypes';
import Stats from '../../../components/Stats';

export default async function SystemsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ paddingTop: 72 }}>
      <SystemTypes />
      <Stats />
    </div>
  );
}
