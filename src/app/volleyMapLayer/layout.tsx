import './mapbox-gl.css';
import './cluster.css';
import styled from '@emotion/styled';

const VolleyMapLayerLayoutStyled = styled.div`
  position:absolute;
  z-index:1;
`
export default function VolleyMapLayerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <VolleyMapLayerLayoutStyled>{children}</VolleyMapLayerLayoutStyled>
  )
}
