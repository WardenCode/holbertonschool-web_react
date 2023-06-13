import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const pageList1 = List(page1);
  const pageList2 = List(page2);

  return pageList1.merge(pageList2);
}

export function mergeElements(page1, page2) {
  const pageMap1 = Map(page1);
  const pageMap2 = Map(page2);

  return pageMap1.merge(pageMap2);
}
