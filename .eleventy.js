const pluginSass = require("eleventy-plugin-sass")

module.exports = eleventyConfig => {
  // Process SCSS files into CSS
  eleventyConfig.addPlugin(pluginSass)

  // Copy over GOV.UK assets
  eleventyConfig.addPassthroughCopy("assets");
  
  eleventyConfig.addPassthroughCopy({ "node_modules/lbh-frontend/lbh/assets": "assets" });

}