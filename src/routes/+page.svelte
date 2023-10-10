<script>
    let message = 'Welcome to SvelteKit';
</script>

<style>
    /* Center the content vertically and horizontally */
    .centered-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* 100% of the viewport height */
        background-image: url('img/go.jpg'); /* Replace with your image URL */
        background-size: cover;
        background-position: center;
        color: white; /* Set text color to contrast with the background */
        text-align: center; /* Center-align the text */
    }

    h1 {
        color: white; /* Set text color to contrast with the background */
        font-size: 36px; /* Adjust the font size as needed */
    }

    p {
        color: white; /* Set text color to contrast with the background */
        font-size: 18px; /* Adjust the font size as needed */
    }

    a {
        color: #66ccff; /* Set link color */
    }
</style>

<div class="centered-container">
    <h1>{message}</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<!-- Diego Medina -->