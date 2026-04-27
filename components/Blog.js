'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    emoji: '☀️',
    date: '2026-04-10',
    readTime: 5,
    color: '#55BA16',
  },
  {
    id: 2,
    emoji: '⚡',
    date: '2026-03-28',
    readTime: 4,
    color: '#229ED9',
  },
  {
    id: 3,
    emoji: '🔋',
    date: '2026-03-15',
    readTime: 6,
    color: '#f59e0b',
  },
  {
    id: 4,
    emoji: '💡',
    date: '2026-02-20',
    readTime: 3,
    color: '#55BA16',
  },
  {
    id: 5,
    emoji: '📊',
    date: '2026-02-05',
    readTime: 7,
    color: '#8b5cf6',
  },
  {
    id: 6,
    emoji: '🌱',
    date: '2026-01-18',
    readTime: 4,
    color: '#55BA16',
  },
];

const postContent = {
  uz: [
    {
      title: "Quyosh paneli qanday ishlaydi?",
      excerpt: "Quyosh panellari fotovoltaik effekt orqali quyosh nurini elektr energiyasiga aylantiradi. Har bir panel kremniy asosidagi kataklardan iborat bo'lib, fotonlar elektronlarni harakatga keltiradi va DC tok hosil qiladi.",
      tag: "Ta'lim",
    },
    {
      title: "OnGrid va OffGrid: qaysi biri siz uchun?",
      excerpt: "OnGrid tizim elektr tarmog'iga ulangan bo'lib, ortiqcha energiyani tarmoqqa uzatadi. OffGrid esa to'liq mustaqil ishlaydi — uzoq hududlar va dala sharoitlari uchun ideal.",
      tag: "Tahlil",
    },
    {
      title: "Litiy akkumulyatorlar: qancha xizmat qiladi?",
      excerpt: "Zamonaviy LiFePO4 akkumulyatorlar 6000+ tsiklga chidaydi. Bu 15-20 yillik xizmat muddatini anglatadi. Ular xavfsiz, tez zaryadlanadi va keng harorat diapazonida ishlaydi.",
      tag: "Texnologiya",
    },
    {
      title: "Elektr hisobingizni qanday kamaytirish mumkin?",
      excerpt: "20 kWt quyosh stansiyasi o'rtacha oilada oyiga 2 800 000 so'mgacha tejaydi. Investitsiya 2.5-3 yil ichida o'zini oqlaydi, keyin esa elektr deyarli bepul bo'ladi.",
      tag: "Maslahat",
    },
    {
      title: "O'zbekistonda quyosh energiyasining imkoniyatlari",
      excerpt: "O'zbekiston yiliga 300+ quyoshli kun bilan dunyodagi eng yuqori quyosh radiatsiyasiga ega hududlardan biri. Bu esa quyosh energiyasini bizning sharoitimiz uchun eng samarali yechim qiladi.",
      tag: "Statistika",
    },
    {
      title: "Ekologiya va quyosh energiyasi",
      excerpt: "1 kWt quyosh stansiyasi yiliga o'rtacha 1.5 tonna CO₂ chiqarilishini oldini oladi. Bu 60 ta daraxtning yillik O₂ ishlab chiqarishiga teng. Kelajak avlodlar uchun toza muhit saqlaymiz.",
      tag: "Ekologiya",
    },
  ],
  ru: [
    {
      title: "Как работает солнечная панель?",
      excerpt: "Солнечные панели преобразуют солнечный свет в электроэнергию через фотовольтаический эффект. Каждая панель состоит из кремниевых ячеек, где фотоны приводят в движение электроны, создавая постоянный ток.",
      tag: "Образование",
    },
    {
      title: "OnGrid или OffGrid: что выбрать?",
      excerpt: "OnGrid система подключена к электросети и передаёт излишки энергии в сеть. OffGrid работает полностью автономно — идеально для отдалённых районов и полевых условий.",
      tag: "Анализ",
    },
    {
      title: "Литиевые аккумуляторы: сколько служат?",
      excerpt: "Современные LiFePO4 аккумуляторы выдерживают 6000+ циклов, что соответствует 15-20 годам службы. Они безопасны, быстро заряжаются и работают в широком диапазоне температур.",
      tag: "Технология",
    },
    {
      title: "Как снизить счёт за электричество?",
      excerpt: "Солнечная станция 20 кВт экономит средней семье до 2 800 000 сум в месяц. Инвестиция окупается за 2.5-3 года, после чего электричество становится практически бесплатным.",
      tag: "Советы",
    },
    {
      title: "Потенциал солнечной энергии в Узбекистане",
      excerpt: "Узбекистан с 300+ солнечными днями в году входит в число регионов с наиболее высокой солнечной радиацией. Это делает солнечную энергию наиболее эффективным решением для наших условий.",
      tag: "Статистика",
    },
    {
      title: "Экология и солнечная энергия",
      excerpt: "Солнечная станция мощностью 1 кВт предотвращает выброс около 1.5 тонны CO₂ в год. Это равнозначно годовой выработке O₂ 60 деревьями. Сохраняем чистую среду для будущих поколений.",
      tag: "Экология",
    },
  ],
  en: [
    {
      title: "How does a solar panel work?",
      excerpt: "Solar panels convert sunlight into electricity through the photovoltaic effect. Each panel consists of silicon cells where photons set electrons in motion, creating direct current.",
      tag: "Education",
    },
    {
      title: "OnGrid vs OffGrid: which one is for you?",
      excerpt: "OnGrid system is connected to the grid and transfers surplus energy to it. OffGrid operates fully independently — ideal for remote areas and off-grid locations.",
      tag: "Analysis",
    },
    {
      title: "Lithium batteries: how long do they last?",
      excerpt: "Modern LiFePO4 batteries withstand 6000+ cycles, corresponding to 15-20 years of service. They are safe, charge quickly, and operate in a wide temperature range.",
      tag: "Technology",
    },
    {
      title: "How to reduce your electricity bill?",
      excerpt: "A 20 kW solar station saves an average family up to 2,800,000 soum per month. The investment pays back in 2.5-3 years, after which electricity becomes almost free.",
      tag: "Tips",
    },
    {
      title: "Solar energy potential in Uzbekistan",
      excerpt: "Uzbekistan with 300+ sunny days per year is one of the regions with the highest solar radiation in the world. This makes solar energy the most efficient solution for our conditions.",
      tag: "Statistics",
    },
    {
      title: "Ecology and solar energy",
      excerpt: "A 1 kW solar station prevents approximately 1.5 tonnes of CO₂ emissions per year — equivalent to the annual O₂ production of 60 trees. We preserve a clean environment for future generations.",
      tag: "Ecology",
    },
  ],
  zh: [
    {
      title: "太阳能电池板如何工作？",
      excerpt: "太阳能电池板通过光伏效应将阳光转化为电能。每块电池板由硅电池组成，光子推动电子运动，产生直流电。",
      tag: "教育",
    },
    {
      title: "并网与离网：哪个适合您？",
      excerpt: "并网系统连接到电网，将多余的能量输送到电网。离网系统完全独立运行——非常适合偏远地区和野外条件。",
      tag: "分析",
    },
    {
      title: "锂电池能用多久？",
      excerpt: "现代LiFePO4电池可承受6000+次循环，相当于15-20年的使用寿命。它们安全、充电快速，并在宽温度范围内工作。",
      tag: "技术",
    },
    {
      title: "如何降低电费？",
      excerpt: "20千瓦太阳能电站每月可为普通家庭节省高达280万苏姆。投资在2.5-3年内收回，之后电力几乎免费。",
      tag: "建议",
    },
    {
      title: "乌兹别克斯坦的太阳能潜力",
      excerpt: "乌兹别克斯坦每年有300多个晴天，是世界上太阳辐射最高的地区之一。这使太阳能成为我们条件下最高效的解决方案。",
      tag: "统计",
    },
    {
      title: "生态与太阳能",
      excerpt: "1千瓦太阳能电站每年可防止约1.5吨CO₂排放，相当于60棵树每年产生的氧气量。我们为后代保护清洁的环境。",
      tag: "生态",
    },
  ],
};

export default function Blog() {
  const locale = useLocale();
  const content = postContent[locale] || postContent.uz;

  const titles = {
    uz: { badge: 'Blog', title: "Quyosh energiyasi haqida", subtitle: "Foydali maqolalar, maslahatlar va sanoat yangiliklari" },
    ru: { badge: 'Блог', title: "О солнечной энергии", subtitle: "Полезные статьи, советы и новости отрасли" },
    en: { badge: 'Blog', title: "About Solar Energy", subtitle: "Useful articles, tips and industry news" },
    zh: { badge: '博客', title: "关于太阳能", subtitle: "实用文章、技巧和行业新闻" },
  };

  const ui = titles[locale] || titles.uz;

  return (
    <section style={{ padding: '80px 24px 120px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="badge" style={{ marginBottom: 16, justifyContent: 'center' }}>{ui.badge}</div>
          <h1 className="section-title" style={{ marginBottom: 12 }}>{ui.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>{ui.subtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {posts.map((post, i) => {
            const c = content[i];
            return (
              <article
                key={post.id}
                className="card-dark"
                style={{
                  padding: '32px 28px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${post.color}50`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${post.color}, transparent)`,
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <span style={{
                    background: `${post.color}18`,
                    border: `1px solid ${post.color}40`,
                    borderRadius: 6,
                    padding: '4px 12px',
                    fontSize: 12,
                    fontWeight: 600,
                    color: post.color,
                  }}>
                    {c.tag}
                  </span>
                  <span style={{ fontSize: 28 }}>{post.emoji}</span>
                </div>

                <h3 style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  marginBottom: 12,
                }}>
                  {c.title}
                </h3>

                <p style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}>
                  {c.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #1a1a1a',
                  paddingTop: 16,
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.3)',
                }}>
                  <span>{post.date}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
