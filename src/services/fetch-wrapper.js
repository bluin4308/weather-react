export default async function fetchWrapper(location) {
  const response = await fetch(
    `http://localhost:5000/weather?address=${location}`
  );
  const json = await response.json();
  return json;
}
