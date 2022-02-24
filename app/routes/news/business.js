import Route from '@ember/routing/route';

export default class NewsBusinessRoute extends Route {

  async model() {
    const response = await fetch('/api/news/business');
    let parsed = await response.json();
    console.log(parsed)
    return {
      posts: parsed
    };
  }
}
