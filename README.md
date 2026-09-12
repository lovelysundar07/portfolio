# Sundareswaran Murugan — Portfolio

A single-page portfolio site: React/Spring Boot/Flask full-stack skills up front, ML/DL
and networking interests woven through the copy. Plain HTML/CSS/JS — no build step, no
framework, so it hosts anywhere for free.

## Files

```
portfolio/
├── index.html          → page structure
├── style.css           → theme (purple/black, glassmorphism, animations)
├── script.js           → projects data, skills data, interactivity
├── assets/
│   ├── Sundareswaran_Resume.pdf   → downloaded by the "Résumé" buttons
│   └── images/profile.jpg          → hero portrait
└── README.md
```

## 1. Add a new project (no HTML editing needed)

Open `script.js` and find the `projects` array at the top. Copy one object and edit it:

```js
{
  status: "New Build",
  title: "Your Project Name",
  description: "One or two sentences on what it does.",
  stack: ["Tech", "Tech", "Tech"],
  features: [
    "First key feature",
    "Second key feature"
  ],
  demoUrl: "https://your-live-link.com",   // leave "" if not hosted yet
  codeUrl: "https://github.com/your-repo"  // leave "" to hide the button
}
```

Save the file — the new card appears automatically, in the position you placed it in the
array. Same goes for `skillGroups` a bit further down if you pick up a new tool.

## 2. Update your resume

Replace `assets/Sundareswaran_Resume.pdf` with your new file, **keeping the exact same
filename**. Both "Résumé" buttons already point at that path, so no code changes needed.
If you do rename it, update the two `href="assets/..."` lines in `index.html`.

## 3. Connect the contact form (so messages reach your inbox)

The form currently points at a placeholder. To make it work:

1. Go to [formspree.io](https://formspree.io) and sign up free.
2. Create a new form, connect it to `sundareswaran00007@gmail.com`.
3. Copy the endpoint it gives you (looks like `https://formspree.io/f/abc123xy`).
4. In `index.html`, find:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and replace `YOUR_FORM_ID` with your real ID.

Until you do this, the form will show a friendly reminder instead of failing silently.
The **WhatsApp** and **email** buttons work immediately with no setup.

## 4. Host it for free (Vercel — recommended)

1. Create a free account at [vercel.com](https://vercel.com) (sign in with GitHub is easiest).
2. Put this folder in a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. In Vercel: **Add New → Project → Import** your GitHub repo.
4. Framework preset: choose **Other** (it's a static site, no build command needed).
5. Click **Deploy** — you'll get a live URL like `sundareswaran-portfolio.vercel.app` in under a minute.
6. Optional: add a custom domain later under Project → Settings → Domains.

### Alternative: Netlify (drag-and-drop, no Git needed)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `portfolio` folder onto the page.
3. It deploys instantly and gives you a live link — great if you just want it online fast
   without setting up GitHub first.

### Alternative: GitHub Pages
1. Push the folder to a GitHub repo (steps above).
2. Repo → **Settings → Pages** → Source: `main` branch, root folder.
3. Your site publishes at `https://<username>.github.io/<repo-name>/`.

## 5. Before you share the link

- [ ] Formspree ID replaced (Section 3)
- [ ] Resume PDF is your latest version
- [ ] Test the WhatsApp button, resume download, and every project's demo link
- [ ] Check the site on your phone — resize the browser or open the live link on mobile
