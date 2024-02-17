import Plausible from 'plausible-tracker'

const plausible = Plausible({
  domain: 'vr.ivanik.ru',
  apiHost: 'https://plausible.ivanik.ru',
  trackLocalhost: true
});

export function trackPageView(props) {
    plausible.trackPageview({props})
}

export function trackEvent(name, props) {
    plausible.trackEvent(name, {props})
}
