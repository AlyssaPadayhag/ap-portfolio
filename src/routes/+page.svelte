<script>
    import Home from "./home/Home.svelte";
    import Skills from "./skills/Skills.svelte";
    import { Linkedin } from "@lucide/svelte";
    import { Instagram } from "@lucide/svelte";
    import { Facebook } from "@lucide/svelte";
    import { Mail } from "@lucide/svelte";
    import { Phone } from "@lucide/svelte";

    export let menu = 1;
</script>

<ul id="menu" class="topnav">
	<li><a href="/" on:click|preventDefault={() => (menu = 1)}>01. Home</a></li>
	<li><a href="/" on:click|preventDefault={() => (menu = 2)}>02. Skills</a></li>
</ul>

<div class="container">
    <div class="portrait">
        <img src="src/lib/assets/me.png" alt="Alyssa's portrait">
    </div>
    <div class="content">
        {#if menu === 1}
        <Home />
        {:else if menu === 2}
        <Skills />
        {:else}
        <h1>
            Page Not Found
        </h1>
        {/if}
    </div>
</div>

<ul id="menu" class="topnav">
	<li><a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank"><Linkedin /></a></li>
	<li><a href="/" target="_blank"><Instagram /></a></li>
    <li><a href="/" target="_blank"><Facebook /></a></li>
    <li><Mail /></li>
    <li>alyssapadayhag@gmail.com</li>
    <li><Phone /></li>
    <li>(760)290-5598</li>
</ul>

<style>
    .container {
        display: flex;
        justify-content: left;
    }
    .portrait {
        width: 40%;
        height: auto;
        margin-left: 30%;
        border-radius: 25px;
    }
    .content {
        width: 50%;
        margin-right: 30%;
        background-color: #a0c4ab;
        text-align: center;
    }
    ul#menu li {
        display: inline;
    }
	.topnav {
		background-color: white;
		overflow: hidden;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}
	.topnav li {
		float: left;
		color: rgb(245, 129, 149);
		text-align: center;
		padding: 10px;
		text-decoration: none;
		font-size: 17px;
        font-weight: bold;
	}
</style>