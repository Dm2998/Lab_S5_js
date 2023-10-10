<style>
    /* Center the navigation bar horizontally */
    .navbar-center {
        display: flex;
        justify-content: center;
        
    }

    .navbar {
        /* Add your existing navbar styles here */
    }
</style>

<div class="navbar-center">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-white bg-white static-top">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/product">Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/users">Users</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/nasa">Nasa</a>
            </li>
        </ul>
    </nav>
</div>

<slot />
