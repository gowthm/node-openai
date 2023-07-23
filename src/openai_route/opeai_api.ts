import experss from 'express';
const { Configuration, OpenAIApi } = require("openai");
import 'dotenv/config';

const router = experss.Router()

router.get('/search', async function(req, res) {
    // res.send('df')
    
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text);
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
    
})


export default router