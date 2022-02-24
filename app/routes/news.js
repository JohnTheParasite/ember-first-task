import Route from '@ember/routing/route';

export default class NewsRoute extends Route {

  async model() {
    const response = await fetch('/api/news');
    let parsed = []
    if (response) {
      parsed = await response.json();
    }

    return {
      posts: parsed
    };
  }
}
