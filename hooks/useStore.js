import { useEffect, useState } from 'react';
import $rdf from 'rdflib';
import { useWebId } from '@solid/react';

export default () => {
  const webId = useWebId();
  const [store, setStore] = useState();

  useEffect(() => {
    if (!webId) return;
    const graph = $rdf.graph();
    const profile = graph.sym(webId);
    const fetcher = new $rdf.Fetcher(graph, {});
    (async () => {
      await fetcher.load(profile.doc());
      setStore(graph);
    })();
  }, [webId]);

  return store;
};
