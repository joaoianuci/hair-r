import { VercelRequest, VercelResponse } from "@vercel/node"
import VisualRecognitionV3 from "watson-developer-cloud/visual-recognition/v3"

interface Classification {
  class: string
  score: number
}

interface BufferFile {
  data: Buffer
}

const classifier_ids = [process.env.CLASSIFIER_ID]
const threshold = 0.1
const visualRecognition = new VisualRecognitionV3({
  version: "2018-03-19",
  iam_apikey: process.env.IAM_APIKEY
})

export default (req: VercelRequest, res: VercelResponse) => {
  const file = req.body.file as BufferFile
  const params = {
    images_file: Buffer.from(file.data),
    classifier_ids: classifier_ids,
    threshold: threshold
  }
  const typesOfHair = {
    "1a": "Liso",
    "2a": "Ondulado",
    "3a": "Cacheado"
  }
  visualRecognition.classify(params, (err, response) => {
    if (err) {
      return res.status(400).json({ error: err })
    } else {
      const data = (response.images[0].classifiers[0]
        .classes[0] as unknown) as Classification
      return res
        .status(200)
        .json({ precision: data.score * 100, type: typesOfHair[data.class] })
    }
  })
}
