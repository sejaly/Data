document.addEventListener('DOMContentLoaded', () => {
    const inputForm = document.getElementById('inputForm');
    const socket = io();
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const textboxes = document.querySelectorAll('input[type="text"]');
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
      const data = Array.from(textboxes).map((textbox, index) => ({
        text: textbox.value,
        checked: checkboxes[index].checked,
      }));
  
      socket.emit('dataUpdate', data);
    });
  });
  