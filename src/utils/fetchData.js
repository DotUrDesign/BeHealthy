export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '2961fc4ca5mshdecf72d15290a94p1d6647jsna34af3f1dbc3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2961fc4ca5mshdecf72d15290a94p1d6647jsna34af3f1dbc3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = response.json();
    return data;
}