if('serviceWorker' in navigator){

    window.addEventListener('load',() =>{
        navigator.serviceWorker.register('../sw_cached_pages.js')
        .then( reg =>{
            console.log('SW has register');
        })
        .catch(err =>{
            console.log(`Serviceworker : Error ${err}`);
        })
    })

}