import React from 'react'
import _get from 'lodash.get'

const css = style => props => {
  const theme = props.theme || props
  if (typeof style === 'string') return _get(theme, style)
  const styles = []
  for (const key in style) {
    const value = style[key]
    if (!value) continue
    if (typeof value === 'function') {
      styles.push({ [key]: value(theme) })
    } else if (typeof value === 'object') {
      styles.push(css(value)(props))
    } else {
      styles.push({ [key]: value })
    }
    // if (typeof value !== 'object' || Array.isArray(value)) continue
  }
  return styles
}

const get = (strings = [], ...expressions) => theme => {
  console.log('get', strings, expressions, theme)
  if (typeof strings === 'string') return _get(theme, strings, ...expressions)
  const result = [ strings[0] ]
  expressions.forEach((exp, i) => {
    const val = _get(theme, exp, exp)
    // const val = typeof exp === 'function' ? exp(theme) : exp
    result.push(val, strings[i + 1])
  })
  return result.join('')
}

css.color = (paths, fallback) => theme => _get(theme, 'colors.' + paths, fallback)

export default props =>
  <>
    <div
      css={css({
        padding: 32,
        border: get`1px solid ${'colors.primary'}`,
        fontSize: get('fontSizes.5', 96),
      })}>
      Tomato
    </div>
  </>
