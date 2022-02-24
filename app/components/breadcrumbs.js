import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class breadcrumbs extends Component {
  @service router;

  get getCurrentRouteName() {
    return this.getProperName(this.router.currentRouteName);
  }

  get getParentRouteName() {
    return this.router.currentRoute.parent.name;
  }

  get getProperParentRouteName() {
    return this.getProperName(this.router.currentRoute.parent.name);
  }

  get isIndexPage() {
    return this.router.currentRouteName === 'index';
  }

  get isFirstPage() {
    return this.router.currentRoute.localName === 'index';
  }

  getProperName(routeName) {
    switch (routeName) {
      case 'news.index':
        return 'News';
      case 'news':
        return 'News';
      case 'news.business':
        return 'Business';
      case 'business':
        return 'Business';
      case 'news.culture':
        return 'Culture';
      case 'culture':
        return 'Culture';
      case 'news.design':
        return 'Design';
      case 'design':
        return 'Design';

      case 'blogs.index':
        return 'Blog';
      case 'blogs':
        return 'Blog';
      case 'blogs.social':
        return 'Social';
      case 'social':
        return 'Social';
      case 'blogs.startups':
        return 'Startups';
      case 'startups':
        return 'Startups';

      case 'forums.index':
        return 'Forum';
      case 'forums':
        return 'Forum';
      case 'forums.ideas':
        return 'Ideas';
      case 'ideas':
        return 'Ideas';
      case 'forums.technologies':
        return 'Technologies';
      case 'technologies':
        return 'Technologies';
      case 'forums.startups':
        return 'Startups';
      case 'startups':
        return 'Startups';

      default:
        return routeName;
    }
  }
}
