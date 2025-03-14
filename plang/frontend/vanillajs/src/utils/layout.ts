import { initializeSliders } from '../sliders'

export function layout(content: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Slider Demo</title>
        <link rel="stylesheet" href="/node_modules/nouislider/dist/nouislider.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="/public/style.css">
    </head>
    <body>
        ${content}
        <script src="/node_modules/nouislider/dist/nouislider.js"></script>
        <script>
          ${initializeSliders.toString()}
          document.addEventListener('DOMContentLoaded', () => {
            try {
              initializeSliders();
            } catch (error) {
              console.error('Error initializing sliders:', error);
            }
          });
        </script>
    </body>
    </html>
  `
} 