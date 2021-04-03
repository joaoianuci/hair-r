import React from "react"
import { Container, Footer } from "../styles/index"
import MoonLoader from "react-spinners/PulseLoader"

import Dropzone from "../components/Dropzone"
import { useMemo, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

interface APIResponse {
  precision: number
  type: string
}

const Home: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<Buffer>()
  const [loading, setLoading] = useState<boolean>(false)
  const [apiResponse, setApiResponse] = useState<APIResponse>()
  useMemo(() => {
    function onPhotoUpload() {
      if (selectedFile) {
        setLoading(true)
        axios
          .post("/api/upload", {
            file: selectedFile
          })
          .then((response) => {
            toast.success("Sucesso, aqui a classificação!")
            setApiResponse(response.data)
            setLoading(false)
          })
          .catch((err: Error) => {
            toast.error("Erro no processamento da imagem, tente outra!")
            setApiResponse({ precision: 0, type: "Indefinido" })
            setLoading(false)
          })
      }
    }
    onPhotoUpload()
  }, [selectedFile])
  return (
    <Container>
      <Dropzone onFileUploaded={setSelectedFile} />
      <Footer>
        {loading ? (
          <MoonLoader color="#FB743E" loading={loading} size={50} />
        ) : (
          <>
            {apiResponse ? (
              <>
                <p>Seu tipo de cabelo é: </p> <p>{apiResponse.type}</p>
              </>
            ) : (
              <p>Coloque sua foto</p>
            )}
          </>
        )}
      </Footer>
    </Container>
  )
}

export default Home
