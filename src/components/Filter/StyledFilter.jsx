import styled from '@emotion/styled';

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.purple};
  padding-left: ${p => p.theme.space[4]}px;
  cursor: pointer;
  &:focus-within {
    color: ${p => p.theme.colors.pink};
  }
`;

export const Input = styled.input`
  display: block;
  padding: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[0]}px;
  width: 300px;
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: #afa3d8;

  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.pink};
    border-radius: ${p => p.theme.radii.normal};
  }
`;
