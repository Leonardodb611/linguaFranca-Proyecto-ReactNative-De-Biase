import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("address.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists address (id integer primary key not null, lat real not null, lng real not null);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertAddress = (lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into address (lat, lng) VALUES ( ?, ?);",
        [lat, lng],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fetchAddress = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM address",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};