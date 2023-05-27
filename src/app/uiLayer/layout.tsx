// import './mapbox-gl.css';
// import './cluster.css';

import styled from "@emotion/styled"

const UiLayerLayoutStyled = styled.div`
  position:absolute;
  z-index:2;
`

export default function UiLayerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <UiLayerLayoutStyled>{children}</UiLayerLayoutStyled>
  )
}
