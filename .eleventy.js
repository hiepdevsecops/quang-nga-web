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

  // Chuyển số hiển thị thành link gọi: "035 321 8558" -> "0353218558"
  eleventyConfig.addFilter("telLink", function (s) {
    return String(s == null ? "" : s).replace(/[^\d+]/g, "");
  });

  // Lấy ID video từ link YouTube (nhiều dạng: youtu.be, watch?v=, embed, shorts)
  eleventyConfig.addFilter("youtubeId", function (url) {
    if (!url) return "";
    const m = String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    return m ? m[1] : "";
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
