import Route from '@ember/routing/route';

export default class PostItemRoute extends Route {

  async model(params) {
    const response = await fetch(`/api/${params.section}/${params.category}`);
    let parsed = [];
    if (response) {
      parsed = await response.json();
    }

    let filtered = parsed.filter((item) => item.id == params.id)
    delete filtered[0].id

    return filtered
  }
}
