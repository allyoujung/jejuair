const dateYou = new Date();
const dateInput = document.querySelector('.inputtt');

const today = `${String(dateYou.getFullYear())}/${dateYou.getMonth() > 9 ? String(dateYou.getMonth()) : "0" + dateYou.getMonth()}/${dateYou.getDate() > 9 ? String(dateYou.getDate()) : "0" + dateYou.getDate()}`;

dateInput.value = today;
  