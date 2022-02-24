import Route from '@ember/routing/route';

export default class ForumsStartupsRoute extends Route {
  async model() {
    const response = await fetch('/api/forums/startups');
    let parsed = [];
    if (response) {
      parsed = await response.json();
      parsed.sort((a, b) => a.category > b.category ? 1 : -1);
    }

    return {
      posts: parsed,
    };
  }
}
