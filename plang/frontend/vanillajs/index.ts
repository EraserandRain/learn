import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { readFileSync } from 'fs'
import { layout } from './src/utils/layout'

const app = new Elysia()
  .use(html())
  .get('/', () => {
    const content = readFileSync('index.html', 'utf-8')
    return layout(content)
  })
  .get('/node_modules/*', ({ params }) => {
    const path = params['*']
    return new Response(
      readFileSync(`node_modules/${path}`, 'utf-8'),
      {
        headers: {
          'Content-Type': path.endsWith('.css') ? 'text/css' : 'text/javascript'
        }
      }
    )
  })
  .get('/public/*', ({ params }) => {
    const path = params['*']
    return new Response(
      readFileSync(`public/${path}`, 'utf-8'),
      {
        headers: {
          'Content-Type': path.endsWith('.css') ? 'text/css' : 'text/javascript'
        }
      }
    )
  })
  .listen(3000)

console.log(`🦊 Server is running at http://localhost:${app.server?.port}`)