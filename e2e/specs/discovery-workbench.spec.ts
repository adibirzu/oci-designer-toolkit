import { test, expect } from '@playwright/test'

test.describe('OCI Discovery Workbench smoke', () => {
  test('opens the workbench and exercises all discovery views', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.ocd-console')).toBeVisible({ timeout: 20_000 })

    const discoveryButton = page.getByRole('button', { name: 'Discovery' })
    await expect(discoveryButton).toBeVisible({ timeout: 10_000 })
    await discoveryButton.click()

    await expect(page.getByRole('heading', { name: 'OCI Discovery Workbench' })).toBeVisible({ timeout: 30_000 })
    await expect(page.getByLabel('Discovery summary')).toContainText('3 apps')
    await expect(page.getByLabel('Discovery summary')).toContainText('6 assets')
    await expect(page.getByLabel('Discovery summary')).toContainText('8 dependencies')
    await expect(page.getByLabel('Discovery summary')).toContainText('USD 6,020 / month')

    await expect(page.getByRole('tab', { name: 'Inventory' })).toHaveAttribute('aria-selected', 'true')
    await expect(page.getByRole('heading', { name: 'Retail Shop' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Compute Assets' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'shop-web-1' })).toBeVisible()
    await expect(page.getByRole('cell', { name: /Shop Nginx A.*Shop API A/ })).toBeVisible()

    await page.getByRole('tab', { name: 'Topology' }).click()
    await expect(page.getByRole('tab', { name: 'Topology' })).toHaveAttribute('aria-selected', 'true')
    await expect(page.getByRole('heading', { name: 'Dependency Topology' })).toBeVisible()
    const topologyRow = page
      .getByRole('row')
      .filter({ hasText: 'Shop Nginx A' })
      .filter({ hasText: 'Shop API A' })
      .filter({ hasText: 'http' })
      .filter({ hasText: '8080' })
    await expect(topologyRow).toBeVisible()

    await page.getByRole('tab', { name: 'Analytics', exact: true }).click()
    await expect(page.getByRole('heading', { name: 'Monthly Cost' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Utilization Metrics' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'shop-db-1' })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'USD 1,560' })).toBeVisible()

    await page.getByRole('tab', { name: 'LZ Mapping' }).click()
    await expect(page.getByRole('heading', { name: 'Landing Zone Target Mapping' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Compartments' })).toBeVisible()
    await expect(page.getByText('prod-commerce')).toBeVisible()
    await expect(page.getByText('observability')).toBeVisible()
    await expect(page.getByText('Wave 3 - Legacy Critical')).toBeVisible()
    await expect(page.getByRole('cell', { name: 'Autonomous Database' }).first()).toBeVisible()

    await page.getByRole('tab', { name: 'Resource Analytics', exact: true }).click()
    await expect(page.getByRole('heading', { name: 'Resource Analytics Integration' })).toBeVisible()
    await expect(page.getByText('RESOURCE_DIM_V')).toBeVisible()
    await expect(page.getByText('FETCH FIRST 50 ROWS ONLY')).toBeVisible()
  })
})
