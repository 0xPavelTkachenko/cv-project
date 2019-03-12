const importAll = function importAllFiles(r) {
  r.keys().forEach(r);
};

importAll(require.context('.', true, /\.js$/));
importAll(require.context('.', true, /\.styl$/));
importAll(require.context('.', true, /\.(png|ico)$/));
