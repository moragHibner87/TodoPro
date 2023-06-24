import axios from "axios"; 

const getAll = async (url) => {
    try{
        const resp = await axios.get(url);
        return resp.data;
    } catch(error){
        console.error('Error getting data:', error);
        throw error;
    }
}

const getById = async (url, id) => {
    try{
        const resp = await axios.get(`${url}/${id}`);
        return resp.data;
    } catch(error){
        console.error(`Error getting data for ID ${id}:`, error);
        throw error;
    }
}

const addItem = async (url, obj) => {
  try {
    const response = await axios.post(url, obj);
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

const updateItem = async (url, id, obj) => {
  try {
    const response = await axios.put(`${url}/${id}`, obj);
    return response.data;
  } catch (error) {
    console.error(`Error updating item with ID ${id}:`, error);
    throw error;
  }
};

const patchItem = async (url, id, obj) => {
    try {
      const response = await axios.patch(`${url}/${id}`, obj);
      return response.data;
    } catch (error) {
      console.error(`Error patching item with ID ${id}:`, error);
      throw error;
    }
  };

const deleteItem = async (url, id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting item with ID ${id}:`, error);
    throw error;
  }
};

export { getAll, getById, addItem, updateItem, deleteItem, patchItem };
