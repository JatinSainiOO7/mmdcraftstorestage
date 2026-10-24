# MMD craft store — staging build

Static build of the MMD online store (source: https://github.com/JatinSainiOO7/mmd-store), pointed at the MandelX API at https://mandelx.runasp.net with store key `mandelx22`. Served from a sub-path (`/mmdcraftstorestage/`) with `404.html` and `.nojekyll` for GitHub Pages deep links.

Rebuild from the source repo with:

```bash
npm run package -- --key mandelx22 --api https://mandelx.runasp.net --out ../mmdcraftstorestage --base mmdcraftstorestage --github-pages
```
