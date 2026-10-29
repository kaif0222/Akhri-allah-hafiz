# Aakhri Allah Hafiz – Portfolio Website

Static site (HTML, CSS, JavaScript). No build step, no dependencies.

## 1. Add the team resumes (do this first)

Put each PDF in the `resumes/` folder with **exactly** these filenames:

| Member | Filename |
|---|---|
| Muhammad Kaif | `muhammad-kaif.pdf` (already included, phone number removed) |
| Raza Ahmed | `raza-ahmed.pdf` |
| Fizah | `fizah.pdf` |
| Javeria | `javeria.pdf` |
| Nobisha | `nobisha.pdf` |

Until a file exists, that member's card shows "Resume coming soon". Once the PDF is added and the site is redeployed, the "View resume" and "Download" buttons work automatically. Tip: remove personal phone numbers and home addresses from resumes before adding them, because the site is public.

## 2. Deploy: GitHub, then Vercel

1. Go to github.com, click **New repository**, name it `aakhri-allah-hafiz`, set it to Public, and create it.
2. Click **uploading an existing file**. Drag in **everything inside this folder** (`index.html`, `css`, `js`, `assets`, `docs`, `resumes`, `vercel.json`). Make sure `index.html` is at the top level of the repo. Click **Commit changes**.
3. Go to vercel.com, sign in with GitHub, and click **Add New, then Project**. Import `aakhri-allah-hafiz`.
4. Leave everything at the defaults: **Framework Preset: Other**, no Build Command, no Output Directory. Click **Deploy**.
5. In about a minute you get a link like `https://aakhri-allah-hafiz.vercel.app`. That is the link to submit.

To update later (for example, to add resumes): upload the new files to the GitHub repo. Vercel redeploys by itself.

## 3. Things to check after deploying

- **Share preview (WhatsApp, LinkedIn):** the preview currently uses the film's YouTube thumbnail, so it works immediately. To use the custom image instead, open `index.html` and replace both `https://i.ytimg.com/vi/q9Wmxdyi_24/maxresdefault.jpg` lines with `https://YOUR-SITE.vercel.app/assets/og.jpg`. WhatsApp caches previews, so test with a fresh link.
- **Film shape:** if your final film is vertical (9:16), open `js/data.js` and change `filmRatio: "16 / 9"` to `filmRatio: "9 / 16"`.
- **YouTube visibility:** set the film, trailer and OST to **Public** or **Unlisted**. Private videos will not play on the site.
- **English subtitles:** the CC button uses YouTube captions. To make it work, open YouTube Studio, then Subtitles, and upload an English `.srt` for the film. The scene-by-scene read-along on the timeline works without it.

## 4. Editing the content

Almost all text lives in **`js/data.js`**: team bios, roles, captions, director's statement, reflection, scene details, prompts, rubric lines. Edit it in any text editor and redeploy. Items to review and personalise before submitting:

- Team bios for Raza, Fizah, Javeria and Nobisha (written only from the roles in the film credits)
- Director's statement and "What we learned" (drafts)
- Trailer and OST captions (drafts)
- English translations of the dialogue lines (drafts, check against your Urdu)
- Contact: currently Kaif's email and LinkedIn from his resume

## 5. Files

- `docs/` – corrected pre-production package (PDF and Word): lab name fixed, roll number filled in, Scene 10 gunshot cue replaced with silence and ringing.
- `assets/frames/` – optimised key frames and the review-note crops.
- `vercel.json` – clean URLs and basic headers.
