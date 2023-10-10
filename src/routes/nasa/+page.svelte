<script>
    // import { routes } from '/+page.js'; // Correct the path

    export let data;   // Data from the API

</script>

<style>
    .container {                 /* Container for aligning content */   
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    h1 {                         /* Title */
        color: black;
        font-size: 30px;
    }

    img {                          /* Image */  
        border-radius: 4px;
        padding: 50px;
        width: 500px;
        height: 600px;
    }

    p {                            /* Explanation */
        color: black;
        font-size: 20px;
        width: 50%;
    }
</style>                            

<!-- Container for aligning content -->
<div class="container">                               
    <!-- Title -->
    <h1>{data.nasa.title}</h1>

    <!-- Image -->
    <img src={data.nasa.hdurl} alt="nasa">

    <!-- Explanation -->
    <p>{data.nasa.explanation}</p>     
</div>




copito?? can help   


