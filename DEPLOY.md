# Putting this on GitHub Pages

Same pattern as the load board: static files in the repo root, Pages serves the branch
directly, no build step and no Actions workflow needed. All paths are relative, so nothing
breaks when it's served from a subfolder like `canumanu.github.io/sallee-site/`.

This folder is already a git repo with one commit on `main`. `.nojekyll` is in place so
GitHub serves every file as-is instead of running Jekyll over it.

## Option A — GitHub CLI

```bash
cd sallee-site
gh repo create canumanu/sallee-site --public --source=. --remote=origin --push
gh api -X POST repos/canumanu/sallee-site/pages -f build_type=legacy \
  -f 'source[branch]=main' -f 'source[path]=/'
```

Live at `https://canumanu.github.io/sallee-site/` within a minute or two.

## Option B — plain git

1. Create an empty repo on github.com named `sallee-site` (no README, no .gitignore).
2. Then:

```bash
cd sallee-site
git remote add origin https://github.com/canumanu/sallee-site.git
git push -u origin main
```

3. Repo → Settings → Pages → Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → Save.

## Updating it later

```bash
git add -A
git commit -m "what changed"
git push
```

Pages redeploys on push, usually under a minute. Hard-refresh if you see the old version.

## Private vs public

Pages on a private repo needs a paid plan. If this shouldn't be public yet, push it private
and skip the Pages step — you can still clone it anywhere and open `index.html` locally.

## Later: a real domain

When it stops being a concept, add a `CNAME` file containing the hostname (e.g.
`new.salleehorsevans.com`), point a DNS CNAME at `canumanu.github.io`, and turn on
"Enforce HTTPS" in Settings → Pages.

## Before it goes anywhere public

- Every page carries a "Concept build for review" banner — keep it until the content is real.
- Fill the `[BRACKETS]`: pay figures on `drive.html`, horse and driver names, USDOT number.
- Decide whether `availability.html` should show van numbers and exact capacity publicly.
- Text-to-apply on `drive.html` needs a real number somebody watches.
