📖 Quran Web Application

A modern, responsive Quran web application built with Next.js and Tailwind CSS, designed to provide a calm and beautiful reading experience.

✨ Features
📚 Surah List Page
Displays all 114 surahs
Arabic + English names
Ayah count for each surah
📖 Ayah Page
Full surah view
Arabic text + English translation
Clean, readable layout
🔍 Search Functionality
Search ayahs by translation text
Fast and responsive filtering
⚙️ Settings Panel
Arabic font selection (multiple fonts)
Adjustable Arabic font size
Adjustable translation font size
Preferences persist using localStorage
🧠 Interactive UX
Desktop: Hover preview of surahs (tooltip)
Mobile: Bottom sheet preview (touch-friendly)
Smooth and intuitive navigation
📱 Fully Responsive
Optimized for desktop, tablet, and mobile devices
🛠 Tech Stack

Frontend

Next.js (App Router + SSG)
Tailwind CSS

Backend

Node.js (data processing script)

Data Source

Quran dataset from:
https://github.com/semarketir/quranjson
📂 Project Structure
app/
  page.tsx
  surah/[id]/page.tsx

components/
  hero-section.tsx
  navbar.tsx
  surah-row.tsx
  search-bar.tsx

lib/
  quran.ts

data/
  surahs.json
  quran.json

scripts/
  fetch-quran-data.js
⚙️ Setup & Installation
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/quran-web-app.git
cd quran-web-app
2. Install dependencies
npm install

or

pnpm install
3. Generate Quran dataset
node scripts/fetch-quran-data.js

This will create:

data/surahs.json
data/quran.json
4. Run the development server
npm run dev

Open:

http://localhost:3000
🚀 Deployment

The app is optimized for deployment on:

Vercel
Netlify
Deploy on Vercel
npm run build

Then connect your GitHub repo to Vercel and deploy.

🎥 Demo

👉 Live Demo: (add your Vercel link here)
👉 Screen Recording: (add your video link here)

🧩 Design Approach

This project focuses on:

Minimal, distraction-free UI
Readability of Arabic text
Smooth navigation experience
Context-aware interactions (hover vs touch)

Unlike typical card-heavy layouts, the UI is designed to feel closer to a reading experience rather than an e-commerce interface.

📌 Notes
Static Site Generation (SSG) is used for performance
Quran data is preprocessed using a Node.js script
Settings are stored locally for persistence
📜 License

This project is for assessment purposes.
Quran dataset is sourced under MIT License from the original repository.

🙌 Acknowledgements
Quran JSON dataset by:
https://github.com/semarketir/quranjson