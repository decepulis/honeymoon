export default async function getComments() {
  const response = await fetch(`${process.env.API_ROUTE}/comments`);
  return await response.json();
}
