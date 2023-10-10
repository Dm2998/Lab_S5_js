<script>
    export let data;
</script>

<style>
    #users {
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
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

</style>    

<div id="users">    
    <h1>Users</h1>
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>Fist Name</th>
                <th>Last Name</th>
                <th>Maiden Name</th>
                <th>Age</th>
                <th>Gerder</th>
                <th>Phone</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {#each data.users as user}  

            <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.maidenName}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.password}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>






