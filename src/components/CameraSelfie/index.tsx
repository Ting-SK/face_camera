import { FC, useState, useCallback } from 'react'
import { Box, Modal, Stack } from '@mui/material'
import { FaceRecognition } from '../FaceRecognition'
import { FailurePhoto, SuccessPhoto } from '../../assets'
import {
  CameraSelfieWrapper,
  LabelInput,
  ErrorLabel,
  CloseButton,
  CloseLabel,
  CloseIconWrap,
  ModalWrap,
} from './styles'

const statusIcon: {
  success: string
  error: string
} = {
  success: SuccessPhoto,
  error: FailurePhoto,
}

export const CameraSelfie: FC<{
  input: any
  meta: any
  label: string
  icon: string
  width?: string
  height?: string
}> = ({ input, meta, label, icon, width, height }) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback(() => setOpen(false), [])

  const handleFinish = useCallback(
    (files: File[]) => {
      input.onChange({ inputData: files })
      handleClose()
    },
    [input, handleClose]
  )

  const status = input.value
    ? 'success'
    : meta?.error && meta?.touched
    ? 'error'
    : 'pending'

  return (
    <>
      <CameraSelfieWrapper
        status={status}
        onClick={handleOpen}
        width={width}
        height={height}
      >
        <Stack
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          gap='8px'
        >
          <img
            src={status === 'pending' ? icon : statusIcon[status]}
            alt='selfie'
          />
          <LabelInput status={status}>{label}</LabelInput>
        </Stack>
      </CameraSelfieWrapper>
      {meta.error && (
        <Box mt={1}>
          <ErrorLabel>{meta.touched ? meta.error : ''}</ErrorLabel>
        </Box>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          '& .MuiBackdrop-root': {
            background: 'none',
          },
          background: '#1C1F21',
          border: '22px solid #CF0000',
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <CloseButton onClick={handleClose}>
            <CloseLabel>Close</CloseLabel>
            <CloseIconWrap />
          </CloseButton>
          <ModalWrap flexDirection='column' alignItems='center'>
            <FaceRecognition onFinish={handleFinish} />
          </ModalWrap>
        </Box>
      </Modal>
    </>
  )
}
