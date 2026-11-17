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
- `playlists/` — Wallfellow Thanksgiving (November 2026)
- `about/` — short shop about
- `styles.css` — shared styles + brand CSS variables

## Playlists

`playlists/` embeds [Wallfellow Thanksgiving](https://open.spotify.com/playlist/7llLSOZeUAIC7IgCAZxfHd), the November 2026 playlist. The frame is 152px tall (a compact player).

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
