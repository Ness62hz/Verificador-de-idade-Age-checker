function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked){
            gênero = `Homem com ${idade} anos`
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianmasc.png')
            } else if (idade < 25){
                img.setAttribute('src', 'moco.png')
            } else if (idade < 50){
                img.setAttribute('src','homem.png')
            } else if (idade > 50){
                img.setAttribute('src', 'idoso.png')
            }
            res.innerHTML = `${gênero}`
            res.appendChild(img)

        } else if (fsex[1].checked){
            gênero = `Mulher com ${idade} anos`
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianfem.png')
            } else if (idade < 25){
                img.setAttribute('src', 'moca.png')
            } else if (idade < 50){
                img.setAttribute('src', 'mulher.png')
            } else if (idade > 50){
                img.setAttribute('src', 'idosa.png')
            }
            res.innerHTML = `${gênero}`
            res.appendChild(img) 
        }
        
    }

}