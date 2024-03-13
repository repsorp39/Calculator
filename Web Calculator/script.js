let input=document.querySelector(".input");


document.getElementById("un").addEventListener('click',()=>
{
   
    input.value=input.value+'1';
   
})


document.getElementById("deux").addEventListener('click',()=>
{
    
    input.value=input.value+'2';
})


document.getElementById("trois").addEventListener('click',()=>
{
    input.value=input.value+'3';
})


document.getElementById("quatre").addEventListener('click',()=>
{
    input.value=input.value+'4';
})


document.getElementById("cinq").addEventListener('click',()=>
{
    input.value=input.value+'5';
})


document.getElementById("six").addEventListener('click',()=>
{
    input.value=input.value+'6';
})


document.getElementById("sept").addEventListener('click',()=>
{
    input.value=input.value+'7';
})


document.getElementById("huit").addEventListener('click',()=>
{
    input.value=input.value+'8';
})


document.getElementById("neuf").addEventListener('click',()=>
{
    input.value=input.value+'9';
})


document.getElementById("moins").addEventListener('click',()=>
{
    input.value=input.value+'-';
})


document.getElementById("plus").addEventListener('click',()=>
{
    input.value=input.value+'+';
})


document.getElementById("division").addEventListener('click',()=>
{
    input.value=input.value+'/';
})


document.getElementById("fois").addEventListener('click',()=>
{
    input.value=input.value+'*';
})


document.getElementById("zero").addEventListener('click',()=>
{
    input.value=input.value+'0';
})


document.getElementById("point").addEventListener('click',()=>
{
    input.value=input.value+'.';
})

document.querySelector(".reset").addEventListener('click' ,()=>
{
    input.value='';
})

document.querySelector("#neuf + .del").addEventListener('click' ,()=>
{
    input.value=input.value.substring(0,input.value.length-1);
})


    document.querySelector(".egal").addEventListener('click' ,()=>
    {
        try{   input.value=eval(input.value);
        }
        catch{
            input.value='Syn_Error';
        }


    })
   
    //Gestion des deux thèmes:

    let btnRadio=document.querySelectorAll(".btnRadio input");
    let body=document.querySelector("body")
    console.log(btnRadio)
     btnRadio[1].addEventListener('click' ,()=>
     {
        if(btnRadio[1].checked)
        {
            btnRadio[0].checked=false;
            document.querySelector(".body1").classList.add('body2');
            document.querySelector('article strong').classList.add('line2');
            document.querySelector('article span').classList.add('line2');
            document.querySelectorAll('label')[0].classList.add('line2');
            document.querySelectorAll('label')[1].classList.add('line2');
            input.classList.add('input2');
            input.classList.remove('input');
            for(let c=0;c< document.querySelectorAll('.calcul_line button').length;c++)
            {
            document.querySelectorAll('.calcul_line button')[c].classList.add('bouton2');
            }
            document.querySelector('.reset').classList.add('reset2');
            document.querySelector('.egal').classList.add('egal2');
           

        }
     })

     btnRadio[0].addEventListener('click' ,()=>
     {

        if(btnRadio[0].checked)
        {
            btnRadio[1].checked=false;
            document.querySelector(".body1").classList.remove('body2');
            
            input.classList.remove('input2');
            input.classList.add('input');
            for(let c=0;c< document.querySelectorAll('.calcul_line button').length;c++)
            {
            document.querySelectorAll('.calcul_line button')[c].classList.remove('bouton2');
            }
            document.querySelector('.reset').classList.remove('reset2');
            document.querySelector('.egal').classList.remove('egal2');
            document.querySelector('article strong').classList.remove('line2');
            document.querySelector('article span').classList.remove('line2');
            document.querySelectorAll('label')[0].classList.remove('line2');
            document.querySelectorAll('label')[1].classList.remove('line2');
        }
      
     })