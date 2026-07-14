# Email Infrastructure Plan — @dxtechph.online

**Date:** July 11, 2026
**Context:** Dokploy VM on Proxmox, Converge ICT ISP (Candon, Ilocos Sur)
**Constraint:** Port 25 BLOCKED both inbound/outbound by Converge. Public IP is residential range.

---

## Path A — FREE (Immediate, Recommended to Start)

### Personal Mail
- **Inbound:** Cloudflare Email Routing → forwards all @dxtechph.online to Gmail inbox
- **Reading:** Gmail app on phone (or any mail client)
- **Replying:** Gmail "Send mail as" feature — add you@dxtechph.online as alias. Gmail verifies via email sent to that address (which Cloudflare forwards to your Gmail). Replies show @dxtechph.online in From field. **Free.**
- **Outbound sending:** Gmail's own servers handle delivery. No port 25 needed.

### App Mail (Gitea, Laravel, future apps)
- Each app uses Gmail SMTP with a unique App Password
- SMTP: `smtp.gmail.com` port `587`, TLS
- Limit: ~500 recipients/day per account
- **Free.**

### Pros
- Zero cost, zero maintenance
- Google spam filtering (best in class)
- VM downtime doesn't affect email at all
- Takes ~30 minutes to set up

### Cons
- 500 emails/day limit for apps
- Relies on Gmail (privacy concerns for some)

---

## Path B — SELF-HOSTED OUTBOUND (Future Growth)

Adds Stalwart on Dokploy VM for app mail, keeping personal mail on Path A.

### Architecture
```
Apps → Stalwart (Dokploy, local SMTP) → SMTP2GO Relay → Internet
```

### Components
- **Stalwart** — Docker container on Dokploy. Manages credentials per app. Queues and retries.
- **SMTP2GO** — Free tier: 1,000 emails/month. Paid: $10/mo for 50k. Acts as smarthost/relay to deliver mail since port 25 is blocked.
- **Personal mail** — Still Path A (Cloudflare + Gmail). No server dependency.

### Pros
- Apps send through your own server — one config point
- SMTP2GO takes care of deliverability (SPF/DKIM handled)
- Dashboard for email logs per app

### Cons
- SMTP2GO free tier may be tight if apps grow
- VM downtime means app emails queue until server is back

---

## Path C — PAID UNLIMITED (Path A + MXroute)

### Architecture
- **Personal:** Cloudflare Email Routing → Gmail (same as Path A)
- **Apps:** Connect directly to MXroute SMTP instead of Stalwart
- **Or:** Stalwart → MXroute relay

### Cost
- **MXroute:** $15/year — truly unlimited emails, unlimited mailboxes, IMAP access
- Same as Path A + $15/yr

### Pros
- No per-email limits ever
- One provider replaces both Stalwart and SMTP2GO
- Full IMAP if you ever want to move off Gmail

### Cons
- Still need Cloudflare for inbound routing (or point MX directly to MXroute)

---

## Decision Flow

```
Need email now?
  ├── Yes → Path A (Cloudflare + Gmail). Free, 30 min setup.
  │
  └── Apps growing past Gmail limits?
        ├── No → Stay on Path A
        └── Yes → Add Path B (Stalwart + SMTP2GO) or
                  Jump to Path C (MXroute $15/yr)
```

## Setup Ready Checklists

### Path A Setup
- [ ] Cloudflare Email Routing: add catch-all → your Gmail
- [ ] Gmail: add "Send mail as" you@dxtechph.online
- [ ] Gitea: SMTP config with Gmail App Password
- [ ] Save as template for future apps

### Path B Setup (when ready)
- [ ] Deploy Stalwart on Dokploy (docker-compose)
- [ ] Register SMTP2GO account, verify domain
- [ ] Configure Stalwart smarthost → SMTP2GO
- [ ] Update apps to use Stalwart localhost SMTP

### Path C Setup (when budget)
- [ ] Register MXroute, point MX records
- [ ] Configure apps with MXroute SMTP credentials
