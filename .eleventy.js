module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/_data");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/js");

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'partials_layouts'
        }
    };
};
