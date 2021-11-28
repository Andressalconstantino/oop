

class Product {

    constructor() {
        this.id = 1;
        this.productArray = [];
        this.editId = null;
    }



    save(){
        let product = this.readData();
        if(this.validate(product)) {
            if(this.editId == null) {
                this.add(product);
            }
            else{
                this.update(this.editId, product);
            }

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
            imgEdit.src = 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png';
            imgEdit.setAttribute('onclick', 'product.edit('+JSON.stringify(this.productArray[i])+')')

            let imgDel = document.createElement('img');
            imgDel.src = 'https://cdn-icons-png.flaticon.com/512/70/70245.png';
            imgDel.setAttribute('onclick', 'product.delete('+this.productArray[i].id+')');

            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDel);

        }
    }



    add(product){
        product.price = parseFloat(product.price);

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

        document.getElementById('save').innerText = 'Save'
        this.editId = null;
    }

    delete(id){

        if(confirm('Are you sure you want to delete the ID product '+ id + '?')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.productArray.length; i++) {

                if (this.productArray[i].id == id) {
                    this.productArray.splice(i, 1);
                    tbody.deleteRow(i);
                }

            }
        }
    }

    edit(data){
        this.editId = data.id;
        document.getElementById('product').value = data.name;
        document.getElementById('price').value = data.price;
        document.getElementById('save').innerText = 'Update';
    }

    update(id, product){
        for (let i = 0; i < this.productArray.length; i++){
            if(this.productArray[i].id == id){
                this.productArray[i].name = product.name;
                this.productArray[i].price = product.price;
            }
        }
    }




}

let product = new Product();