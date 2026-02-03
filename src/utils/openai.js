import OpenAI from 'openai';
import {OPENAI_API_KEY} from './constant.js';

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
  // This is the default and can be omitted
});

// const response = await client.responses.create({
//   model: 'gpt-5.2',
//   instructions: 'You are a coding assistant that talks like a pirate',
//   input: 'Are semicolons optional in JavaScript?',
// });

export default client;
