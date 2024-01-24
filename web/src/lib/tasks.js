// import qs from "qs";
// import { createUrl, get, patch, post } from "./http";

import { gql, client } from "./apollo";

/*
export const create = async (text, uid) => {
  const result = (
    await post(createUrl("/api/tasks"), {
      completed: false,
      text,
      uid: uid,
    }).catch(() => null)
  )?.data;

  if (!result) {
    return alert("Could not create task");
  }

  return result;
};

export const getAll = async (uid) => {
  const query = qs.stringify({
    where: { uid: uid },
    orderBy: { createdAt: "asc" },
  });
  const result = (await get(createUrl(`/api/tasks?${query}`)).catch(() => null))
    ?.data;

  if (!result) {
    alert("Could not get tasks");
    return [];
  }

  return result;
};

export const update = async (task) => {
  const result = (
    await patch(createUrl(`/api/tasks/${task.id}`), {
      completed: !task.completed,
    }).catch(() => null)
  )?.data;

  if (!result) {
    return alert("Could not update task");
  }

  return result;
};
*/

const CREATE_TASK = gql`
  mutation createTask($data: TaskCreateInput!) {
    createTask(data: $data) {
      uid
      completed
      createdAt
      id
      text
    }
  }
`;

export const create = async (text, uid) => {
  const result = (
    await client
      .mutate({
        mutation: CREATE_TASK,
        variables: {
          data: {
            completed: false,
            text,
            uid,
          },
        },
      })
      .catch((error) => console.log(error))
  )?.data.createTask;

  if (!result) {
    return alert("Could not create task");
  }

  return result;
};

const GET_TASKS = gql`
  query tasks($where: TaskWhereInput, $orderBy: [TaskOrderByInput!], $skip: Float, $take: Float) {
    tasks(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
      uid
      completed
      createdAt
      id
      text
    }
  }
`;

export const getAllOrderedAndPaged = async (uid, orderBy, skip, take) => {
  const result = (
    await client
      .query({
        query: GET_TASKS,
        variables: {
          where: { { user { id } }: { in: [uid] } },
          orderBy: orderBy,
          skip: skip,
          take: take,
        },
      })
      .catch((error) => console.log(error))
  )?.data.tasks;

  if (!result) {
    alert("Could not get tasks");
    return [];
  }

  return result;
};

export const getAll = async (uid) => {
  return getAllOrderedAndPaged(uid, {}, 2, 5);
};

const UPDATE_TASK = gql`
  mutation updateTask($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
    updateTask(data: $data, where: $where) {
      uid
      completed
      createdAt
      id
      text
    }
  }
`;

export const update = async (task) => {
  const result = (
    await client
      .mutate({
        mutation: UPDATE_TASK,
        variables: {
          data: {
            completed: !task.completed,
          },
          where: {
            id: task.id,
          },
        },
      })
      .catch((error) => console.log(error))
  )?.data.updateTask;

  if (!result) {
    return alert("Could not update task");
  }

  return result;
};

const DELETE_TASK = gql`
  mutation deleteTask($where: TaskWhereUniqueInput!) {
    deleteTask(where: $where) {
      uid
      completed
      createdAt
      id
      text
    }
  }
`;

export const deleteTask = async (task) => {
  const result = (
    await client
      .mutate({
        mutation: DELETE_TASK,
        variables: {
          where: {
            id: task.id,
          },
        },
      })
      .catch((error) => console.log(error))
  )?.data.deleteTask;

  if (!result) {
    return alert("Could not delete task");
  }

  return result;
};
