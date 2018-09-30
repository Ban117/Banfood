import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = '22de6ab78bfc5ee2756c45aaccbd8ad7';
    // Could use fetch but yeah
    // This'll work on all browsers
    // at least it automatically returns to JSON
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
  
}