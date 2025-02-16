
export const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/todos?limit=3");
  const data = response.json();
  return data;
};

export const addData = async (payload) => {
  const response = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
  });
  const data = response.json();
  return data;
};


export const updateData = async (payload) => {
    const response = await fetch(`https://dummyjson.com/todos/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify({completed: payload.completed}),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    const data = response.json();
    return data;
  };

  export const deleteData = async (payload) => {
    const response = await fetch(`https://dummyjson.com/todos/${payload.id}`, {
      method: "DELETE",
    });
    const data = response.json();
    return data;
  };