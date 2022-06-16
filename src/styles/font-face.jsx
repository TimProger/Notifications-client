import { createGlobalStyle } from 'styled-components';
import ActionManFont from '../assets/fonts/Mulish-Regular.woff'

const FontFace = createGlobalStyle`
    @font-face {
        font-family: 'action_man';
        src: url(${ActionManFont}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

export default FontFace
