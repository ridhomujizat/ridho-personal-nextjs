import { css } from "styled-components";

const variables = css`
  :root {
    --nav:  rgba(10, 25, 47, 0.85)
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-navy: #020c1b;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --dark-slate: #495670;
    --light-slate: #a8b2d1;
    --white: #e6f1ff;
    --main: #64ffda;
    --main-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #49C1C0;
    --green: #37bd9d;
    --red: #E53B46;
    --orange: #EB7247;

    --navy: #fff;
    --lightest-slate: #141414;
    --slate: #34363d;


    --font-sans: 'Poppins', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'Poppins',  sans-serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
