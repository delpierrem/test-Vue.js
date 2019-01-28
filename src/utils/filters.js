export function price(value) {
  return `${value} €`
}
// title
export function smallTitle(text) {
  return `${text.substring(0, 7)}..`
}
export function mediumTitle(text) {
  return `${text.substring(0, 18)}..`
}
// text
export function mediumText(text) {
  return `${text.substring(0, 150)}..`
}
