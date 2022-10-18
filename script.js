function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('trocarimg')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora > 0 && hora < 12){
    img.src = "img/manha.jpeg";
    document.body.style.background = '#d0b450cc'
    }else if(hora >= 12 && hora < 18){
        img.src = "img/tarde.jpeg";
        document.body.style.background = '#592626de'
            }else{
                img.src = "img/noite.jpeg";
                document.body.style.background = '#4f2a10cf'
                }
}