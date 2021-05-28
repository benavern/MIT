(function setAuthorInfo() {
  const $date = document.querySelector('span.date')
  const $authorName = document.querySelector('span.author .author__name')
  const $authorEmail = document.querySelector('span.author .author__email')
  const $authorWebsite = document.querySelector('span.author .author__website')

  const date = (new Date()).getFullYear()
  const searchParams = new URLSearchParams(window.location.search)

  const authorName = searchParams.get('name')
  const authorEmail = searchParams.get('email')
  const authorWebsite = searchParams.get('website')
  const dateFrom = searchParams.get('from')

  $date.textContent = dateFrom  ? `${dateFrom} - ${date}`: date

  $authorName.textContent = authorName || ''

  $authorEmail.innerHTML = authorEmail 
    ? ` &lt;<a href="mailto:${authorEmail}">${authorEmail}</a>&gt;`
    : ''

  const computedAuthorWebsite = authorWebsite.startsWith('http')
    ? authorWebsite
    : `https://${authorWebsite}`

  $authorWebsite.innerHTML = authorWebsite
    ? ` (<a href="${computedAuthorWebsite}">${authorWebsite}</a>)`
    : ''
})()
