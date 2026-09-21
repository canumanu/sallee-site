# Sallee Horse Vans — website redesign concept

Static HTML concept. Open `index.html` in any browser; everything else links from there.
No build step, no server, no dependencies (fonts load from Google Fonts when online — the
site still works offline, it just falls back to Georgia and a system sans).

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Homepage — hero and route map, quick quote bar, upcoming events, open-space strip, winner's-circle video wall, services, client tools, offices |
| `calendar.html` | Events calendar — sales / race meets / shows, filter by type and month, event detail with the handling office |
| `planner.html` | Shipment planner — destination, horse count and type, US–Canada toggle that rewrites the paperwork checklist, request confirmation |
| `availability.html` | Open space on the van — planned loads with stall pips, direction filters, waitlist, route watch |
| `login.html` | Client sign in — own credentials, not Microsoft 365. Submits to `account.html` |
| `account.html` | Client account — shipments, invoices & payment, documents, notes & preferences |
| `drive.html` | Driver recruiting landing page — pay, home time by run, equipment, apply in four fields or by text |
| `assets/site.css` | All styling. Colors, type and components are defined once at the top of the file |
| `assets/site.js` | Shared behaviour: tabs, chip filters, placeholder video buttons |

## What's real and what isn't

- Anything in `[BRACKETS]` is a placeholder: horse names, pay rates, driver names, USDOT number.
- Video panels are placeholders — no MP4s are embedded.
- Loads, invoices, events and documents are sample data written into the page's `<script>` block.
- Forms don't submit anywhere. Each page carries a banner saying it's a concept.
- Phone numbers, office addresses and the Kate D. testimonial are from the current live site.

## Colors and type

Defined as CSS variables in `assets/site.css`:

- Hunter green `#1E3A2F`, deep green `#14271F`, sage `#8FA898`
- Brass gold `#D6B679`, brass text `#8A5E17`
- Cream `#F5F1E8`, card `#FBF9F4`, line `#DDD5C4`
- Headings: Fraunces. Body: Instrument Sans.

## Where the data would come from

- **Open space** — the dispatch load board's `orders.json`, filtered down to route, date, van,
  committed stalls and capacity. No horse names, trainers or farms on the public page.
- **Events calendar** — maintained list, ideally pulled from the sale companies' and tracks' published dates.
- **Account** — shipment status from the load board; invoices stay in NAV as the system of record.
- **Client logins** — separate from the Microsoft 365 / Azure AD staff directory.

## Open questions

1. Real pay figures for the recruiting page.
2. Whether public open-space listings should show van numbers and exact capacity.
3. Which office handles which event on the calendar.
4. Text-to-apply needs a real number somebody watches.
