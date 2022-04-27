module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/git',
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          'zip -qq -r logseq-immersion-theme-${nextRelease.version}.zip immersion.png *.css readme.md LICENSE package.json',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'logseq-immersion-theme-*.zip',
      },
    ],
  ],
};
