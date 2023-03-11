export function buildGreeting(name) {
    const paragraph = document.createElement('p')
    paragraph.textContent = `Welcome to Alapop, ${name} !`
    return paragraph
  }
  