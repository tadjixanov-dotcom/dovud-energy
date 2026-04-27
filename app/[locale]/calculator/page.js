export const dynamic = 'force-dynamic';

import { setRequestLocale } from 'next-intl/server';
import Calculator from '../../../components/Calculator';

export default async function CalculatorPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div style={{ paddingTop: 72 }}>
      <Calculator />
    </div>
  );
}
