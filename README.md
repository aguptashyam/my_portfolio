# Anubhav Gupta — Personal Portfolio & Engineering Showcase

A personal portfolio website for **Anubhav Gupta**, Computer Science undergraduate at Thapar Institute of Engineering & Technology, aspiring Software Engineer, and AI/ML enthusiast.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom CSS tokens
- **3D & Visuals**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Fonts**: Inter, Space Grotesk, JetBrains Mono via `next/font/google`

---

## 🌟 Key Features & Structure

1. **Interactive 3D Hero Section**: Procedural particle field and orbital rings with WebGL fallback and reduced-motion support.
2. **About Section**: Professional biography, academic background at Thapar Institute (CGPA 8.78/10), and engineering philosophy.
3. **Research & Experience**: Detailed breakdown of the ML Research Internship at Thapar Institute (EEG-based ADHD classification, 19-channel pipeline, VMD, K-NN selection from 760 to 28 features, 93.1% Accuracy / 0.97 AUC).
4. **Featured Engineering Projects**:
   - **NEURIS**: Cognitive memory system (FastAPI, Neo4j, Redis, Docker, LLMs, RAG).
   - **Calivio**: Event management SaaS (Next.js, MongoDB, Stripe, Clerk).
   - **UrbanVista**: Fashion e-commerce platform (MERN, Stripe, Redis).
   - **Flight Management System**: Relational database operations and optimization (MySQL, PL/SQL).
5. **Categorized Technical Arsenal**: Languages, Frontend, Backend, AI/ML, Databases, Cloud & Tools, CS Foundations.
6. **Honors & Competitive Coding**: Google Big Code Challenge (Round 2, Top 1500), ZS Campus Beats, Goldman Sachs Hackathon, 600+ DSA problems solved across LeetCode & Codeforces.
7. **Verified Credentials**: Credly badges (IBM, Oracle) and links.
8. **Interactive Command Palette**: Press `Cmd + K` or `Ctrl + K` to trigger instant search, jump to any section, or access profiles.
9. **Refined Desktop Cursor**: Cursor follower with hover states, automatic touch suppression, and reduced-motion accessibility.
10. **Resume Access**: Direct Google Drive view link and a local downloadable PDF.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation
```bash
git clone https://github.com/aguptashyam/my_portfolio.git
cd my_portfolio
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Production Build

To test and compile the production bundle:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `my_portfolio` repository.
4. **Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL`: Set to your production URL (e.g. `https://anubhavgupta.dev` or your Vercel domain).
5. Click **Deploy**. Vercel will automatically build and publish your site with edge CDN caching.

---

## 📄 Centralized Data Configuration

All personal information, project data, skills, and links can be easily edited in one file:
[`src/data/portfolio.ts`](./src/data/portfolio.ts).

---

## ⚖️ License
MIT License.
