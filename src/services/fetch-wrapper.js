export default async function fetchWrapper(location) {
  const response = await fetch(
    // `http://localhost:4000/weather?address=${location}`
    `/weather?address=${location}`
  );
  const json = await response.json();
  return json;
}
