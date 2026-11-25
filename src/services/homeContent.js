/**
 * Home page content service.
 *
 * Every call for home page data lives here. The SCRUM-5 endpoint and response
 * shape have not been confirmed yet (neither SCRUM-4 nor this codebase defines
 * them), so this module still returns placeholder data shaped like the Figma design.
 * To connect the real API, only change `fetchHomeContent` below (e.g. call
 * `${import.meta.env.VITE_API_BASE_URL}/home`) and map the response with
 * `normalizeHomeContent` — components and the composable stay unchanged.
 */

/** @typedef {{ label: string, href: string }} Cta */
/** @typedef {{ eyebrow: string, headline: string, subhead: string, primaryCta: Cta, secondaryCta: Cta }} HeroContent */
/** @typedef {{ id: string, value: string, label: string }} Credential */
/** @typedef {{ hero: HeroContent, credentials: Credential[] }} HomeContent */

// TODO(SCRUM-5): remove once the real endpoint is connected.
const PLACEHOLDER_HOME_CONTENT = {
  hero: {
    eyebrow: 'DIRECT · INNOVATIVE · FUTURE-FOCUSED',
    headline: 'Your Partner in Modern Investing.',
    subhead:
      'AXSA is an independent investment management firm serving clients globally. We provide end-to-end investment services to',
    primaryCta: { label: 'Explore Our Expertise', href: '#expertise' },
    secondaryCta: { label: 'Speak With Us', href: '#contact' }
  },
  credentials: [
    { id: 'mas', value: 'MAS', label: 'Licensed & regulated' },
    { id: 'licence', value: 'CMS101290', label: 'Capital Markets Services Licence' },
    { id: 'expertise', value: '06', label: 'Core expertise areas' },
    { id: 'reach', value: 'Global', label: 'Accredited investors worldwide' }
  ]
}

const asText = (value) => (typeof value === 'string' ? value.trim() : '')

const normalizeCta = (cta) => ({
  label: asText(cta?.label),
  href: asText(cta?.href) || '#'
})

/**
 * Validate and shape raw data so components can rely on it.
 * @param {unknown} raw
 * @returns {HomeContent}
 */
export function normalizeHomeContent(raw) {
  const hero = raw?.hero ?? {}
  const credentials = Array.isArray(raw?.credentials) ? raw.credentials : []

  return {
    hero: {
      eyebrow: asText(hero.eyebrow),
      headline: asText(hero.headline),
      subhead: asText(hero.subhead),
      primaryCta: normalizeCta(hero.primaryCta),
      secondaryCta: normalizeCta(hero.secondaryCta)
    },
    credentials: credentials
      .map((item, index) => ({
        id: asText(item?.id) || `credential-${index}`,
        value: asText(item?.value),
        label: asText(item?.label)
      }))
      .filter((item) => item.value)
  }
}

/**
 * Fetch home page content.
 * @returns {Promise<HomeContent>}
 */
export async function fetchHomeContent() {
  // TODO(SCRUM-5): replace with the real request, e.g.
  // const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/home`)
  // if (!response.ok) throw new Error(`Home content request failed (${response.status})`)
  // return normalizeHomeContent(await response.json())
  return normalizeHomeContent(structuredClone(PLACEHOLDER_HOME_CONTENT))
}
