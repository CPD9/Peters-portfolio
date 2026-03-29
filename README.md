# Peter Dike — Portfolio

Personal site: 3D hero (React Three Fiber), projects, experience timeline, blog (Markdown), and contact. Built with Vite and Tailwind.

**Stack:** React, Three.js / R3F / Drei, Framer Motion, React Router, EmailJS.

## Local setup

```bash
git clone <your-repo-url>
cd peters_3D_developer_portfolio
npm install
```

Create a `.env` in the project root for the contact form (from [EmailJS](https://www.emailjs.com/)):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Production build: `npm run build` (output in `dist/`).

## License

Original 3D portfolio scaffold drew on community examples; this repo is customized for **Peter Dike**. Use or adapt with attribution as you prefer.
