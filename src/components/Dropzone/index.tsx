import React, { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiCamera } from "react-icons/fi"

import { Container } from "./styles"

interface Props {
  onFileUploaded: (file: Buffer) => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("")

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0] as File
      const fileUrl = URL.createObjectURL(file)
      setSelectedFileUrl(fileUrl)
      onFileUploaded(Buffer.from(await file.arrayBuffer()))
    },
    [onFileUploaded]
  )
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*"
  })

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <>
          <img src={selectedFileUrl} alt="Point thumbnail" />
          <FiCamera />
        </>
      ) : (
        <FiCamera />
      )}
    </Container>
  )
}

export default Dropzone
