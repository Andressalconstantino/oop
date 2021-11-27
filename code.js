

class Product {

    constructor() {
        this.id = 1;
        this.productArray = [];
    }



    save(){
        let product = this.readData();
        if(this.validate(product)) {
            this.add(product);
        }
        this.showResults();
        this.cancel();

    }

    showResults(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for (let i=0; i<this.productArray.length; i++){

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_name = tr.insertCell();
            let td_price = tr.insertCell();
            let td_actions = tr.insertCell();

            td_id.innerText = this.productArray[i].id;
            td_name.innerText = this.productArray[i].name;
            td_price.innerText = this.productArray[i].price;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'https://cdn-icons.flaticon.com/png/512/4103/premium/4103111.png?token=exp=1638057726~hmac=150c697a12f45c07446997821373d230';
            let imgDel = document.createElement('img');
            imgDel.src = 'https://cdn-icons-png.flaticon.com/512/70/70245.png';

            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDel);

        }
    }



    add(product){
        this.productArray.push(product);
        this.id++;

    }

    readData(){
        let product = {}

        product.id = this.id;
        product.name = document.getElementById('product').value;
        product.price = document.getElementById('price').value;

        return product;

    }

    validate(product) {
        let msg = '';
        if(product.name == ''){
            msg += 'Type product name \n';
        }
        if(product.price == ''){
            msg += 'Type product price \n';
        }

        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;

    }

    cancel(){
        document.getElementById('product').value = '';
        document.getElementById('price').value = '';
    }
}

let product = new Product();