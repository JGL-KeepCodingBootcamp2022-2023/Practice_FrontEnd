export function buildGreeting(name) {
  const paragraph = document.createElement('p')
  paragraph.textContent = `Hola ${name} !`
  return paragraph
}
  