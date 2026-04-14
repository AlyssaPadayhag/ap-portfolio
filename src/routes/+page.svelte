<script>
    import Home from "./home/Home.svelte";
    import Skills from "./skills/Skills.svelte";
    import { Linkedin } from "@lucide/svelte";
    import { Instagram } from "@lucide/svelte";
    import { Github } from "@lucide/svelte";
    import { Mail } from "@lucide/svelte";
    import { Phone } from "@lucide/svelte";
    import { SquareArrowOutUpRight } from "@lucide/svelte";

    export let menu = 1;
</script>
<span class="footerLinks textSpace">
	<a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank"><Linkedin /></a>
	<a href="https://www.instagram.com/ialyssanica" target="_blank"><Instagram /></a>
	<a href="https://github.com/AlyssaPadayhag" target="_blank"><Github /></a>
</span>
<span class="footerLinks">
    <Mail />
    <span class="custom-padding">alyssapadayhag@gmail.com</span>
</span>
<span class="footerLinks textSpace">.......</span>
<ul id="menu" class="nav">
	<li><a href="https://zledvflm4nm7pn4v.public.blob.vercel-storage.com/ap-resume.pdf" target="_blank">Resume</a></li>
</ul>

<span class="footerLinks textSpace">.......</span>
<span class="container">
        <!-- <img src="https://zledvflm4nm7pn4v.public.blob.vercel-storage.com/me2.png" alt="Alyssa's portrait"> -->
        <div class="content">
            {#if menu === 1}
            <Skills />
            {:else}
            <h1>
                Page Not Found
            </h1>
            {/if}
        </div>

</span>




<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
		margin-left: auto;
		margin-right: auto;

    }
    .footerLinks {
        display: flex;
        justify-content: center;
        align-items: center;
		margin-left: auto;
		margin-right: auto;
        padding-top: 10px;
        padding-bottom: 10px;
		background-color: #141b41;
		color: #98b9f2;
    }
    .custom-padding {
		padding-left: 10px;
    }
    .textSpace a{
        margin-right: 20px;
        align-items: center;
    }
    img {
        border: .2rem solid #141b41;
        margin-left: 20px;
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
		margin-left: auto;
		margin-right: auto;
        text-align: center;
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