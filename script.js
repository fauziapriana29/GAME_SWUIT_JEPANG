// pilihan computer
    
    var comp = Math.random()
    
    if( comp < 0.33 ) {
        comp = 'gunting'
        
    }else if( comp >= 0.33 && comp < 0.64 ) {
        comp = 'batu'
        
    }else {
        comp = 'kertas'
        
    }
    console.log(comp)
    var user = ''
    $('.user1').click(function() {
        user = 'gunting'
        // alert(user)
        $('.user2,.user3').fadeTo(100,0.2)
        
        if(comp == 'gunting'){
            document.getElementById('comp').innerHTML=('<img src="./suwitGunting.jpg" alt="gunting" class="gbcomp">')
        }else if(comp == 'batu') {
            document.getElementById('comp').innerHTML=('<img src="./suwitBatu.jpg" alt="batu" class="gbcomp">')
        }else {
            document.getElementById('comp').innerHTML=('<img src="./suwitKertas.jpg" alt="kertas" class="gbcomp">')
        }

        var hasil = ''
        if(user == comp) {
            hasil = 'Seri'
        }else if( user == 'gunting') {
            hasil = (comp == 'batu') ? 'Kalah' : 'Menang'
        }else if( user == 'batu') {
            hasil = (comp == 'kertas') ? 'Kalah' : 'Menang'
        }else {
            hasil = 'memasukan pilihan yang salah'
        }
        document.getElementById('hasil').innerHTML = `<p>Kamu ${hasil}</p>`

        return
    })
    $('.user2').click(function() {
        user = 'batu'
        // alert(user)

        $('.user1,.user3').fadeTo(100,0.2)
        if(comp == 'gunting'){
            document.getElementById('comp').innerHTML=('<img src="./suwitGunting.jpg" alt="gunting" class="gbcomp">')
        }else if(comp == 'batu') {
            document.getElementById('comp').innerHTML=('<img src="./suwitBatu.jpg" alt="batu" class="gbcomp">')
        }else {
            document.getElementById('comp').innerHTML=('<img src="./suwitKertas.jpg" alt="kertas" class="gbcomp">')
        }


        var hasil = ''
        if(user == comp) {
            hasil = 'Seri'
        }else if( user == 'gunting') {
            hasil = (comp == 'batu') ? 'Kalah' : 'Menang'
        }else if( user == 'batu') {
            hasil = (comp == 'kertas') ? 'Kalah' : 'Menang'
        }else {
            hasil = 'memasukan pilihan yang salah'
        }
        document.getElementById('hasil').innerHTML = `<p>Kamu ${hasil}</p>`
        return
    })
    $('.user3').click(function() {
        user = 'kertas'
        // alert(user)

        $('.user2,.user1').fadeTo(100,0.2)
        if(comp == 'gunting'){
            document.getElementById('comp').innerHTML=('<img src="./suwitGunting.jpg" alt="gunting" class="gbcomp">')
        }else if(comp == 'batu') {
            document.getElementById('comp').innerHTML=('<img src="./suwitBatu.jpg" alt="batu" class="gbcomp">')
        }else {
            document.getElementById('comp').innerHTML=('<img src="./suwitKertas.jpg" alt="kertas" class="gbcomp">')
        }

        var hasil = ''
        if(user == comp) {
            hasil = 'Seri'
        }else if( user == 'kertas') {
            hasil = (comp == 'batu') ? 'Menang' : 'Kalah'
        }else if( user == 'gunting') {
            hasil = (comp == 'kertas') ? 'Menang' : 'Kalah'
        }else {
            hasil = 'memasukan pilihan yang salah'
        }
        document.getElementById('hasil').innerHTML = `<p>Kamu ${hasil}</p>`
        return 
    })


// alert(`kamu ${hasil}`)
$('.ulangi').click(function(){
   window.location.reload(true)
})



