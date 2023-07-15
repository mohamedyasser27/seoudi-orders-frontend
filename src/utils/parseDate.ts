function getTime(dateString: any): number {
  return new Date(dateString).getTime();
}
function getLocaleDateString(dateString: any): string {
  return new Date(dateString).toLocaleDateString();
}

export { getTime, getLocaleDateString };
