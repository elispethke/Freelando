import styled from '@emotion/styled';

const StyledDiv = styled.div`
padding: ${props => props.theme.spacing.l};
background: ${props => props.theme.color.secondary.a};
border: 1px solid;
border-color: ${props => props.theme.color.primary.a};
border-radius: ${props => props.theme.spacing.s};
`;

export const Card = ({ children }) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}