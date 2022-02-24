import Route from '@ember/routing/route';

export default class BlogsRoute extends Route {
  async model() {
    const response = await fetch('/api/blogs/');
    let parsed = []
    if (response) {
      parsed = await response.json();
    }

    return {
      posts: parsed
    };
  }
}
