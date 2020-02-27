export const fetchData = async () => {
  try {
    const response = await fetch("https://swapi.co/api/planets/");
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.log(e);
  }
};
export const fetchDataUrl = async (url) => {
  try {
    const response = await fetch(url);    
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};