import fs from 'fs/promises';

export default async function handler(req, res) {
  try {
    const files = await fs.readdir('blogdata');

    const allBlogs = await Promise.all(
      files.map(async (file) => {
        const filePath = `blogdata/${file}`;
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
      })
    );

    res.status(200).json(allBlogs);
  } catch (error) {
    console.error('Error reading blog data:', error);
    res.status(500).json({ error: 'Failed to fetch blog data' });
  }
}