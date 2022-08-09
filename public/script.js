console.log('script loaded');
document.querySelector('#btnLoad').addEventListener('click',()=>{
    getDinoName();
    getDinoImg();
});
async function getDinoName() {
  const response = await fetch('/dinoname');
  const data = await response.json();
  let dinoRep = data[0].join(' ');
  console.log(dinoRep);
  document.querySelector('#dinoName').textContent= dinoRep;
}
async function getDinoImg() {
    const response = await fetch('/dinoimg');
    const data = await response.json();
    let dinoImg = data.value[Math.floor(Math.random()*data.value.length)];
    let dinoImgUrl = dinoImg.thumbnailUrl;
    let dinoAlt = dinoImg.name;
    console.log(dinoImg,dinoAlt);
    if(document.querySelector('#dinoImg')!== null){
        document.querySelector('#dinoImg').remove();
    }

    let img = document.createElement('img');
    img.id = 'dinoImg';
    img.src = dinoImgUrl;
    img.alt = dinoAlt;
    document.querySelector('.generator').appendChild(img);
}
