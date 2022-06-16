import styled, { css } from 'styled-components'

const FlexStyleTypes = {
    navbar: css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `,
    /* TODO: Решить проблему DRY */
    chat: css`
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `,
    centered: css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    default: css`
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;
    `,
}

const Flex = styled.div`
    display: flex;
    ${({ type = 'default' }) => FlexStyleTypes[type]}
    background: ${({ background }) => background || 'inherit'};
    margin:  ${({ margin }) => margin || '0'}; // Ед. измерения указывается в пропсах
    padding:  ${({ padding }) => padding || '0'};
    height:  ${({ height }) => height || 'auto'};
    width:  ${({ width }) => width || 'auto'};
    border-radius:  ${({ radius }) => radius || '0'};
`;

export default Flex
