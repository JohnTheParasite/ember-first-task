import Route from '@ember/routing/route';

export default class NewsDesignRoute extends Route {
  async model() {
    const response = await fetch('/api/news/design');
    let parsed = []
    if (response) {
      parsed = await response.json();
    }

    return {
      posts: parsed
    };
  }
}
