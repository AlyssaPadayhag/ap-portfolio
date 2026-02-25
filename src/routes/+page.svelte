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

<ul id="menu" class="nav">
	<li><a href="/" on:click|preventDefault={() => (menu = 1)}>01. Home</a></li>
	<li><a href="/" on:click|preventDefault={() => (menu = 2)}>02. Skills</a></li>
	<li><a href="https://zledvflm4nm7pn4v.public.blob.vercel-storage.com/alyssa-padayhag-resume.pdf" target="_blank">03. Resume</a></li>
</ul>

<span class="container">
        <img src="https://zledvflm4nm7pn4v.public.blob.vercel-storage.com/me.png" alt="Alyssa's portrait">
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

</span>

<ul id="menu" class="nav footer">
	<li><a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank"><Linkedin /></a></li>
	<li><a href="https://www.instagram.com/ialyssanica" target="_blank"><Instagram /></a></li>
    <li><Mail /></li>
    <li>alyssapadayhag@gmail.com</li>
    <li><Phone /></li>
    <li>(760)290-5598</li>
</ul>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
		margin-left: auto;
		margin-right: auto;
        width: 40%;
    }
    .content {
        background-color: #a0c4ab;
        text-align: center;
		margin-left: auto;
		margin-right: auto;
    }
    ul#menu li {
        display: inline;
    }
	.nav {
		background-color: white;
		overflow: hidden;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}
	.nav li {
		float: left;
		color: rgb(245, 129, 149);
		text-align: center;
		padding: 10px;
		text-decoration: none;
		font-size: 17px;
        font-weight: bold;
	}
</style>