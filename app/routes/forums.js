import Route from '@ember/routing/route';

export default class ForumsRoute extends Route {
  async model() {
    const response = await fetch('/api/forums');
    let parsed = []
    if (response) {
      parsed = await response.json();
    }

    return {
      posts: parsed
    };
  }
}
