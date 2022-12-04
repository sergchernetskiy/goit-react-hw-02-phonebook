import styled from '@emotion/styled';

export const ElementList = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]}px;
`;

export const Circle = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
  width: 7px;
  height: 7px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.purple};
`;

export const Text = styled.p`
  margin-right: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.purple};
`;

export const Button = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.muted};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.shadows.third};
  cursor: pointer;
  transition: color 250ms, background-color 250ms;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.red};
  }
`;
