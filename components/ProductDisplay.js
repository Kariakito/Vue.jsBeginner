app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="product-display">

    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img v-bind:src="image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
         <!-- solution -->
         <p>{{ sale }}</p>
         <!-- solution -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          class="color-circle" 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          :style="{ backgroundColor: variant.color }">
        </div>

        <button 
        class="button" 
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock" 
        v-on:click="addToCart">
        Add to Cart
        </button>

      
      <button class="button" @click="deleteToCart">Delete from Cart</button>
      </div>
    </div>
    <review-list :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: [ '50% algodon', '30% lana', '20% polyester' ],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 20, onSale: false },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: true },
        ],
        reviews: [],
        tabs: ['review-form', 'review-list'],
      activeTab: 'review-form'
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
        this.selectedVariant = index
    },
    addReview(review) {
        this.reviews.push(review)
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    sale() {
        return this.brand + ' ' + this.variants[this.selectedVariant].onSale + ' is on sale'
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }
         return 2.99
    },
}
})