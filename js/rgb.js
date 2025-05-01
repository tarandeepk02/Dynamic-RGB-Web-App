(
  () => {
    let counter = 0;
    let dropdowns = document.querySelectorAll("div.row select");

    const setCopyRightYear = () => {
      const copy = document.querySelector('footer>kbd>span')
      copy.textContent = new Date().getFullYear()
    }

    const setRGBValues = () => {
      dropdowns.forEach((dropdown, index) => {
        for (let i = 1; i < 256; ++i) {
          let option = document.createElement("option");
          option.text = option.value = i;
          dropdown.appendChild(option);
        }
      });
    }

    const formatRGB = (rgb, isInteger = true) => {
      if (isInteger) {
        return `(${rgb[0]},${rgb[1]},${rgb[2]})`;
      } else {
        let formatted = [];
        for (let i = 0; i < rgb.length; i++) {
          formatted.push(rgb[i].toFixed(2));
        }
        return `(${formatted[0]}, ${formatted[1]}, ${formatted[2]})`;
      }
    }

    const displayColorInformation = (rgb) => {
      const row = document.createElement("tr");

      if (counter % 2 === 0) {
        row.setAttribute("class", "table-active");
      }

      const cellInteger = document.createElement("td");
      cellInteger.setAttribute("class", "text-white");
      cellInteger.textContent = formatRGB(rgb, true);

      const floatRGB = computeFloatingPointRGB(rgb);
      const cellFloat = document.createElement("td");
      cellFloat.setAttribute("class", "text-white");
      cellFloat.textContent = formatRGB(floatRGB, false);

      const cellHex = document.createElement("td");
      cellHex.setAttribute("class", "text-white");
      cellHex.textContent = computeHexadecimalRGB(rgb);

      const cellDisplay = document.createElement("td");
      cellDisplay.setAttribute("class", "rounded-pill");
      cellDisplay.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

      row.appendChild(cellInteger);
      row.appendChild(cellFloat);
      row.appendChild(cellHex);
      row.appendChild(cellDisplay);

      let tbody = document.querySelector("#output tbody");
      if (!tbody) {
        tbody = document.createElement("tbody");
        document.querySelector("#output").appendChild(tbody);
      }

      tbody.appendChild(row);

      counter++;
    }

    const clearTable = () => {
      const tbody = document.querySelector("#output tbody");
      if (tbody) {
        tbody.innerHTML = '';
      }
    }

    const computeFloatingPointRGB = (rgb) => {
      let floatRGB = [];
      for (let i = 0; i < rgb.length; i++) {
        floatRGB.push(rgb[i] / 255);
      }
      return floatRGB;
    }

    const computeHexadecimalRGB = (rgb) => {
      let hex = "#";
      for (let i = 0; i < rgb.length; i++) {
        let part = Number(rgb[i]).toString(16).padStart(2, '0');
        hex += part;
      }
      return hex.toUpperCase();
    }

    const displayBasicColors = () => {
      clearTable()
      const basicColors = [
        [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0],
        [0, 255, 255], [255, 0, 255], [0, 0, 0], [255, 255, 255]
      ];
      basicColors.forEach(displayColorInformation);
    }

    const displayGrayColors = () => {
      clearTable()
      const grayColors = [];
      for (let i = 0; i < 256; i += 33) {
        grayColors.push([i, i, i]);
      }
      grayColors.forEach(displayColorInformation);
    }

    const displaySelectedColors = () => {
      const rgb = [];
      for (let i = 0; i < dropdowns.length; i++) {
        rgb.push(parseInt(dropdowns[i].value));
      }
      displayColorInformation(rgb);
    }

    window.onload = () => {
      setCopyRightYear()
      setRGBValues()
      document.querySelector("#basicColors").onclick = displayBasicColors;
      document.querySelector("#grayColors").onclick = displayGrayColors;
      document.querySelector("#selectedColor").onclick = displaySelectedColors;
      document.querySelector("#clearColors").onclick = clearTable;
    }
  }
)()