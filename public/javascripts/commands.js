function build() {
  const value = document.getElementsByClassName('queryKey')[0].value
  const element = document.createElement('DIV')
  element.innerText = value
  document.getElementById('rawRequest').innerText = `
    Header: ${headerValue}
    Body: ${bodyValue}
  `
}
