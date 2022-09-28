import { css } from 'styled-components'

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `
}
export const pc = (props) => {
  return css`
    @media only screen and (min-width: 700px) {
      ${props}
    }
  `
}
