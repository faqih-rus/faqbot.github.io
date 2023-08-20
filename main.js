const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0
const usersData=[]

const botSay = (data) => {
  return [
      "Hai selamat datang di formBot, Siapa nama kamu?",
      `Halo ${data.nama}, kamu sekarang semester berapa?`,
      `wah kamu sama denganku yaa, sama-sama di semester ${data.kelas}. BTW kamu suka matkul apa?`,
      `Wah hebat yaa suka mata kuliah ${data.MatkulFav}. Terima kasih sudah mengisi formBot.`,
  ];
};


pertanyaan.innerHTML = "Halo siapa nama kamu?"

function botStart() {
  if(jawaban.value < 1) return alert('Jawab dulu bang jangan langung submit ')
  init++ 
  if(init === 1){
    console.log({Nama: jawaban.value})
    setTimeout(botDelay({nama: jawaban.value}),900) 
  }
  else if (init === 2){
    console.log({kelas: jawaban.value})
    setTimeout(botDelay({kelas: jawaban.value}),900)
  }
  else if (init === 3){
    console.log({MatkulFav: jawaban.value})
    setTimeout(botDelay({MatkulFav: jawaban.value}),900)
  }
  else if (init=== 4 ){
    finishing()
  }
  else {(init === 5)
    botEnd()}
  
}

function botDelay(jawabanUser){
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"  
    container[0].style.filter = "none"
  },1200)
  usersData.push(jawabanUser)
  jawaban.value = ""
}
function finishing() {
  pertanyaan.innerHTML = `Thank u yaa ${usersData[0].nama}, lain waktu kita belajar matkul ${usersData[2].MatkulFav} bareng. `
  jawaban.value="Siap thanks ugha"
}

function botEnd() {
  console.log("bot selesai....")
  alert(`terimakasih ${usersData[0].nama} telah berkunjung`)
  window.location.reload()
}



