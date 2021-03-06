module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_breakpoints.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/rule-of-thumb/' : '/'
};
