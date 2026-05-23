# Math Curriculum Website

A static curriculum planning website for K–12, undergraduate, and graduate mathematics education. Browse default course tracks, then customize them by reordering, adding, or removing courses. Your changes are saved in the browser.

## Pages

| Page | Tracks available |
|---|---|
| K-12 | Regular, 1 Year Advanced, 2 Years Advanced |
| Undergraduate | 4-Year Plan, 3-Year Plan (1 year credit) |
| Graduate | Algebra & Number Theory, Analysis & Topology, Applied Math & Physics, Probability & Statistics |

## Running Locally

No build step required. Open `index.html` directly in your browser, or serve it with any static server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push your changes to the `main` branch.
2. In the repository on GitHub, go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**, choose `main`, and set the folder to `/ (root)`.
4. Save. GitHub Pages will publish the site at `https://<username>.github.io/<repo>/`.

## Editing Default Curriculum Content

All default course data lives in `js/data.js`. Each track is an object with a `label` and a `courses` array:

```js
export const k12Tracks = {
  regular: {
    label: "Regular",
    courses: [
      { id: "k12-r-1", name: "Course Name", description: "Short description." },
      // ...
    ]
  }
}
```

Add, remove, or reorder entries in `courses` to change the defaults. Keep `id` values unique within a track.

> **Note:** Editing `data.js` only affects the defaults shown to first-time visitors or after "Reset to Default". Existing localStorage saves are not affected until the user resets.

## Customizing the Site

- **Colors / theme**: Edit the CSS custom properties at the top of `css/style.css`.
- **Adding a new track**: Add an entry to the appropriate object in `js/data.js`, then add a tab button in the corresponding HTML file.
- **Adding a new level page**: Create a new HTML file following the pattern of `k12.html`, add the data to `js/data.js`, and link it from `index.html`.
