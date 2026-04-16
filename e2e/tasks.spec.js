import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = 'file://' + path.resolve(__dirname, '../src/index.html');

test('додає нову задачу через інтерфейс', async ({ page }) => {
  await page.goto(filePath);
  await page.fill('#task-input', 'Моя E2E задача');
  await page.click('#add-btn');
  await expect(page.locator('#task-list li')).toHaveText('Моя E2E задача');
});

test('не додає порожню задачу', async ({ page }) => {
  await page.goto(filePath);
  await page.click('#add-btn');
  await expect(page.locator('#task-list li')).toHaveCount(0);
});