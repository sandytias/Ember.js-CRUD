import Route from '@ember/routing/route';

export default class ProductDetailRoute extends Route {
  model() {
    let result = {
      id: 1,
      name: 'Siemens M-55',
      description: 'Handphone polyphonic',
      purchasePrice: 1500000,
      sellPrice: 1750000,
      isPolyphonic: true,
    };
    return result;
  }
}
