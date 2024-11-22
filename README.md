# Chapter 10: Routing

## GitHube Pages
Link: [React Router](https://fatahpratam.github.io/tutorial-react-router/)

## Youtube Tutorial
- Link: [Full Stack React Developer Course with Appwrite](https://www.youtube.com/watch?v=Bvwq_S0n2pk)
- Creator: [HiteshCodeLab](https://www.youtube.com/@HiteshCodeLab)

## SPA (Single Page Application)
- Pada dasarnya, ketika berganti tampilan, maka React akan menghilangkan semua element HTML di dalam root dan diinjeksi dengan element HTML baru.
- Jadi, React sangat sering memanipulasi DOM alih-alih membuka file HTML baru.
- Tapi SPA tidak ideal untuk pengguna awam, karena mereka sudah terbiasa dengan terjadinya perubahan pada URL ketika membuka tampilan baru, sehingga mereka curiga ketika tidak ada perubahan pada URL.

## Library Routing: react-router-dom
- Paket react-router-dom berisi binding untuk menggunakan React Router dalam aplikasi web. 

## Fungsi-fungsi routing dari react-router-dom:
- `createBrowserRouter()`: Ini adalah router yang direkomendasikan untuk semua proyek web React Router. Router ini menggunakan URL lengkap, bukan URL hash (#this/stuff) yang umum digunakan di aplikasi web sebelum history.pushState distandarisasi. URL lengkap lebih baik untuk SEO, lebih baik untuk rendering server, dan lebih kompatibel dengan platform web lainnya.
- `RouterProvider()`: Semua objek router data diteruskan ke komponen ini untuk merender aplikasi Anda dan mengaktifkan API data lainnya.
- `createRoutesFromElements()`: sebuah helper yang membuat objek rute dari elemen `<Rute>`. Ini berguna jika Anda lebih suka membuat rute Anda sebagai JSX, bukan objek.

## Component dari react-router-dom:
- `Route()`: Mendeklarasikan elemen yang harus dirender pada jalur URL tertentu.
- `Outlet()`: Merender child route element, jika ada.
- `Link()`:  `<Link>` adalah elemen yang memungkinkan pengguna menavigasi ke halaman lain dengan mengeklik atau mengetuknya. 
- `NavLink()`: Sebuah `<NavLink>` adalah jenis `<Link>` khusus yang mengetahui apakah `<NavLink>` tersebut “aktif”, “menunggu”, atau “transisi”.

## Hooks dari react-router-dom:
- `useParams()`: Hook useParams mengembalikan objek pasangan kunci/nilai dari parameter dinamis dari URL saat ini yang dicocokkan oleh `<Rute path>`. Rute anak mewarisi semua parameter dari rute induknya.
- `useLoaderData()`: Hook ini memberikan nilai yang dikembalikan dari pemuat rute Anda.

## Common Practices
- Membuat Layout.jsx untuk menyimpan Component yang tetap seperti Header dan Footer dan menggunakan Component Outlet untuk merender child route element.
- Jangan gunakan element a dalam SPA, karena akan men-reload halaman web-nya. Gunakan method Link dari library react-router-dom.
- Jangan lupa membuat halaman 404 untuk error.

## Cara membuat routing sederhana
- Buat sebuah Object Router melalui method createBrowserRouter dan simpan ke dalam variabel (Mis: router).
- Di dalam method `createBrowserRouter` panggil method `createRoutesFromElements`.
- Di dalam method `createRoutesFromElements`, Anda dapat menyusun Route yang diinginkan dengan Component `Route`. Contohnya:
```js
  <Route path='/' element={<Layout />}>
    <Route path='home' element={<Home />} />
    <Route path='about' element={<About />} /> 
  </Route>
```
- Hal di atas akan membentuk route '/home' dan '/about'.
- Di dalam Root Component, panggil method `RouterProvider` dengan argument variabel router yang telah disimpan sebelumnya.