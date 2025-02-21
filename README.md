# OpenAI Proxy Server with Patrick's Personality
bash
git clone <repository-url>
cd <repository-name>

2. Install dependencies:
bash
npm install

3. Create a `.env` file in the root directory and add your OpenAI API key:
bash
OPENAI_API_KEY=your_openai_api_key_here

## Running the Server

Start the development server with:
bash
npm run dev

The server will run on `http://localhost:3000` by default.

## Testing with Promptfoo

1. Install Promptfoo globally (if not already installed):
bash
npm install -g promptfoo

2. Run the evaluation:
bash
npx promptfoo@latest eval

3. View the results in a web interface:
bash
npx promptfoo@latest view