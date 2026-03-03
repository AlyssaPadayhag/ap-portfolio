<script>
    import Home from "./home/Home.svelte";
    import Skills from "./skills/Skills.svelte";
    import { Linkedin } from "@lucide/svelte";
    import { Instagram } from "@lucide/svelte";
    import { Github } from "@lucide/svelte";
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

<span class="footerLinks textSpace">
	<a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank"><Linkedin /></a>
	<a href="https://www.instagram.com/ialyssanica" target="_blank"><Instagram /></a>
	<a href="https://github.com/AlyssaPadayhag" target="_blank"><Github /></a>
</span>
<span class="footerLinks">
    <Mail />
    alyssapadayhag@gmail.com
   <Phone />
    (760)290-5598
</span>


<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
		margin-left: auto;
		margin-right: auto;
        width: 40%;
        border: .2rem solid #141b41;
        background-color: #98b9f2;

    }
    .footerLinks {
        display: flex;
        justify-content: center;
        align-items: center;
		margin-left: auto;
		margin-right: auto;
        width: 50%;
		background-color: #141b41;
		color: #98b9f2;
    }
    .textSpace a{
        margin-right: 20px;
        align-items: center;
    }
    img {
        border-right: .2rem solid #141b41;
        border-top: .2rem solid #141b41;
        border-bottom: .2rem solid #141b41;
        width: 50%;
    }
    .content {
        text-align: center;
		margin-left: auto;
		margin-right: auto;
        font-size: 24px;
    }
    ul#menu li {
        display: inline;
    }
	.nav {
		background-color: #141b41;
		overflow: hidden;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}
	.nav li {
		color: #98b9f2;
		text-align: center;
		padding: 10px;
		text-decoration: none;
		font-size: 17px;
        font-weight: bold;
	}
    li a {
        text-align: center;
        align-items: center;
    }
    a:hover {
        color: red;
    }
</style>