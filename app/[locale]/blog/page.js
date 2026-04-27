import { setRequestLocale } from 'next-intl/server';
import Blog from '../../../components/Blog';

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ paddingTop: 72 }}>
      <Blog />
    </div>
  );
}
