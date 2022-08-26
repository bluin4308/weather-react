export default async function fetchWrapper(location) {
  const response = await fetch(
    `/weather?address=${location}`
  );
  const json = await response.json();
  return json;
}
