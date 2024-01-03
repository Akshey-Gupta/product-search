const search=()=>{
    const searchbox=document.getElementById('search-item').ariaValueMax.toUpperCase();
    const storeitems= document.getElementsByClassName('product-list')
    const product=storeitems.querySelectorAll('.product')
    const pname=document.getElementsByTagName('h2')

    for(var i=0;i<pname.length;i++){
        let match=product[i].getElementsByTagName('h2')[0]
        if (match){
            let textvalue=match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf()>-1){
                product[i].computedStyleMap.display="";
            }else{
                product[i].computedStyleMap.display="none";
            }
        }
    }
}