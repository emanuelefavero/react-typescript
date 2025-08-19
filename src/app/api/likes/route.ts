import fs from 'fs/promises'
import path from 'path'

const filePath = path.join(process.cwd(), 'src/data/likes.json')

async function readLikes() {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

async function writeLikes(likes: number) {
  await fs.writeFile(filePath, JSON.stringify({ likes }, null, 2), 'utf-8')
}

// * GET likes
export async function GET() {
  try {
    const { likes } = await readLikes()
    return Response.json({ likes })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to read likes' }, { status: 500 })
  }
}

// * POST likes
export async function POST() {
  try {
    const { likes } = await readLikes()
    const newLikes = likes + 1 // Increment likes by 1
    await writeLikes(newLikes)
    return Response.json({ likes: newLikes })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to update likes' }, { status: 500 })
  }
}
