import styled, { css } from 'styled-components'

const TextStyleTypes = {
    h1: css`
        font-size: 20px;
    `,
    h2: css`
        font-size: 16px;
    `,
    p: css`
        font-size: 12px;
    `,
}

const TextStyled = styled.p`
    ${({ type = 'p' }) => TextStyleTypes[type]}
    color: ${({ color }) => color};
`

export default TextStyled;
