import { ComponentChildren } from "preact";
import { Manifest } from "vite";

// const src = (name: string) => `https://www.unpkg.com/@ibgrav/design-system@${version}/dist/assets/${name}`;

interface DocumentProps {
  children: ComponentChildren;
  manifest?: Manifest;
}

export function Document({ children, manifest }: DocumentProps) {
  let script = "src/client/index.tsx";
  let styles: string[] = [];

  if (manifest) {
    const entry = manifest?.["src/client/index.tsx"];
    script = entry.file;
  }

  return (
    <>
      <html>
        <head>
          {/* <link rel="preload" crossOrigin="anonymous" href={src("index.css")} as="style" />
          <link rel="preload" crossOrigin="anonymous" href={src("client.js")} as="script" /> */}

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Harvard Business School</title>

          {styles.map((href, i) => (
            <link key={i} href={`/${href}`} crossOrigin="anonymous" rel="stylesheet" />
          ))}
        </head>
        <body>
          {children}

          <script src={`/${script}`} type="module"></script>
        </body>
      </html>
    </>
  );
}
