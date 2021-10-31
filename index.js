const tataData = [
    {
      name: "TATA STEEL",
      TotalSales: "200 Crore",
      TargetSales: "400 Crore" 
    },
    {
      name: "Factory A",
      TotalSales: "20 Crore",
      TargetSales: "100 Crore" 
      
    },
    {
        name: "Factory B",
        TotalSales: "150 Crore",
        TargetSales: "200 Crore"
    },
    {
        name: "Factory C",
        TotalSales: "30 Crore",
        TargetSales: "100 Crore"
    },
  ];
  
 
  function steelTemplate(steel) {
    return `
      <div class="steel">
      <h2 class="tata-name">${steel.name}</h2>
      <p><strong>TotalSales:</strong> ${steel.TotalSales}</p>
      <p><strong>TargetSales:</strong> ${steel.TargetSales}</p>
    
       </div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Tata Steel (${tataData.length} results)</h1>
    ${tataData.map(steelTemplate).join("")}
  `;
  