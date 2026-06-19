import url from 'node:url';
import path from 'node:path';
console.log('import', import.meta)
console.log(url.fileURLToPath(import.meta.url))
console.log(path.dirname(url.fileURLToPath(import.meta.url)))
// import.meto