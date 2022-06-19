import styled, { css } from 'styled-components'

const TextStyleTypes = {
    h1: css`
        font-size: 20px;
    `,
    h2: css`
        font-size: 16px;
    `,
    p: css`
        font-size: 14px;
    `,
    navbar: css`
        font-size: 20px;
        padding: 20px;
    `,
}

const TextStyled = styled.p`
    ${({ type = 'p' }) => TextStyleTypes[type]}
    color: ${({ color }) => color};
        font-family: 'action_man';
`

export default TextStyled;
