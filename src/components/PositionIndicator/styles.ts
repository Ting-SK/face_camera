import { styled, css } from '@mui/material'

export const MainWrapper = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const rotateByPosition: any = {
  right: '270deg',
  bottom: '180deg',
  left: '90deg',
}

export const PartWrapper = styled('div')<{
  position: string
  status: 'none' | 'empty' | 'full'
  emptyBefore?: boolean
  emptyAfter?: boolean
  debug?: boolean
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  svg {
    width: 100%;
    height: 100%;
    rect {
      height: ${({ debug }) => (debug ? '3px' : '0px')};
      transition: height 0.5s cubic-bezier(0.47, 1.64, 0.41, 0.8);
    }
    ${({ position }) => {
      if (position in rotateByPosition) {
        return css`
          transform: rotate(${rotateByPosition[position]});
        `
      }
      return ''
    }}
    ${({ status, emptyBefore, emptyAfter }) => {
      if (status === 'empty') {
        return css`
          rect {
            height: 10px;
          }
        `
      }
      if (status === 'full') {
        const result = [
          css`
            rect {
              height: 25px;
            }
          `,
        ]
        if (emptyBefore) {
          result.push(css`
            rect.start1 {
              height: 13px;
            }
            rect.start2 {
              height: 16px;
            }
            rect.start3 {
              height: 19px;
            }
            rect.start4 {
              height: 22px;
            }
          `)
        }
        if (emptyAfter) {
          result.push(css`
            rect.end1 {
              height: 13px;
            }
            rect.end2 {
              height: 16px;
            }
            rect.end3 {
              height: 19px;
            }
            rect.end4 {
              height: 22px;
            }
          `)
        }

        return result
      }
      return ''
    }}
  }
`
