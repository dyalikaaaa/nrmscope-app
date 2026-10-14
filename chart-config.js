let mainChartInstance = null;
let miniChartInstance = null;

function renderMainDashboardChart(data) {
  const canvasElement = document.getElementById('mainDashboardChart');
  if (!canvasElement) return;
  
  const ctx = canvasElement.getContext('2d');
  
  const labels = data.map(item => `${item.year} (${item.period})`);
  const tptValues = data.map(item => item.tpt);
  
  const pointBackgroundColors = data.map(item => 
    item.status === 'Aktual' ? '#2563EB' : '#F59E0B'
  );

  if (mainChartInstance) {
    mainChartInstance.destroy();
  }

  mainChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Tingkat Pengangguran Terbuka (%)',
        data: tptValues,
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.05)',
        borderWidth: 3,
        pointBackgroundColor: pointBackgroundColors,
        pointRadius: 6,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'top' },
        tooltip: {
          callbacks: {
            label: function(context) {
              const item = data[context.dataIndex];
              return ` TPT: ${item.tpt}% (${item.status} - ${item.note})`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          suggestedMin: 3.0,
          suggestedMax: 8.0,
          title: { display: true, text: 'Persentase TPT (%)' }
        },
        x: {
          title: { display: true, text: 'Periode Pengamatan' }
        }
      }
    }
  });
}

function renderMiniHeroChart() {
  const canvasElement = document.getElementById('miniHeroChart');
  if (!canvasElement) return;

  const ctx = canvasElement.getContext('2d');
  const recentData = nrmscopeData.filter(d => d.year >= 2022 && d.period === "Agustus");
  
  if (miniChartInstance) {
    miniChartInstance.destroy();
  }

  miniChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: recentData.map(d => d.year),
      datasets: [{
        data: recentData.map(d => d.tpt),
        borderColor: '#0F9D8A',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
}