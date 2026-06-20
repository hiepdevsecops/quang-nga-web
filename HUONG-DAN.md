# Website QUANG NGA — Hướng dẫn sử dụng

Website tĩnh dựng bằng **Eleventy** + quản trị bài viết bằng **Decap CMS**, deploy miễn phí trên **Netlify**.
Nhẹ, nhanh, SEO tốt (mỗi bài viết là một trang HTML thật).

---

## 1. Chạy thử trên máy (xem trước)

Mở PowerShell tại thư mục `quang-nga-site` và gõ:

```
npm install      # chỉ cần chạy 1 lần đầu
npm start        # chạy web xem trước
```

Mở trình duyệt vào **http://localhost:8080/**. Sửa file rồi lưu là web tự cập nhật.
Bấm `Ctrl + C` trong PowerShell để dừng.

Muốn xuất ra web hoàn chỉnh (thư mục `_site`): `npm run build`.

---

## 2. Đổi thông tin trung tâm (số điện thoại, địa chỉ…)

Mở file: **`src/_data/site.js`** — sửa các dòng:

| Dòng | Ý nghĩa |
|------|---------|
| `phone` | Số gọi (viết liền, vd `0987654321`) — dùng cho nút Gọi |
| `phoneDisplay` | Số hiển thị cho đẹp (vd `0987 654 321`) |
| `zalo` | Số Zalo |
| `address` | Địa chỉ trung tâm |
| `area` | Khu vực phục vụ |
| `hours` | Giờ làm việc |
| `url` | Địa chỉ web thật (sau khi deploy) |

Sửa 1 chỗ này là đổi cho **toàn bộ website**.

---

## 3. Đưa web lên mạng (deploy) — làm 1 lần

### Bước A. Đưa code lên GitHub
1. Tạo tài khoản miễn phí tại https://github.com
2. Tạo repository mới (ví dụ tên `quang-nga-web`), để **Private** cũng được.
3. Trong PowerShell tại thư mục dự án, chạy lần lượt:
   ```
   git init
   git add .
   git commit -m "Khoi tao website Quang Nga"
   git branch -M main
   git remote add origin https://github.com/<TEN_CUA_BAN>/quang-nga-web.git
   git push -u origin main
   ```
   (Thay `<TEN_CUA_BAN>` bằng tên tài khoản GitHub.)

### Bước B. Kết nối Netlify
1. Tạo tài khoản miễn phí tại https://app.netlify.com (đăng nhập bằng GitHub cho nhanh).
2. Bấm **Add new site → Import an existing project → GitHub** → chọn repo `quang-nga-web`.
3. Netlify tự đọc file `netlify.toml`, để mặc định:
   - Build command: `npm run build`
   - Publish directory: `_site`
4. Bấm **Deploy**. Vài chục giây sau web chạy tại địa chỉ dạng `https://ten-ngau-nhien.netlify.app`.
   (Có thể đổi tên trong **Site settings → Change site name**.)

### Bước C. Bật trang quản trị đăng bài (Decap CMS)
1. Trong site trên Netlify, vào **Site settings → Identity** → bấm **Enable Identity**.
2. Vẫn ở Identity → **Services → Git Gateway** → bấm **Enable Git Gateway**.
3. Phần **Registration**, nên chọn **Invite only** (chỉ người được mời mới đăng nhập được).
4. Tab **Identity** ở trên → **Invite users** → nhập email của bạn → bạn sẽ nhận mail đặt mật khẩu.

> Sau khi sửa file `site.js` mục `url` và file `src/admin/config.yml` mục `site_url`
> thành địa chỉ Netlify thật của bạn, nhớ `git add . && git commit -m "cap nhat url" && git push` lại.

---

## 4. Đăng bài viết (sau khi đã deploy)

1. Vào **`https://web-cua-ban.netlify.app/admin/`**
2. Đăng nhập bằng email + mật khẩu đã đặt ở Bước C.
3. Bấm **Bài viết → New Bài viết**, nhập: Tiêu đề, Ngày, Tóm tắt, Ảnh đại diện, Nội dung.
4. Bấm **Publish**. Khoảng 30–60 giây sau bài tự lên web, mọi khách đều thấy, Google đọc được.

Bạn **không cần đụng code** ở bước này — chỉ viết và bấm đăng.

---

## 5. Cấu trúc thư mục (để biết file nào ở đâu)

```
quang-nga-site/
├─ src/
│  ├─ _data/site.js        ← THÔNG TIN trung tâm (sửa ở đây)
│  ├─ _includes/           ← khung giao diện (header, footer, bài viết)
│  ├─ css/style.css        ← màu sắc, kiểu dáng
│  ├─ posts/               ← các bài viết (.md)
│  ├─ admin/               ← trang quản trị Decap CMS
│  ├─ uploads/             ← ảnh tải lên
│  ├─ index.njk            ← trang chủ
│  └─ blog.njk             ← danh sách bài viết
├─ _site/                  ← web đã build ra (tự sinh, không sửa tay)
├─ netlify.toml            ← cấu hình deploy
└─ HUONG-DAN.md            ← file này
```

---

## Ghi nhớ nhanh
- **Đổi nội dung tĩnh / màu sắc** → sửa file trong `src/` rồi `git push` (Netlify tự cập nhật).
- **Đăng bài viết** → vào `/admin`, không cần code.
- **Tất cả miễn phí** ở mức web nhỏ (GitHub + Netlify).
