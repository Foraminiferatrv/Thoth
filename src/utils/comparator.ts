function comparator(elementA: any, elementB: any): number {
  if (elementA < elementB) {
    return -1;
  }
  if (elementA > elementB) {
    return 1;
  }
  return 0;
}

export default comparator;