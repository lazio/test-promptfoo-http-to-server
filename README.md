# OpenAI Proxy Server with Patrick's Personality
1. Clone the repository

2. Install dependencies:
npm install

3. Create a `.env` file in the root directory and add your OpenAI API key:
OPENAI_API_KEY=your_openai_api_key_here

## Running the Server

Start the development server with:
npm run dev

The server will run on `http://localhost:3000` by default.

## Testing with Promptfoo

1. Install Promptfoo globally (if not already installed):
npm install -g promptfoo

2. Run the evaluation:
npx promptfoo@latest eval

3. View the results in a web interface:
npx promptfoo@latest view