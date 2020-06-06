window.addEventListener("load", function() {
    var tits = this.document.querySelector('.tits');
    var country_box = this.document.querySelector('.country_box');
    var wrapper = this.document.querySelector('.wrapper');
    tits.addEventListener('click' , function(){
        var str = country_box.style.display;
        if(str == ''){
            str = 'block';
        }
        else{
            str = '';
        }
        country_box.style.display = str;   
    })
});
