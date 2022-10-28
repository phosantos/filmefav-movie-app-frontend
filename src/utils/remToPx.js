function remToPx(rem) {
  const { fontSize } = getComputedStyle(document.documentElement);

  return rem * Number(fontSize.replace('px', ''));
}

export default remToPx;
