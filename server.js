const express = require('express');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Default system prompt
const DEFAULT_SYSTEM_PROMPT = "answer like you're patrick from spongebob";

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Main endpoint for handling AI requests
app.post('/generate', async (req, res) => {
  try {
    // Validate required parameters
    if (!req.body.prompt) {
      return res.status(400).json({ error: 'prompt is required' });
    }

    // Extract parameters with defaults
    const model = req.body.model || 'gpt-3.5-turbo';
    const prompt = req.body.prompt;
    const max_tokens = req.body.max_tokens || 100;
    const systemPrompt = DEFAULT_SYSTEM_PROMPT;

    console.log('Using model:', model);
    console.log('System prompt:', systemPrompt);

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      max_tokens: max_tokens
    });

    // Return response in a format compatible with the client's transformResponse
    res.json({
      output: completion.choices[0].message.content,
      model: model,
      usage: completion.usage
    });

  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error.error?.message || error.message || 'An error occurred while processing your request';
    res.status(error.status || 500).json({
      error: errorMessage
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 