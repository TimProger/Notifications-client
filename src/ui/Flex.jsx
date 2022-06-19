import styled, { css } from 'styled-components'

const FlexStyleTypes = {
    navbar: css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0
    `,
    label: css`
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 5px;
    `,
    chat: css`
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `,
    messages: css`
        min-height: 100px;
        max-height: 100px;
        max-width: 260px;
        flex-direction: column;
        align-items: stretch;
        overflow: scroll;
        overflow-x: hidden;
        margin-top: 10px;
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
    background: ${({ background }) => background || 'inherit'};
    margin:  ${({ margin }) => margin || '0'}; // Ед. измерения указывается в пропсах
    padding:  ${({ padding }) => padding || '0'};
    height:  ${({ height }) => height || 'auto'};
    width:  ${({ width }) => width || 'auto'};
    border-radius:  ${({ radius }) => radius || '0'};
    ${({ type = 'default' }) => FlexStyleTypes[type]}
`;

export default Flex
