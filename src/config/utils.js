export const getCookie = name => {
  let match = document.cookie.match(new RegExp(name + '=([^;]+)'))
  if (match) {
    return decodeURI(match[1])
  }
}
