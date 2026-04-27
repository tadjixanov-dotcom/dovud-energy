import { setRequestLocale } from 'next-intl/server';
import Projects from '../../../components/Projects';

export default async function ProjectsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ paddingTop: 72 }}>
      <Projects />
    </div>
  );
}
