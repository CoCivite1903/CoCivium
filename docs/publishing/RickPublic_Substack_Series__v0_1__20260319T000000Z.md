# RickPublic Substack Series v0.1

Status: seed-stage publishing mandate and automation brief.

## Intent
Build a preapproved article queue for weekly publication to Substack first, with optional mirror publication to RickPublic.org/.com once the mirror surface is ready. Keep the series evergreen, repo-first, fail-closed, and approval-gated.

## Operating rules
- Publish one article at a time.
- Weekly by default; daily later if approval cadence and tooling support it.
- No publish occurs without prior approval state in the queue.
- If publish verification fails, assume it did not land.
- Preserve each article as markdown + metadata + receipt.
- Substack is the primary seed-stage surface.
- RickPublic.org/.com is secondary until the mirror route is production-ready.
- CTA may point to fossilized legacy repos during seed stage.

## Canonical article queue (provisional until repo recovery proves better legacy titles)
1. **The Meaning of Lif**  
   Tagline: *42 was the answer in preCoGibber. We are here to CoGrok the question.*  
   Role: open the series by reframing life, love, CoHope, and the shift from static meaning to evolving path.

2. **Love Was Never the Whole Story**  
   Role: explain why love matters but is incomplete, and why CoHope is the larger faith-path that keeps love from collapsing into tribal capture.

3. **If Meaning Is Not Waiting for Us**  
   Role: develop the bolder thesis that minds may need to help make meaning real rather than merely discover it.

4. **Begin Here: CoHope, CoCivium, and the Open Questions**  
   Role: introduction CTA piece pointing readers at the current legacy/fossilized repo surfaces while clearly stating that the project is still in seed-stage evolution.

## Publication flow
1. Source capture from rant / dialogue / notes.
2. Writer pass turns source into article draft + short blurb + CTA.
3. Queue pass assigns slug, status, earliest publish date, and approval state.
4. Approval gate marks one article `approved_to_publish=true`.
5. Poster pass publishes to Substack.
6. Mirror pass optionally posts canonical markdown/HTML to RickPublic.org/.com.
7. Verification pass checks landing URL and records receipts.
8. If verification fails, state returns to `not_landed`.

## Automation target
Use a repo-driven queue with browser automation as the default posting path.

### Why browser automation
At time of writing, the safe assumption is that Substack scheduling/publishing exists in the web product, but a stable official publish API is not the primary seed-stage assumption. Therefore the automation default should be Playwright or equivalent browser automation with explicit selectors, approval gates, and screenshot receipts.

## Queue schema (minimum)
```json
{
  "series": "rickpublic_substack_seed_v1",
  "publication_surface": "substack_primary",
  "mirror_surface": "rickpublic_optional",
  "items": [
    {
      "ordinal": 1,
      "title": "The Meaning of Lif",
      "slug": "the-meaning-of-lif",
      "status": "draft",
      "approved_to_publish": false,
      "publish_not_before_utc": null,
      "target_surface": "substack",
      "mirror_enabled": false
    }
  ]
}
```

## Helper asks / CoPrime asks
- Recover any better legacy article titles from repo canon if they exist.
- Evolve helpers for queue management, approval-state mutation, and publish verification.
- Evolve Playwright/CLI helpers so manual user paste is emergency-only.
- Keep the mandate evergreen and update it when stronger canonical titles or CTA targets are found.

## Seed-stage CTA guidance
Use a calm seed-stage CTA, for example:
> If this resonates, begin with the current public surfaces and legacy repos. They are incomplete, but they are enough to show the direction of travel.

## Definition of done for this seed
- four article slots are defined
- first article is drafted and queued
- queue schema exists
- posting path is specified
- verification rule is fail-closed
- CoPrime has been notified via CoBus
