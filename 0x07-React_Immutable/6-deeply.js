import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const pageMap1 = Map(page1);
  const pageMap2 = Map(page2);

  return pageMap1.mergeDeep(pageMap2);
}
