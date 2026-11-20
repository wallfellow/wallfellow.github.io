# Wallfellow site

Minimal static brand presence for **Wallfellow** (“Let it hang”).

## Open locally

```bash
cd ~/Desktop/Hustle/wallfellow-site
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

## Layout

- `index.html` — homepage
- `pieces/` — catalog index, one listed piece, and six placeholder product pages
- `styles.css` — shared styles + brand CSS variables

## Listed

| Name | Slug | SKU | Type |
|------|------|-----|------|
| Vintage Konica 35mm Film Camera | `konica` | WF-S02 | Secondary, not a wall piece |

No price, dimensions, or photograph yet.

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
