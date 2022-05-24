document.getElementById('light-theme').onclick = function(){
    document.getElementById('light-theme').style.display='none';
    document.getElementById('dark-theme').style.display='inline-block';
    document.getElementById('my-body').className='none';

}

document.getElementById('dark-theme').onclick = function(){
    document.getElementById('dark-theme').style.display='none';
    document.getElementById('light-theme').style.display='inline-block';
    document.getElementById('my-body').className='dark-theme';

}