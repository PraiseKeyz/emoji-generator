# Emoji Translator API

A RESTful API service that translates between emojis and their text descriptions. This service provides two-way translation: from emoji to text description and from text description to emoji.

## Features

- Convert emoji to text description
- Convert text description to emoji
- RESTful API endpoints
- Input validation
- Error handling

## Technologies Used

- Node.js
- TypeScript
- Express.js
- emoji-dictionary

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code
2. Install dependencies:
```bash
npm install
```
## Usage
Run the server
```bash
npm run dev
```
### APi Endpoints

1. Convert Emoji to Text
- Endpoint: `POST /emoji-to-text`
- Request Body: `{ "emoji": "😄" }`
- Response: `{ "text": "smiling" }`

2. Convert Text to Emoji
- Endpoint: `POST /text-to-emoji`
- Request Body: `{ "text": "smiling" }`
- Response: `{ "emoji": "😄" }`

#### Error Responses
- `400 Bad Request`: Invalid input or missing required fields

### Project Structure

emoji_translator/
├── src/
│   ├── routes/
│   │   └── translateRoutes.ts
│   ├── types/
│   │   └── emoji-dictionary.d.ts
        └── EmojiRequest.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md

### License
This project is licensed under the MIT License.

This README provides:
- Project overview
- Setup instructions
- API documentation
- Error handling information
- Project structure
- Basic contribution guidelines

You can customize this README further by adding:
- Specific version requirements
- More detailed configuration options
- Deployment instructions
- Testing instructions (when you add tests)
- More examples of API usage