module.exports = {
  publicPath: '',

  // https://velog.io/@yjok/Vue-%EB%B0%B0%ED%8F%AC-%ED%9B%84-static-filecss-js...%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EC%A7%80-%EB%AA%BB%ED%95%98%EB%8A%94-%EC%98%A4%EB%A5%98
  "transpileDependencies": [
    'vuetify'
  ],

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: false,
      region: 'ap-northeast-2',
      bucket: 'food-recipe-project',
      createBucket: false,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: true,
      cloudfrontId: "E7HNIOR9RUVUQ",
      cloudfrontMatchers: "/*",      
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5
    }
  }
};
