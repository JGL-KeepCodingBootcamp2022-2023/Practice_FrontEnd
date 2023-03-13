export function buildGreeting(name) {
  const paragraph = document.createElement('p')
  paragraph.innerHTML = `Logged as: <span>${name}</span>`
  return paragraph
}

export function buildGreeting2(name) {
  const paragraph = document.createElement('p')
  paragraph.innerHTML = `Welcome <span>${name}</span>!`
  return paragraph
}