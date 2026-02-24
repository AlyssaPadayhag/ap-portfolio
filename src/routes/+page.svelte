<script>
    import Home from "./home/Home.svelte";

    export let menu = 1;
</script>
<ul id="menu" class="topnav">
	<li><a href="/" on:click|preventDefault={() => (menu = 1)}>Beranda</a></li>
	<li><a href="/" on:click|preventDefault={() => (menu = 2)}>Profile</a></li>
</ul>
<div class="container">
    <div class="portrait">
        <img src="src/lib/assets/me.png" alt="Alyssa's portrait">
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: left;
    }
    .portrait {
        width: 20%;
        height: auto;
        margin-left: 30%;
        border-radius: 25px;
    }
    .content {
        margin-right: 30%;
        background-color: #a0c4ab;
        text-align: center;
    }
    img {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
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
	.topnav li a {
		float: left;
		color: red;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
	}
</style>