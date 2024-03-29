import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Good News Sans';
        /* font-style: normal; */
        /* font-weight: 100; */
        /* font-display: swap; */
        src: url('./fonts/f87b9a56dfa28adb72753d6ba66c437d.ttf') format('truetype'), url('./fonts/f87b9a56dfa28adb72753d6ba66c437d.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }      

      /* latin */
      @font-face {
        font-family: 'Google Sans Text Regular';
        /* font-style: normal; */
        /* font-weight: 100; */
        /* font-display: swap; */
        src: url('./fonts/41cdafd19e156a1f74759f9c88b878ff.ttf') format('truetype'), url('./fonts/41cdafd19e156a1f74759f9c88b878ff.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }         
      `}
  />
)

export default Fonts