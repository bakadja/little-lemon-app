import styled from "styled-components";
// import { media } from "./media";
import { layoutMixin, gridItemMixin, navMixin } from "./mixins";

export const RootLayout = styled.div`
${layoutMixin}
`;

export const Container = styled.div`
${gridItemMixin}
${props => props.as === 'nav' && navMixin}
`;

