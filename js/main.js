const count = document.getElementById("count");
let number = 0;
count.innerHTML = number;

const add = () => {
  count.innerHTML = number + 1;
  number = Number(count.innerHTML);
};

const remove = () => {
  count.innerHTML = number - 1;
  number = Number(count.innerHTML);
  if (number < 1) {
    count.innerHTML = 0;
    number = Number(count.innerHTML);
  }
};
const reset = () => {
  count.innerHTML = 0;
  number = 0;
};
