import React from 'react'
import styled from 'styled-components'

// const TextStyleTypes = {
//     h1: css`
//         font-size: 20px;
//         color: ${(props) => props.color};
//     `,
// }

const TextStyled = styled.p`
    font-size: 20px;
    color: ${(props) => props.color};
`

function Text(props) {
    return (
        <TextStyled {...props} />
    );
}

export default Text;
