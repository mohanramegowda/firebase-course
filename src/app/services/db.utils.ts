export function converSnaps<T>(results) {
  return <T[]>results.docs.map((snap) => {
    return {
      id: snap.id,
      ...(<T>snap.data()),
    };
  });
}
