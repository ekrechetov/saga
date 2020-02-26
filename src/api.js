export const fetchData = async () => {
  try {
    const response = await fetch("https://swapi.co/api/planets/");
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (e) {
    console.log(e);
  }
};