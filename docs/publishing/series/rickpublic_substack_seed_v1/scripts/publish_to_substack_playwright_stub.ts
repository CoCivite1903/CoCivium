// Seed-stage Playwright stub for Substack posting.
// This is intentionally a scaffold, not a claimed production poster.
// Guardrails:
// - read queue.json
// - only act on approved_to_publish=true
// - capture screenshots/receipts
// - fail closed if publish verification is missing

import fs from 'node:fs';
import path from 'node:path';

interface QueueItem {
  ordinal: number;
  title: string;
  slug: string;
  status: string;
  approved_to_publish: boolean;
  publish_not_before_utc: string | null;
  target_surface: string;
  mirror_enabled: boolean;
  article_path: string;
}

interface QueueFile {
  series: string;
  items: QueueItem[];
}

function loadQueue(queuePath: string): QueueFile {
  return JSON.parse(fs.readFileSync(queuePath, 'utf8')) as QueueFile;
}

function firstEligible(items: QueueItem[]): QueueItem | undefined {
  const now = new Date().toISOString();
  return items.find(item => {
    const timeOk = !item.publish_not_before_utc || item.publish_not_before_utc <= now;
    return item.approved_to_publish && (item.status === 'draft_ready' || item.status === 'queued') && timeOk;
  });
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const queuePath = path.join(root, 'queue.json');
  const queue = loadQueue(queuePath);
  const item = firstEligible(queue.items);

  if (!item) {
    console.log('No eligible article found. Exiting without publish.');
    process.exit(0);
  }

  const articlePath = path.resolve(path.join(root, '..', '..', '..', '..', item.article_path));
  const body = fs.readFileSync(articlePath, 'utf8');

  console.log('ELIGIBLE_TITLE=' + item.title);
  console.log('ARTICLE_PATH=' + articlePath);
  console.log('BODY_BYTES=' + Buffer.byteLength(body, 'utf8'));

  // TODO:
  // 1. import { chromium } from 'playwright';
  // 2. launch persistent/authenticated browser context
  // 3. navigate to Substack editor
  // 4. populate title/body
  // 5. publish or schedule
  // 6. capture screenshots and resulting URL
  // 7. update queue only after verification

  console.log('STUB_ONLY=true');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
