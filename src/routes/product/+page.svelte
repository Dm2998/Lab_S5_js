<script>
    export let data;
</script>

<style>
    #products {
        margin: 0 auto;
        width: 80%;

    }

    h1 {
        color: black;
        font-size: 30px;
        text-align: center; 
            
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        text-align: left;
        padding: 10px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

</style>    

<div id="products">
    <h1>Products</h1>
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
                <th>stock</th>
            </tr>
        </thead>
        <tbody>
            {#each data.products as products}             
            <tr>
                <td>{products.id}</td>
                <td>{products.title}</td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                <td>{products.stock}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>


