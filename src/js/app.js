new Vue({
	el: '#app',
	data: {
		isShowingCart: false,
		filterListing: '',
		products: [
			{
				id:1,
				name: 'Michy Batshuayi',
				description: 'Good Player',
				price: 3999,
				inStock: 7,
				image: 'images/bat1.jpg',
				type: 'Striker'
			},
			{
				id:2,
				name: 'Danny Welbeck',
				description: 'God Player',
				price: 9999,
				inStock: 3,
				image: 'images/bat2.jpg',
				type: 'Striker'
			},
			{
				id:3,
				name: 'Phil Jones',
				description: 'Strong Player',
				price: 4990,
				inStock: 25,
				image: 'images/bat3.jpg',
				type: 'Defender'
			},
			{
				id:4,
				name: 'Loris Karius',
				description: 'Trash Player',
				price: 199,
				inStock: 43,
				image: 'images/bat4.jpg',
				type: 'Goalkeeper'
			},
			{
				id:5,
				name: 'Harry Kane',
				description: 'Wonderful Player',
				price: 5200,
				inStock: 10,
				image: 'images/bat5.jpg',
				type: 'Striker'
			},
			{
				id:6,
				name: 'Patrice Evra ',
				description: 'Kung fu Player',
				price: 799,
				inStock: 18,
				image: 'images/bat6.jpg',
				type: 'Defender'
			},
			{
				id:7,
				name: 'Dani Alves',
				description: 'Banana Player',
				price: 560,
				inStock: 79,
				image: 'images/bat7.jpg',
				type: 'Goalkeeper'
			},
			{
				id:8,
				name: 'Lord Bendtner',
				description: 'Everything Player',
				price: 5200,
				inStock: 10,
				image: 'images/bat8.jpg',
				type: 'Striker'
			},
			{
				id:9,
				name: 'Patrice Evra ',
				description: 'Kung fu Player',
				price: 799,
				inStock: 18,
				image: 'images/bat9.jpg',
				type: 'Defender'
			},
		],
		cart: {
			items: []
		}
	},
	methods: {
		addProductToCart: function(product) {
			// console.log(product)
			let cartItem = this.getCartItem(product)
			console.log(cartItem)
			if (cartItem == null) {
				this.cart.items.push({
					product: product,
					quantity:1
				})
			} else {
				cartItem.quantity++
			}
			product.inStock--
		},
		getCartItem: function(product) {
			for (let i=0; i < this.cart.items.length; i++) {
				if (this.cart.items[i].product.id === product.id) {
					return this.cart.items[i]
				}
			}
			return null
		},
		increase: function(item) {
			item.quantity++
			item.product.inStock--
		},
		decrease:function(item) {
			item.quantity--
			item.product.inStock++
			if (item.quantity==0) {
				let index = this.cart.items.indexOf(item)
				if (index !== -1) {
					this.cart.item.splice(index,1)
				}
			}
		}
	},
	computed: {
		cartTotal: function() {
			let total = 0
			this.cart.items.forEach(function(item) {
				total += item.quantity * item.product.price
			})
			return total
		},
		filterProducts() {
			return this.products.filter(product=> {
				return product.type.toLowerCase().indexOf(this.filterListing.toLowerCase()) > -1
			})
		},
		tax() {
			let tax = this.cartTotal * 0.07
			return tax
		},
		grandTotal() {
			return parseFloat(this.cartTotal) + parseFloat(this.tax)
		}
	},
	filters: {
		currency: function(value) {
			return value.toLocaleString()
		}
	}
})