module.exports = function (eleventyConfig) {
  // Sao chép nguyên các thư mục tài nguyên sang web đã build
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/uploads");

  // Bộ lọc định dạng ngày kiểu Việt Nam: dd/mm/yyyy
  eleventyConfig.addFilter("dateVi", function (value) {
    const d = new Date(value);
    const p = (n) => String(n).padStart(2, "0");
    return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear();
  });

  // Ngày chuẩn ISO cho sitemap
  eleventyConfig.addFilter("dateISO", function (value) {
    return new Date(value).toISOString();
  });

  // Cắt nội dung làm tóm tắt dự phòng (nếu bài không nhập tóm tắt)
  eleventyConfig.addFilter("excerptFallback", function (content, max) {
    const text = String(content || "").replace(/<[^>]+>/g, "").trim();
    const n = max || 140;
    return text.length > n ? text.slice(0, n) + "…" : text;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
