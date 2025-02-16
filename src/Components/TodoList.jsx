import { useMutation, useQuery } from "@tanstack/react-query";
import { addData, deleteData, fetchData, updateData } from "../app";
import { useState } from "react";

const TodoList = () => {
  // ^ fetch data
  const useFetchData = () => {
    const { data } = useQuery({
      queryKey: ["todo"],
      queryFn: fetchData,
    });
    return { data };
  };

  //^ add data
  const useAddData = () => {
    const { data, mutate } = useMutation({
      mutationFn: (payload) => {
        return addData(payload);
      },
    });
    return { data, mutate };
  };

  //^update
  const useUpdateData = () => {
    const { data, mutate } = useMutation({
      mutationFn: (payload) => {
        return updateData(payload);
      },
    });
    return { data, mutate };
  };

  //^delete
  const useDeleteData = () => {
    const { data, mutate } = useMutation({
      mutationFn: (payload) => {
        return deleteData(payload);
      },
    });
    return { data, mutate };
  };

  const { data } = useFetchData();
  const { data: newData, mutate } = useAddData();
  const { data: updateDataz, mutate: updateMutate } = useUpdateData();
  const { data: updateDatazz, mutate: deleteMutate } = useDeleteData();

  const [value, setValue] = useState();

  const onSubmit = () => {
    mutate({
      todo: value,
      completed: false,
      userId: 5,
    });
  };

  const onUpdate = (payload) => {
    console.log("payload", payload);
    updateMutate({ id: payload.id, completed: payload.completed });
  };

  const onDelete = (payload) => {
    console.log("data deleted" + payload.id);
    deleteMutate(payload);
  };

  console.log(data, "data");
  return (
    <div className=" mx-auto mt-5 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-grow rounded"
          placeholder="Enter todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>
          Add
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {data &&
          data.todos.map((item) => {
            return (
              <div key={item.id} className="p-4 border rounded shadow flex flex-col">
                <p className="text-lg font-semibold">{item.todo}</p>
                <p className="text-sm text-gray-600">Completed: {String(item.completed)}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded"
                    onClick={() => onUpdate({ completed: !item.completed, id: item.id })}
                  >
                    Update
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => onDelete({ id: item.id })}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
