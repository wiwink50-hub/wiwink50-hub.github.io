# Panduan Deployment ke GitHub Pages

## Konfigurasi Vite ✅
Konfigurasi Vite sudah diatur untuk deployment GitHub Pages:
- ✅ Base URL: `/` (untuk root directory)
- ✅ Build output: `dist/`
- ✅ Server dev: Port 5000

## Cara Deploy Otomatis ke GitHub Pages

### Langkah 1: Push ke GitHub
Pastikan repository Anda sudah terhubung ke GitHub:
```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin main
```

### Langkah 2: Aktifkan GitHub Pages
1. Buka repository Anda di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian "Build and deployment":
   - **Source**: Pilih **GitHub Actions**
4. Simpan pengaturan

### Langkah 3: Deployment Otomatis
Setiap kali Anda push ke branch `main`, GitHub Actions akan otomatis:
1. Build aplikasi Anda
2. Deploy ke GitHub Pages
3. Website Anda akan tersedia di: `https://username.github.io/`

## Untuk Repository Pages (bukan root)

Jika Anda ingin deploy ke `https://username.github.io/nama-repo/`, update `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 5000,
  },
  base: "/nama-repo/",  // 👈 Ubah ini dengan nama repository Anda
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

Dan update `src/App.tsx` untuk menambahkan basename ke BrowserRouter:

```typescript
<BrowserRouter basename="/nama-repo">
  <Routes>
    {/* routes Anda */}
  </Routes>
</BrowserRouter>
```

## Build Manual

Untuk build secara manual:
```bash
npm run build        # Build untuk production
npm run preview      # Preview build di local
```

File hasil build akan ada di folder `dist/`

## Workflow GitHub Actions

File workflow sudah dibuat di `.github/workflows/deploy.yml` yang akan:
- Otomatis trigger saat push ke branch `main`
- Install dependencies dengan npm
- Build aplikasi dengan `npm run build`
- Deploy hasil build ke GitHub Pages

## Custom Domain (Opsional)

Jika Anda punya custom domain:
1. Buat file `public/CNAME` dengan isi domain Anda:
   ```
   yourdomain.com
   ```
2. Di GitHub Settings → Pages, masukkan custom domain Anda
3. Update DNS domain Anda sesuai instruksi GitHub

## Troubleshooting

### Website tidak muncul
- Pastikan Source di GitHub Pages sudah diset ke "GitHub Actions"
- Cek tab "Actions" di GitHub untuk melihat status deployment
- Tunggu beberapa menit setelah deployment pertama

### Asset tidak load (404)
- Pastikan `base` di `vite.config.ts` sudah benar
- Untuk root deployment: `base: "/"`
- Untuk repo deployment: `base: "/nama-repo/"`

### Routing tidak bekerja
- Pastikan `basename` di BrowserRouter sesuai dengan `base` di vite.config
- GitHub Pages menggunakan static hosting, pastikan ada fallback ke index.html
