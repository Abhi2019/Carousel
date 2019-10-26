import React, { Component } from 'react';
import Showcards from '../../component/Showcard/Showcard';
import './Carousel.css';
class Carosuel extends Component {
	state = {
		count: 0,
		viewport: 3,
		select: 'select',
		FilterBy: true,
		seletedProduct: [],
		optionList : ['Electronics','Clothes'],
		products: [{
			"item": "Sandisk",
			"price": " $5.15 ",
			"productId": "102",
			"img": 'https://images-na.ssl-images-amazon.com/images/I/41VPPrr6gpL.__AC_SY400_.jpg',
			"isShow": true,
			"carousel-set": 1,
			"category":"Electronics"
		},
		{

			"item": "Weighing Scale",
			"price": "$8.15",
			"productId": "159",
			"img": "https://m.media-amazon.com/images/I/71AiQ9kFfRL._AC_UY436_FMwebp_QL65_.jpg",
			"isShow": true,
			"carousel-set": 2,
			"css":"middleOne",
			"category":"Electronics"
		},
		{

			"item": "Sony Speaker",
			"price": "$100",
			"productId": "105",
			"img": "https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Speakers_1174172_520x520._SY520_CB443372720_.jpg",
			"isShow": true,
			"carousel-set": 3,
			"category":"Electronics"
		},
		{
			"item": "Watch",
			"price": " $9.15 ",
			"productId": "156",
			"img": "https://images-eu.ssl-images-amazon.com/images/I/71Q7VeAsGRL._AC_SY400_.jpg",
			"isShow": false,
			"carousel-set": 4,
			"category":"Electronics"
		},
		{
			"item": "Philips Iron",
			"price": " $8.15 ",
			"productId": "150",
			"img": "https://images-eu.ssl-images-amazon.com/images/I/81im8ZLf2lL._AC_SY400_.jpg",
			"isShow": false,
			"carousel-set": 5,
			"category":"Electronics"
		},
		{
			"item": "Dell Laptop",
			"price": " $85.15 ",
			"productId": "151",
			"img": "https://m.media-amazon.com/images/I/61N2gQpCU5L._AC_UY436_FMwebp_QL65_.jpg",
			"isShow": false,
			"carousel-set": 6,
			"category":"Electronics"
		},
		{
			"item": "Amazon Echo",
			"price": " $55.15 ",
			"productId": "166",
			"img": "https://images-eu.ssl-images-amazon.com/images/I/41Pi3kbuIRL._AC_US436_FMwebp_QL65_.jpg",
			"isShow": false,
			"carousel-set": 7,
			"category":"Electronics"
		},
		{
			"item": "Amazon Kindle",
			"price": " $25.15 ",
			"productId": "11005",
			"img": "https://images-eu.ssl-images-amazon.com/images/I/51DlL6nUXaL._AC_US436_FMwebp_QL65_.jpg",
			"isShow": false,
			"carousel-set": 8,
			"category":"Electronics"
		},
		{
			"item": "Sony HeadPhone",
			"price": " $15.15 ",
			"productId": "158",
			"img": "https://m.media-amazon.com/images/I/61E7rI4lJuL._AC_UY436_FMwebp_QL65_.jpg",
			"isShow": false,
			"carousel-set": 9,
			"category":"Electronics"
		},
		{
			"item": "Saree",
			"price": " $35.15 ",
			"productId": "189",
			"img": "https://images-na.ssl-images-amazon.com/images/I/71vuccLbxcL._AC_UY879_.jpg",
			"isShow": false,
			"carousel-set": 10,
			"category":"Clothes"
		},{
			"item": "LG Washing Machine",
			"price": " $75.15 ",
			"productId": "190",
			"img": "https://images-na.ssl-images-amazon.com/images/I/81a3%2BQui91L._AC_SY879_.jpg",
			"isShow": false,
			"carousel-set": 11,
			"category":"Electronics"
		}]
	}
	async onTapArrow(number) {
		debugger;
		let productsList= this.state.FilterBy ? JSON.parse(JSON.stringify(this.state.products)) : JSON.parse(JSON.stringify(this.state.seletedProduct));
		let increment = Number(number.target.value);
		if (Number(number.target.value) > 0) {
			await this.setState({count: this.state.count+1});
		} else if (this.state.count>=0) {
			await this.setState({count: this.state.count-1});
		}
		let checkCount = this.state.FilterBy ? this.state.products.length : this.state.seletedProduct.length;
		if (this.state.count < 0) {
			await this.setState({count: 0});
		} else if ((this.state.count+this.state.viewport)> checkCount) {
			let updateCount = checkCount - this.state.viewport;
			await this.setState({count: updateCount});
		}
		let init = this.state.count;	
		//debugger;
		if (init <= (checkCount - this.state.viewport)) {
			let updateproducts = productsList.map((item)=>{
				if (increment> 0 && (this.state.count+this.state.viewport) <= (this.state.FilterBy ? this.state.products.length : this.state.seletedProduct.length)) {
					if(item["carousel-set"] === this.state.count) {
						item.isShow = false;
						item.css = "";
					} else if (item["carousel-set"] === (this.state.count+ this.state.viewport)) {
						item.isShow = true;
					} else if (item["carousel-set"] === ((this.state.count+ this.state.viewport)-1) && this.state.viewport ===3) {
						item.css="middleOne";
					} else if (item["carousel-set"] === this.state.count+1) {
						item.css="";
					}
				}
				else if (this.state.count>=0) {
					if((item["carousel-set"] === this.state.count+1)) {
						item.isShow = true;
					} else if (item["carousel-set"] === (this.state.viewport+this.state.count+1)) {
						item.isShow = false;
					} else if(item["carousel-set"] === this.state.count+2 && this.state.viewport ===3) {
						item.css="middleOne";
					} else if (item["carousel-set"] ===this.state.viewport+this.state.count) {
						item.css="";
					}
					
				}
				return item;
			});
			debugger;
			if (this.state.FilterBy) {
				this.setState({products: updateproducts});
			} else {
				this.setState({seletedProduct: updateproducts});
			}
		
		}
		
	}
	OnChangeViewPort=(event)=>{
		let viewportFilter =  this.state.FilterBy ? [...this.state.products] : [...this.state.seletedProduct]
		let updatedProductByViewport;
		let viewItems;
		if (event.target.value !=='select') {
			updatedProductByViewport = viewportFilter.map((item) => {
				if (item["carousel-set"] <= event.target.value) {
					item.isShow = true;
					item.css ="";
				} else { 
					item.isShow = false;
				}
				if(item["carousel-set"]===2 && Number(event.target.value) === 3) {
					item.css ="middleOne";
				}
				return item;
			});
			viewItems = Number(event.target.value);
		} else {
			viewItems =3;
			updatedProductByViewport = viewportFilter.map((item) => {
				if (item["carousel-set"] <= 3) {
					item.isShow = true;
					item.css ="";
				} else { 
					item.isShow = false;
				}
				if(item["carousel-set"]===2 && viewItems === 3) {
					item.css ="middleOne";
				}
				return item;
			});
		}
		
		if (this.state.FilterBy) {
			this.setState({products: updatedProductByViewport, viewport: viewItems, count: 0, select: Number(event.target.value)})
		} else {
			this.setState({seletedProduct: updatedProductByViewport, viewport: viewItems, count: 0, select: Number(event.target.value)})
		}
	

	}
	OnChangeupdateCarouselList=(event)=>{
		let updateProducts = JSON.parse(JSON.stringify(this.state.products));
		let count = 1;
		let selectedProducts;
		if (event.target.value !== 'select') {
			selectedProducts = updateProducts.filter((item)=> { 
				if (item.category === event.target.value) {
					item["carousel-set"] = count;
					if (item["carousel-set"] < 4) {
						item.isShow = true;
					} else{
						item.isShow = false;
					}
					if(item["carousel-set"]===2 && this.state.viewport === 3) {
						item.css ="middleOne";
					} else {
						item.css ="";
					}
					count++;
					return item;
				}
				});
			this.setState({seletedProduct: selectedProducts, FilterBy: false, count: 0,  viewport:3, select:'select'});
		} else {
			updateProducts = updateProducts.map((item) => {
				if (item["carousel-set"] <= 3) {
					item.isShow = true;
					item.css ="";
				} else { 
					item.isShow = false;
				}
				if(item["carousel-set"]===2) {
					item.css ="middleOne";
				}
				return item;
			});
			this.setState({seletedProduct: updateProducts, FilterBy: false, viewport:3, count: 0, select:'select'});
		}
		
	}
	unique =(data)=> {
		let obj ={},list=[];
		for(let i=0; i<data.length;i++) {
			if(obj[data[i].props.value] === undefined) {
				list.push(data[i]);
				obj[data[i].props.value] =1;
			}
		}
		return list;
	}
	
	render() {
		let listProducts = this.state.products.map((item)=> {
			return(
				item.isShow ? (<Showcards details = {item} viewport= {this.state.viewport}></Showcards>) : null
			)
		});
		let filterlist = !this.state.FilterBy ? this.state.seletedProduct.map((item)=> {
			return(
				item.isShow ? (<Showcards details = {item} viewport= {this.state.viewport}></Showcards>) : null
			)
		}) : null;
		let dropDownList = this.state.optionList.map((item)=> {
			return (
			<option 
			key={item} value={item}>{item}
			</option>)
		});
		return (
			<div>
				<label>Choose your carousel filter</label><select onChange={(event)=>this.OnChangeupdateCarouselList(event)}>
				<option value="select">Select One</option>
				{dropDownList}
				</select>
				<label>How many Items you want to see in viewport</label>
				<select  onChange={(event)=>this.OnChangeViewPort(event)}  id="selectId" value ={this.state.select}>
					<option value="select">Select One</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				<div className="main">
					<button className="leftArrow" value="-1" onClick={(event) => this.onTapArrow(event)}>&#10094;</button>
					<button className="rightArrow" value="1" onClick={(event) => this.onTapArrow(event)}>&#10095;</button>
					{this.state.FilterBy ? listProducts : filterlist}
				</div>
			</div>
			
		)
	}
}
export default Carosuel;