const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i ++) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.error-not-purple');
  for (let i = 0; i < errorNotPurple.length; i ++) {
    errorNotPurple[i].style.color = 'red';
  }

  const odds= document.querySelectorAll('li:nth-child(even)');
    for (let i = 0; i < odds.length; i ++) {
      odds[i].style.backgroundColor = 'lightgray';
    }
