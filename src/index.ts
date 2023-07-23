import express from 'express';
import openAPI from '../src/openai_route/opeai_api'

const app = express();
app.use('/api', openAPI)


app.listen(4040, ()=> {
    console.log('server started')
})

export default app;