import { Button, IconButton, Stack, styled, Typography } from '@mui/material'
import { CloseIcon } from '../MuiIcons'

type TStatus = {
  status: 'success' | 'error' | 'pending'
  width?: string
  height?: string
}

export const CameraSelfieWrapper = styled(Button)<TStatus>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '112px'};
  background: ${({ status }) =>
    status === 'pending'
      ? '#ffffff'
      : status === 'success'
      ? 'rgba(44, 196, 105, 0.1)'
      : 'rgba(207, 0, 0, 0.1)'};
  border: ${({ status }) =>
    status === 'pending'
      ? '1px dashed #8D959F'
      : status === 'success'
      ? '1px solid #2CC469'
      : '1px solid #CF0000'};
  border-radius: 14px;
  cursor: pointer;
`

export const LabelInput = styled(Typography)<TStatus>`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: none;
  color: ${({ status }) =>
    status === 'pending'
      ? '#8D959F'
      : status === 'success'
      ? '#2CC469'
      : '#CF0000'};
`

export const ErrorLabel = styled(Typography)`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #cf0000;
`

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 11px;
  right: 18px;
  z-index: 10;
`

export const CloseLabel = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`

export const CloseIconWrap = styled(CloseIcon)`
  position: relative;
  top: 2px;
  margin-left: 10px;
  width: 24px;
  height: 24px;
`

export const ModalWrap = styled(Stack)`
  width: 100%;
  height: calc(100vh - 38px);
`
