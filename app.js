
let total =[];

function add(a){

    //image
    let img = a.children[0];
    let image = img.children[0];
    let imgsrc = image.src;


    //item name
    let product = a.children[1];
    let productName = product.children[0];
    let itemName = productName.innerHTML;

    //hidden input
    let hidden = product.children[4];
    let hidval = hidden.value;



    let temp = [];
    temp =[hidval,imgsrc,itemName];




    let itemindex = total.findIndex(index => index === temp);

    if(itemindex){
        total.push(temp);
        console.log("Add");
    }else{
        total.splice(0,1);
        console.log("delete");
    };


    console.log(itemindex);


}