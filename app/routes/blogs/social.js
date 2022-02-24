import Route from '@ember/routing/route';

export default class BlogsSocialRoute extends Route {
  async model() {
    const response = await fetch('/api/blogs/social');
    let parsed = [];
    if (response) {
      parsed = await response.json();
      parsed.sort((a, b) => (a.date < b.date ? 1 : -1));
    }

    return {
      posts: parsed,
    };
  }
}
