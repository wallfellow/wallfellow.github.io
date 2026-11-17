# Wallfellow site

Minimal static brand presence for **Wallfellow** (“Hang it up”).

## Open locally

```bash
cd ~/Desktop/Hustle/wallfellow-site
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

## Layout

- `index.html` — homepage
- `pieces/` — catalog index + six placeholder product pages
- `playlists/` — six playlist slots (placeholder embeds)
- `about/` — short shop about
- `styles.css` — shared styles + brand CSS variables

## Playlists

The players in `playlists/` are placeholders. No Wallfellow playlist URL was in the site. To swap one in, replace that iframe’s `src="about:blank"` with an embed URL such as `https://open.spotify.com/embed/playlist/YOUR_ID?utm_source=generator`. The page shows the player once `src` is no longer `about:blank`. The frame is 152px tall (a compact player); raise `.embed-slot iframe` in `styles.css` for a taller embed.

## Placeholder pieces

| Name | Slug | Type |
|------|------|------|
| Ledge | `ledge` | Framed original |
| Drift | `drift` | Framed original |
| Threshold | `threshold` | Framed original |
| Ember | `ember` | Framed original |
| Ring | `ring` | Wall ornament |
| Vessel | `vessel` | Wall vase |

No fake checkout — Etsy shop link stubs to **WallfellowStore**.
