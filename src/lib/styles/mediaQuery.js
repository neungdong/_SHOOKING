const customMediaQuery = (minWidth) => `
  @media (min-width: ${minWidth}px)
`;

export const mediaQuery = {
  custom: customMediaQuery,
  mobile: customMediaQuery(500),
  tablet: customMediaQuery(768),
  desktop: customMediaQuery(1200),
};
