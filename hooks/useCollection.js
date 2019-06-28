import { useState, useEffect } from 'react';
import { useWebId } from '@solid/react';
import { load } from '../services/store';
// import $rdf from 'rdflib';

export default (store) => {
  const webId = useWebId();
  const [coll, setColl] = useState();

  useEffect(() => {
    if (!store || !webId) return;
    (async () => {
      const resp = await load(store, webId);
      // const fetcher = new $rdf.Fetcher(store);
      setColl(resp);
    })();
  }, [webId, store]);

  return coll;
};
