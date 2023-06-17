document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('dataContainer');
    const socket = io();
  
    socket.on('dataUpdate', (data) => {
      updateData(data);
    });
  
   

    function updateData(data) {
        dataContainer.innerHTML = '';
      
        const checkedData = data.filter(item => item.checked);
      
        checkedData.forEach((item, index) => {
          const checkboxNumber = index + 1;
          const paragraph = document.createElement('p');
          paragraph.textContent = ` ${checkboxNumber}: ${item.text} (Checked)`;
          dataContainer.appendChild(paragraph);
        });
      }
      
  });


