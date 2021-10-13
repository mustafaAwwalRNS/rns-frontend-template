import styled, { css } from "styled-components";

const commonCss = css`
  margin: 0;
  padding: 0;
  ${({
    theme: {
      colors: {
        text: { main },
      },
    },
  }) => ({ color: main })}
`;

export const H1 = styled.h1`
  ${commonCss}
`;

export const H2 = styled.h2`
  ${commonCss}
`;

export const H3 = styled.h3`
  ${commonCss}
`;

export const H4 = styled.h4`
  ${commonCss}
`;

export const H5 = styled.h5`
  ${commonCss}
`;

export const H6 = styled.h6`
  ${commonCss}
`;

export const Secondary = styled.span`
  ${({
    theme: {
      colors: { secondary },
    },
  }) => ({ color: secondary })}
`;

export const Default = styled.span`
  ${commonCss}
`;
