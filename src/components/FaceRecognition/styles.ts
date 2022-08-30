import { Box, css, styled, Typography } from '@mui/material'

export const StatusMessage = styled(Typography)`
  font-family: 'Red Hat Display';
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
`

export const PositionWrapper = styled(Box)`
  position: relative;
  margin-top: 30px;
  width: 45%;
  height: auto;
  transform: scale(-1, 1);
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 70%;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 50px;
    width: 100%;
  }
`

const svgMaskBackround = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="black" />
</svg>
`.replaceAll('\n', '').replaceAll('<', '%3C').replaceAll('>', '%3E').replaceAll('"', '\'');

export const FaceCamera = styled('div')<{
  debug?: boolean;
}>`
  margin: 0 auto;
  width: auto;
  height: auto;

  ${({debug}) => !debug && css`
    -webkit-mask-image: url( "data:image/svg+xml,${svgMaskBackround}");
    mask-image: url( "data:image/svg+xml,${svgMaskBackround}");
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: auto 77%;
    mask-size: auto 77%;
  `}
`

export const IndicatorContainer = styled('div')`
  position: absolute;
  height: 89%;
  aspect-ratio: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`
