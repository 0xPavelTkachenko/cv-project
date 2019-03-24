import './favicon.ico';
import './manifest.json';

const importAll = function importAllFiles(r) {
  r.keys().forEach(r);
};

importAll(require.context('.', true, /\.styl$/));
