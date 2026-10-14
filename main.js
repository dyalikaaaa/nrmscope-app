document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  populateTable(nrmscopeData);
  renderMainDashboardChart(nrmscopeData);
  renderMiniHeroChart();
  initFilters();
  initExportCSV();
});

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .hero-cta a');
  const sections = document.querySelectorAll('.page-section');
  const navMenu = document.getElementById('navMenu');
  const hamburgerBtn = document.getElementById('hamburgerBtn');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetHref = link.getAttribute('href');
      if (!targetHref.startsWith('#')) return;

      const targetId = targetHref.replace('#', '');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        sections.forEach(sec => sec.classList.remove('active'));
        targetSection.classList.add('active');

        document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-link[href="#${targetId}"]`);
        if (activeNav) activeNav.classList.add('active');

        if (navMenu) navMenu.classList.remove('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

function populateTable(data) {
  const tbody = document.querySelector('#tptDataTable tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';

  data.forEach(row => {
    const tr = document.createElement('tr');
    const badgeClass = row.status === 'Aktual' ? 'teal' : 'amber';
    
    tr.innerHTML = `
      <td><strong>${row.year}</strong></td>
      <td>${row.period}</td>
      <td>${row.province}</td>
      <td>${row.education}</td>
      <td><strong>${row.tpt}%</strong></td>
      <td><span class="status-pill ${badgeClass}">${row.status}</span></td>
      <td>${row.note}</td>
    `;
    tbody.appendChild(tr);
  });
}

function initFilters() {
  const filterProvince = document.getElementById('filterProvince');
  const filterPeriod = document.getElementById('filterPeriod');
  const filterEducation = document.getElementById('filterEducation');
  const filterStatus = document.getElementById('filterStatus');

  function applyFilters() {
    const provVal = filterProvince ? filterProvince.value : 'all';
    const periodVal = filterPeriod ? filterPeriod.value : 'all';
    const eduVal = filterEducation ? filterEducation.value : 'all';
    const statusVal = filterStatus ? filterStatus.value : 'all';

    let filteredData = nrmscopeData.filter(d => {
      let matchProv = (provVal === 'all' || d.province === provVal);
      let matchPeriod = (periodVal === 'all' || d.period === periodVal);
      let matchEdu = (eduVal === 'all' || d.education === eduVal);
      let matchStatus = (statusVal === 'all' || d.status === statusVal);
      return matchProv && matchPeriod && matchEdu && matchStatus;
    });

    if (filteredData.length === 0) {
      filteredData = nrmscopeData.filter(d => d.province === "Nasional" && d.education === "Semua Jenjang");
    }

    populateTable(filteredData);
    renderMainDashboardChart(filteredData);
  }

  if (filterProvince) filterProvince.addEventListener('change', applyFilters);
  if (filterPeriod) filterPeriod.addEventListener('change', applyFilters);
  if (filterEducation) filterEducation.addEventListener('change', applyFilters);
  if (filterStatus) filterStatus.addEventListener('change', applyFilters);
}

function initExportCSV() {
  const btnExport = document.getElementById('btnExportCSV');
  if (!btnExport) return;

  btnExport.addEventListener('click', () => {
    let csvContent = "data:text/csv;charset=utf-8,Tahun,Periode,Provinsi,Jenjang,TPT(%),Status,Catatan\n";
    
    nrmscopeData.forEach(r => {
      csvContent += `${r.year},${r.period},${r.province},${r.education},${r.tpt},${r.status},"${r.note}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "NRMScope_Data_TPT_Indonesia.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}