import { isArray } from 'lodash'

export const jsonToParagraphs = (body) => {
  let paragraphs = []
  if (typeof body === 'string') {
    paragraphs = body.split('\n')
  }
  if (isArray(body)) {
    paragraphs = body
  }

  return paragraphs.map((paragraph, index) => (
    <span key={index}>
      <p>{paragraph}</p>
      <br />
    </span>
  ))
}
