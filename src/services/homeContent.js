/**
 * Home page content service.
 *
 * Every piece of home page data that depends on SCRUM-5 (API) goes through this module.
 * Until SCRUM-5 is done, it returns placeholder data shaped like the Figma design.
 * To connect the real API: set USE_PLACEHOLDER to false, confirm the endpoint path from SCRUM-5,
 * and adjust normalizeHomeContent() to map the real response. Nothing else needs to change.
 */

const USE_PLACEHOLDER = true

// Base URL comes from the environment (e.g. VITE_API_BASE_URL in .env.local); never hard-code hosts or keys.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

// TODO(SCRUM-5): assumed endpoint; replace with the path defined in SCRUM-5.
const HOME_CONTENT_ENDPOINT = '/api/home'

/**
 * @typedef {Object} HeroAction
 * @property {string} label
 * @property {string} href
 * @property {'primary'|'secondary'} variant
 *
 * @typedef {Object} HeroContent
 * @property {string} eyebrow
 * @property {string} headline
 * @property {string} subhead
 * @property {HeroAction[]} actions
 *
 * @typedef {Object} Credential
 * @property {string} id
 * @property {string} value
 * @property {string} label
 *
 * @typedef {Object} HomeContent
 * @property {HeroContent} hero
 * @property {Credential[]} credentials
 */

/** @type {HomeContent} */
const PLACEHOLDER_HOME_CONTENT = {
  hero: {
    eyebrow: 'DIRECT · INNOVATIVE · FUTURE-FOCUSED',
    headline: 'Your Partner in Modern Investing.',
    subhead:
      'AXSA is an independent investment management firm serving clients globally. We provide end-to-end investment services to',
    actions: [
      { label: 'Explore Our Expertise', href: '#expertise', variant: 'primary' },
      { label: 'Speak With Us', href: '#contact', variant: 'secondary' }
    ]
  },
  credentials: [
    { id: 'mas', value: 'MAS', label: 'Licensed & regulated' },
    { id: 'licence', value: 'CMS101290', label: 'Capital Markets Services Licence' },
    { id: 'expertise', value: '06', label: 'Core expertise areas' },
    { id: 'reach', value: 'Global', label: 'Accredited investors worldwide' }
  ]
}

const asString = (value) => (typeof value === 'string' ? value.trim() : '')

/**
 * Maps an API response to the shape the home page components expect.
 * @param {any} data
 * @returns {HomeContent}
 */
export function normalizeHomeContent(data) {
  const hero = data?.hero ?? {}
  const actions = Array.isArray(hero.actions) ? hero.actions : []
  const credentials = Array.isArray(data?.credentials) ? data.credentials : []

  return {
    hero: {
      eyebrow: asString(hero.eyebrow),
      headline: asString(hero.headline),
      subhead: asString(hero.subhead),
      actions: actions
        .filter((action) => asString(action?.label))
        .map((action, index) => ({
          label: asString(action.label),
          href: asString(action.href) || '#',
          variant: action.variant === 'secondary' || index > 0 ? 'secondary' : 'primary'
        }))
    },
    credentials: credentials
      .filter((item) => asString(String(item?.value ?? '')))
      .map((item, index) => ({
        id: asString(item.id) || `credential-${index}`,
        value: asString(String(item.value)),
        label: asString(item.label)
      }))
  }
}

/**
 * Fetches the home page content.
 * @param {{ signal?: AbortSignal }} [options]
 * @returns {Promise<HomeContent>}
 */
export async function fetchHomeContent({ signal } = {}) {
  if (USE_PLACEHOLDER) {
    return normalizeHomeContent(structuredClone(PLACEHOLDER_HOME_CONTENT))
  }

  const response = await fetch(`${API_BASE_URL}${HOME_CONTENT_ENDPOINT}`, {
    headers: { Accept: 'application/json' },
    signal
  })

  if (!response.ok) {
    throw new Error(`Failed to load home content (HTTP ${response.status})`)
  }

  return normalizeHomeContent(await response.json())
}
