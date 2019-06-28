import { useState, useEffect } from 'react';
import { useWebId } from '@solid/react';
// import $rdf from 'rdflib';

const loadCollection = async () => [];

export default (store) => {
  const webId = useWebId();
  const [coll, setColl] = useState();

  useEffect(() => {
    if (!store || !webId) return;
    (async () => {
      const resp = await loadCollection();
      // const fetcher = new $rdf.Fetcher(store);
      setColl(resp);
    })();
  }, [webId, store]);

  return coll;
};
