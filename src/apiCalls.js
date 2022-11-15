const getUrls = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/urls');
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }
    const data = await response.json();
    console.log(data)
    return data;
  }
  catch (error) {
    console.log(error.message)
  }
};



export { getUrls }