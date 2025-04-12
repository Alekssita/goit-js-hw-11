import axios from 'axios';

const API_KEY = '49718330-58801d0a59045377f458b76fd'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
const params = {
  key: API_KEY,
  q: query,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12, // Параметр для кількості результатів на сторінку
};
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}