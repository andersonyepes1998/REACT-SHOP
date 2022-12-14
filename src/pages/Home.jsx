import React from 'react';
import ProductList from '../containers/ProductList';
import Header from '../components/Header';
import MyOrder from '../containers/MyOrder';
import ProductDetail from '../containers/ProductDetail';

const Home = () => {
	return (
		<>
			<Header />
			<ProductList />
		</>
	);
}

export default Home;