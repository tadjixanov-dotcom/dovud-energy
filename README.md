# Dovud Energy — Website

Next.js сайт для компании Dovud Energy.

## Запуск

1. Установи [Node.js](https://nodejs.org) (LTS версия)
2. Открой терминал в папке `dovud-energy`
3. Выполни команды:

```bash
npm install
npm run dev
```

4. Открой браузер: http://localhost:3000

Сайт автоматически перенаправит на `/uz` (узбекский язык).

## Языки

- `/uz` — O'zbek
- `/ru` — Русский
- `/en` — English
- `/zh` — 中文

## Структура

```
dovud-energy/
├── app/[locale]/          # Страницы (home, systems, projects, certificates, calculator, contact)
├── components/            # React компоненты
├── messages/              # Переводы (uz, ru, en, zh)
└── public/                # Статичные файлы (добавь фото сюда)
```

## Добавление фотографий проектов

Добавь фотографии проектов в папку `public/projects/`:
- `project1.jpg` — Dengiz Kafe 100 kWt
- `project2.jpg` — Второй проект
- `project3.jpg` — Третий проект

Затем обнови компонент `components/Projects.js`.
