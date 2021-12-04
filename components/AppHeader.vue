<template>
    <header class="header">
        <div class="jokes-title">
            <nuxt-link :to="'/'">  
                <h1 class="title">Dad jokes</h1>
            </nuxt-link>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <nuxt-link to='/'>Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/jokes'>Jokes</nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/about'>About</nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px dotted #ccc;
    /* margin-left: 20px; */
    /* margin-right: 20px; */
    background: #000;
}

.header .title {
    font-size: 3rem;
    color: #526488;
}

.header ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu a {
    display: inline-block;
    background: #333;
    padding: 10px 23px;
    text-decoration: none;
    color: #fff;
    margin-right: 0.5rem;
}




</style>