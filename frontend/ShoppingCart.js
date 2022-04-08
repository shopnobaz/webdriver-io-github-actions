class ShoppingCart {

    orderRows = [];

    add(quantity, product) {
        //add a new order row
        this.orderRows.push({
            quantity,
            product
        });
        document.querySelector('footer').innerHTML = this.render()
    }

    render() {
        let html = '<table  class="shoppingList">';
        let totalSum = 0;
        for (let orderRow of this.orderRows) {
            let rowSum = orderRow.quantity * orderRow.product.price;
            html += `
            <tr>
            <td> ${orderRow.quantity} </td>
            <td> ${orderRow.product.name}  </td>
            <td> ${orderRow.product.price}  </td>
            <td> ${rowSum}</td>
            </tr>` ;
            totalSum = + rowSum;
        }
        html += `<tr>
            <td colspan="3">Total: </td>
            <td> ${totalSum} </td>
        </tr>  `;
        html += '</table>';
        return html;
    }

}

