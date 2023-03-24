function getData(){
    let res=fetch("https://63eb5d97fb6b6b7cf7dcd436.mockapi.io/movies")
    res.then((data)=>data.json()).then((function(products){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let product of products){

            if(product.id>=103){
            out += `
                <tr>
                    <td> <img src='${product.poster}'> </td>
                    <td>${product.name}</td>
                    <td>${product.invest}</td>
                    <td>${product.profit}</td>
                </tr>
            `;}
        }
    
        placeholder.innerHTML = out;
        
}))

}
getData();
function auth(){
    window.location.assign("second.html")
}
function log(){
    window.location.assign("Reg.html")
}