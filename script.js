function hitungDanGambarGrafik() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);

  const D = b * b - 4 * a * c;

  const h = -b / (2 * a);
  const k = a * h * h + b * h + c;

  const hasilDiv = document.getElementById('hasil');
  hasilDiv.innerHTML = `
      Titik Puncak: (${h.toFixed(2)}, ${k.toFixed(2)})<br>
      Diskriminan (D): ${D.toFixed(2)}<br>
      Jenis Akar: ${jenisAkar(D)}
  `;

  const grafikDiv = document.getElementById('grafik');
  gambarGrafik(grafikDiv, a, b, c, h, k);
}

function jenisAkar(D) {
  if (D > 0) {
      return "Dua akar real berbeda";
  } else if (D === 0) {
      return "Satu akar real";
  } else {
      return "Dua akar imajiner";
  }
}

function gambarGrafik(container, a, b, c, h, k) {
  const xValues = [];
  const yValues = [];

  for (let x = h - 10; x <= h + 10; x += 0.1) {
      xValues.push(x);
      yValues.push(a * x * x + b * x + c);
  }

  const data = [{
      x: xValues,
      y: yValues,
      type: 'scatter'
  }];

  const layout = {
      title: 'Grafik Fungsi Kuadrat',
      xaxis: {
          title: 'Nilai x',
          tickmode: 'linear',
          dtick: 1,
          gridcolor: 'rgba(100, 100, 100, 0.1)'
      },
      yaxis: {
          title: 'Nilai y',
          tickmode: 'linear',
          dtick: 50,
          gridcolor: 'rgba(100, 100, 100, 0.1)'
      },
      shapes: [
          {
              type: 'line',
              x0: h,
              x1: h,
              y0: 0,
              y1: k,
              line: {
                  color: 'red',
                  width: 2,
                  dash: 'dash'
              }
          }
      ]
  };

  Plotly.newPlot(container, data, layout);
}
