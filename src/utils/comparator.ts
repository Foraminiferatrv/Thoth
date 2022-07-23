function comparator(elementA: number, elementB: number): number {
  if (elementA < elementB) {
    return -1;
  }
  if (elementA > elementB) {
    return 1;
  }
  return 0;
}

export default comparator;