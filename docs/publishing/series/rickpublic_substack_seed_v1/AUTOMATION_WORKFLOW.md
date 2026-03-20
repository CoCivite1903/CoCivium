# RickPublic / Substack Automation Workflow

## Goal
Publish one preapproved article at a time to Substack on a weekly cadence, with optional later mirror publication to RickPublic.org/.com.

## Guardrails
- No publish without `approved_to_publish=true` in queue.
- If landing verification fails, assume not landed.
- Preserve receipts, screenshots, and output metadata.
- Manual user paste is emergency-only.
- Browser/UI automation is a temporary seed-stage path, not the long-term ideal.

## Workflow
1. Read `queue.json`.
2. Select first item where:
   - `approved_to_publish=true`
   - `status` in (`draft_ready`, `queued`)
   - `publish_not_before_utc` is null or elapsed.
3. Load article markdown.
4. Transform article markdown to publishable HTML/plaintext blocks if required.
5. Launch Playwright automation against Substack compose/editor surface.
6. Populate title, subtitle/teaser if used, and body.
7. Publish or schedule according to queue state.
8. Capture screenshots.
9. Record resulting URL and verification state.
10. Update queue item to `published` only after verification.
11. Optionally mirror content to RickPublic.org/.com if mirror route is enabled.

## Files
- `queue.json`
- `articles/*.md`
- `scripts/publish_to_substack_playwright_stub.ts`

## Helper gaps still open
- robust selector set for actual Substack compose flow
- secure credential/session handling
- RickPublic mirror adapter
- post-publish verification receipts beyond simple URL capture
