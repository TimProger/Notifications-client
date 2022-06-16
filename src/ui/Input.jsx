import styled from 'styled-components'

export const TextInputStyled = styled.input.attrs({ type: 'text' })`
    color: ${({ color }) => color || 'black'};
    background: ${({ background }) => background || 'white'};
    border: 1px solid ${({ border }) => border || 'black'};
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px; 
    &, &::placeholder{
        font-family: 'action_man';
    }
`

export const SubmitInputStyled = styled.button.attrs({ type: 'submit' })`
    color: ${({ color }) => color || 'black'};
    background: ${({ background }) => background || 'white'};
    border: 1px solid ${({ border }) => border || 'black'};
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px;
`
