var sub = window.document.getElementById('avaliacao',)
sub.addEventListener('mouseenter', entrar)
sub.addEventListener('mouseout', saiu)
function entrar(){
    sub.style.backgroundColor='hsl(0, 0%, 100%)'
    sub.style.color='hsl(25, 97%, 53%)'
}
function saiu(){
    sub.style.backgroundColor='hsl(25, 97%, 53%)'
    sub.style.color='hsl(0, 0%, 100%)'
} 


/* botão submit*/ 

function enviar(){
    var rating= window.document.getElementById('rating')
    var img = window.document.getElementById('img')
    document.getElementById('list').style.buttons='none'
    img.setAttribute('src','./images/illustration-thank-you.svg')
    rating.style.textAlign='center'
    var p = window.document.getElementById('p')
    p.innerHTML=`
    You selected  ${pre}  out of 5
     <p><h1>Thank you!</h1></p>`
    p.style.color='hsl(25, 97%, 53%)'
    p.style.border='solid, 1px black'
    var h1 = window.document.getElementById('h1')
    h1.innerHTML=''
    document.getElementById('avaliacao').style.display='none'
    list.innerHTML='We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
    list.style.color='hsl(217, 12%, 63%)'

   
   

}
/* botão selecionar*/ 
var pre=''
function selecionar(qualbotao){
    switch(qualbotao){
        case 1:
            pre=1
            window.document.getElementById('btn1').style.backgroundColor='hsl(25, 97%, 53%)'
           
        break
        case 2:
            pre=2
            window.document.getElementById('btn2').style.backgroundColor='hsl(25, 97%, 53%)'
            window.document.getElementById('btn1').style.backgroundColor='hsl(0, 0%, 100%)'
        break
        case 3:
            pre =3
            window.document.getElementById('btn3').style.backgroundColor='hsl(25, 97%, 53%)'
            window.document.getElementById('btn2').style.backgroundColor='hsl(0, 0%, 100%)'
        break
        case 4:
            pre = 4
            window.document.getElementById('btn4').style.backgroundColor='hsl(25, 97%, 53%)'
            window.document.getElementById('btn3').style.backgroundColor='hsl(0, 0%, 100%)'
        break
        case 5 :
            pre=5
            window.document.getElementById('btn5').style.backgroundColor='hsl(25, 97%, 53%)'
            window.document.getElementById('btn4').style.backgroundColor='hsl(0, 0%, 100%)'
        break
    }
}