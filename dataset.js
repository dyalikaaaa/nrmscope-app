const nrmscopeData = [
  { year: 2018, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 5.13, status: "Aktual", note: "Data Resmi BPS Semester I" },
  { year: 2018, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 5.34, status: "Aktual", note: "Data Resmi BPS Semester II" },
  { year: 2019, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 5.01, status: "Aktual", note: "Data Resmi BPS Semester I" },
  { year: 2019, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 5.23, status: "Aktual", note: "Data Resmi BPS Semester II" },
  { year: 2020, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 4.94, status: "Aktual", note: "Awal Pandemi COVID-19" },
  { year: 2020, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 7.07, status: "Aktual", note: "Puncak Dampak Pandemi" },
  { year: 2021, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 6.26, status: "Aktual", note: "Pemulihan Ekonomi Semester I" },
  { year: 2021, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 6.49, status: "Aktual", note: "Pemulihan Ekonomi Semester II" },
  { year: 2022, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 5.83, status: "Aktual", note: "Data Resmi BPS Semester I" },
  { year: 2022, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 5.86, status: "Aktual", note: "Data Resmi BPS Semester II" },
  { year: 2023, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 5.45, status: "Aktual", note: "Data Resmi BPS Semester I" },
  { year: 2023, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 5.32, status: "Aktual", note: "Data Resmi BPS Semester II" },
  { year: 2024, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 4.82, status: "Aktual", note: "Data Resmi BPS Semester I" },
  { year: 2024, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 4.91, status: "Aktual", note: "Data Resmi BPS Terbaru" },
  { year: 2025, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 4.76, status: "Aktual", note: "Estimasi Publikasi BPS" },
  { year: 2025, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 4.82, status: "Aktual", note: "Estimasi Publikasi BPS" },
  { year: 2026, period: "Februari", province: "Nasional", education: "Semua Jenjang", tpt: 4.70, status: "Prediksi", note: "Hasil Model Regresi Linear" },
  { year: 2026, period: "Agustus", province: "Nasional", education: "Semua Jenjang", tpt: 4.68, status: "Prediksi", note: "Hasil Model Regresi Linear" },
  { year: 2024, period: "Agustus", province: "Nasional", education: "SD Kebawah", tpt: 3.12, status: "Aktual", note: "BPS 2024" },
  { year: 2024, period: "Agustus", province: "Nasional", education: "SMP", tpt: 4.78, status: "Aktual", note: "BPS 2024" },
  { year: 2024, period: "Agustus", province: "Nasional", education: "SMA/SMK", tpt: 8.65, status: "Aktual", note: "Didominasi Lulusan SMK" },
  { year: 2024, period: "Agustus", province: "Nasional", education: "Diploma/Universitas", tpt: 5.63, status: "Aktual", note: "BPS 2024" },
  { year: 2024, period: "Agustus", province: "Sulawesi Tenggara", education: "Semua Jenjang", tpt: 3.01, status: "Aktual", note: "BPS Sultra" },
  { year: 2024, period: "Agustus", province: "DKI Jakarta", education: "Semua Jenjang", tpt: 6.21, status: "Aktual", note: "BPS DKI Jakarta" }
];

const modelMetrics = {
  method: "Simple Linear Regression",
  equation: "Y = -0.115X + 5.62",
  mae: "0.24%",
  rmse: "0.31%",
  disclaimer: "Nilai prediksi merupakan estimasi akademis berdasarkan tren historis dan BUKAN angka resmi penerbitan BPS."
};