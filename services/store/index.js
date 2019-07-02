import $rdf from 'rdflib';
import {
  SOLID,
  BOOKMARK,
  PIM,
  DC,
  RDF,
} from '../../namespaces';

export const init = async (store, webId) => {
  const profile = store.sym(webId);
  const fetcher = new $rdf.Fetcher(store, {});
  const typeIndex = store.any(profile, SOLID('publicTypeIndex'), undefined, undefined);
  await fetcher.load(typeIndex);
  // const registry = store.any(undefined, SOLID('forClass'), BOOKMARK('Bookmark'), undefined);
  // console.log('PORRA', registry);
  // const registry = store.any(undefined, SOLID('forClass'), BOOKMARK('Bookmark'), undefined);
  // if (registry) {
  //   return registry;
  // }
  const storage = store.any(profile, PIM('storage'), undefined, undefined);
  const name = `${storage.value}public/mtg-collection.ttl`;
  const collIndex = $rdf.sym(`${typeIndex.value}#mtg-collection`);
  const insertions = [
    $rdf.st(typeIndex, DC('references'), collIndex, typeIndex),
    $rdf.st(collIndex, RDF('type'), SOLID('TypeRegistration'), collIndex.doc()),
    $rdf.st(collIndex, SOLID('forClass'), RDF('List'), collIndex.doc()),
    $rdf.st(collIndex, SOLID('instance'), $rdf.sym(name), collIndex.doc()),
  ];
  const updater = new $rdf.UpdateManager(store);
  updater.update([], insertions, () => {});
  return store.any(collIndex, SOLID('instance'), undefined, undefined);
};

/**
 * Load collection from Solid
 * @param {$rdf.IndexedFormula} store Store
 * @param {string} webId webId
 */
export const load = async (store, webId) => {
  await init(store, webId);
};
