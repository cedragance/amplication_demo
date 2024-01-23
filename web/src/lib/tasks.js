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
  query tasks($where: TaskWhereInput, $orderBy: [TaskOrderByInput!]) {
    tasks(where: $where, orderBy: $orderBy) {
      uid
      completed
      createdAt
      id
      text
    }
  }
`;

export const getAll = async (uid) => {
  const result = (
    await client
      .query({
        query: GET_TASKS,
        variables: {
          where: { uid: { in: [uid] } },
          orderBy: { createdAt: "Asc" },
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
      .catch(() => null)
  )?.data.updateTask;

  if (!result) {
    return alert("Could not update task");
  }

  return result;
};

