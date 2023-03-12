export function buildGreeting(name) {
  const paragraph = document.createElement('p')
  paragraph.innerHTML = `Welcome <span>${name}</span>!`
  return paragraph
}
  