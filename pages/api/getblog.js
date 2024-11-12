import fs from 'fs';

export default function handler(req, res) {
  const { slug } = req.query;

  fs.readFile(`blogdata/${slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found error
        res.status(404).json({ error: 'No such blog found' });
      } else {
        // Other errors
        console.error('Error reading blog data:', err);
        res.status(500).json({ error: 'Failed to fetch blog post' });
      }
    } else {
      try {
        const blogPost = JSON.parse(data);
        res.status(200).json(blogPost);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        res.status(500).json({ error: 'Failed to parse blog post' });
      }
    }
  });
}