export default function getGuideUrl(url: string) {
  return url
    .toLocaleLowerCase()
    .split(' ')
    .join('-')
    .replace(/[^a-zA-Z0-9-._~/?#@!$&'()*+,;=%]/, '')
}
