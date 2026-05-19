import axios from "axios"

export default async function handler(req, res) {

  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    {
      headers: {
        "Accept-Encoding": "*",
      },
    }
  )

  res.status(200).json(response.data)
}
