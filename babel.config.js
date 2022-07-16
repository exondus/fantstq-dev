module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@/config': './config',
            '@/context': './context',
            '@/store': './store',
            '@/constants': './constants',
            '@/navigation': './navigation',
            '@/screens': './screens',
            '@/theme': './theme',
            '@/utils': './utils',
            '@/components': './components',
            '@/hooks': './hooks',
            '@/assets': './assets',
          },
        },
      ],
    ],
  };
};
