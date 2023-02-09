# Precelerator Landing Page. 
 
Die Landing Page des Precelerators ist als [Next.js](https://nextjs.org/) Anwendung unter Nutzung von [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) umgesetzt. Styling: Bootstrap

Status: [![CI](https://github.com/Precelerator/precelerator.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/Precelerator/precelerator.github.io/actions/workflows/main.yml)

## Getting Started

Um die Webseite weiterzuentwickeln, klone zuerst das Projekt (über die Konsole mit Git oder bequem per GitHub Desktop).

Navigiere in den Projekt Ordner und installiere anschließend die Abhängigkeiten via [npm](https://nodejs.org/en/)  ``` npm install ```.

Danach startest du den lokalen Dev Server via

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser, um die Anwendung zu sehen.

Ändere Inhalte in `pages/index.js` (bzw. die Sections und Components innerhalb der index.js). Per Hot Reload sollten deine Änderungen direkt sichtbar sein.

## Mehr erfahren

Um mehr über next.js zu erfahren, wirf einen Blick auf die folgenden Ressourcen:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js Dokumentation.
- [Learn Next.js](https://nextjs.org/learn) - interaktives Next.js tutorial.

## DevOps

Die Seite wird via GitHub Actions gebuildet, als statische Seite exportiert und anschließend auf GitHub Pages gehostet.

## Kontakt

Probleme mit der Website? Hinterlasse uns einen Issue oder Pull Request oder schreib uns an precelerator@sce.de.
