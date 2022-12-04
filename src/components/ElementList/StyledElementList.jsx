import styled from '@emotion/styled';

export const ElementList = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
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
  margin-top: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.purple};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  width: 22px;
  background-color: #afa3d8;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  cursor: pointer;
  transition: color 250ms, color 250ms;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.red};
  }
`;
