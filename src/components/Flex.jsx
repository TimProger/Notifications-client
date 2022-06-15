import styled from 'styled-components'

// Стилизованная компонента в которую нужно передать необходимые настройки
const Flex = styled.div`
    background: ${(props) => props.background || 'inherit'};
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    align-items:  ${(props) => props.align || 'stretch'};
    justify-content:  ${(props) => props.justify || 'stretch'};
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    margin:  ${(props) => props.margin || '0'};
    padding:  ${(props) => props.padding || '0'};
`;

export default Flex
