import express from 'express';
import type {Request, Response} from 'express';
import emoji from 'emoji-dictionary';


const router = express.Router();

router.post('/emoji-to-text', (req: Request, res: Response) => {
  const { emoji: emojiChar } = req.body;

  if (!emojiChar || typeof emojiChar !== 'string') {
    res.status(400).json({ error: 'Invalid input: emoji must be a string.' });
    return
  }

  const name = emoji.getName(emojiChar);

  if (name) {
    res.status(200).json({ text: name });
  } else {
    res.status(400).json({ error: 'Invalid input: Not a recognized emoji.' });
  }
});

router.post('/text-to-emoji', (req: Request, res: Response) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
   res.status(400).json({ error: 'Invalid input: text must be a string.' });
   return
  }

  const unicode = emoji.getUnicode(text);

  if (unicode) {
    res.status(200).json({ emoji: unicode });
  } else {
    res.status(400).json({ error: 'Invalid input: No matching emoji found for text.' });
  }
});

export default router;