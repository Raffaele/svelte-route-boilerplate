<script>
	// export let name;
	let url = '/';
	import MyComponent from './MyComponent.svelte';
	// import { Router, Link, Route } from "svelte-routing";
	import { Router, Route, Link } from 'svelte-routing';

	import Home from './screens/Home/Home.svelte';
	import Details from './screens/Details/Details.svelte';
	import NotFound from './screens/NotFound/NotFound.svelte';
	import Product from './screens/Product/Product.svelte';
	// import Router, {link} from 'svelte-spa-router';


	// const routes = {
	// 	// Exact path
	// 	'/': Home,

	// 	// Using named parameters, with last being optional
	// 	'/details/:first/:last?': Product,

	// 	// Wildcard parameter
	// 	'/details/*': MyComponent,

	// 	// Catch-all
	// 	// This is optional, but if present it must be the last
	// 	'*': NotFound,
	// }
</script>

<Router>
	<header>
		<h1>Hello Router</h1>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/details">About</Link>
			<Link to="/product/1">Product 1</Link>
			<Link to="/product/2">Product 2</Link>
		</nav>
	</header>

	<main>
		<Route path="/" component="{Home}" />
		<Route path="/details" component="{Details}" />
		<Route path="/product/:productId" let:params>
			<Product {params} />
		</Route>
	</main>
</Router>

<style>
	:global(*) {
		--backgroundColor: red;
	}
	h1 {
		color: var(--backgroundColor);
	}
</style>