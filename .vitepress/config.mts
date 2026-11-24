import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { readdirSync } from 'node:fs'

// Every iteration of the lecture lives in its own directory named after the
// winter semester it was given in, e.g. 26-27/. The newest one is where the
// site root redirects to.
const srcDir = new URL('..', import.meta.url)
const years : [string] = readdirSync(srcDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && /^\d\d-\d\d$/.test(d.name))
  .map(d => d.name)
  .sort()
  .reverse()
const latestYear = years[0]

// 26-27 -> 26/27
const yearLabel = (year: string) => year.replace('-', '/')

// Sidebar entries of a year, for the pages that year has.
// const yearPages = (year: string) => [
//   { text: 'Lectures & Assignments', page: 'index' },
//   { text: 'Exercise Setup', page: 'setup' },
// ]
//   .filter(({ page }) => existsSync(new URL(`${year}/${page}.md`, srcDir)))
//   .map(({ text, page }) => ({ text, link: `/${year}/${page === 'index' ? '' : page}` }))

// The default theme's config plus what index.md needs for its redirect.
export interface ThemeConfig extends DefaultTheme.Config {
  latestYear: string
}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  base: '/',
  title: "FCPLCD",
  description: "Foundations of Certified Programming Languages and Compiler Design",
  vite: {
    plugins: [tailwindcss()]
  },
  // The root page only redirects; the meta refresh covers visitors that land
  // on it directly, index.md itself covers navigation inside the site.
  transformPageData(pageData) {
    if (pageData.relativePath === 'index.md') {
      pageData.frontmatter.head ??= []
      pageData.frontmatter.head.push(['meta', { 'http-equiv': 'refresh', content: `0; url=${latestYear}/` }])
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // read by index.md for the redirect
    latestYear,
    logoLink: `/${latestYear}/`,

    nav: [
      {
        text: 'Semester',
        items: years.map(year => ({ text: yearLabel(year), link: `/${year}/` })),
      },
    ],

    // sidebar: Object.fromEntries(years.map(year => [`/${year}/`, [
    //   {
    //     text: yearLabel(year),
    //     // items: yearPages(year),
    //   },
    // ]])),

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
