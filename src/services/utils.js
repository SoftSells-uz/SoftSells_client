import { ref, set } from "firebase/database";
import { database } from "./firebase";
import axios from "axios";

export const getStringTime = (today) => {
  return (
    `${today.getFullYear()}` +
    "-" +
    `${today.getMonth() + 1}` +
    "-" +
    `${today.getDate()}`
  );
};

export async function countPageVisitors(pageName, name) {
  const res = await axios.get(process.env.NEXT_PUBLIC_GEO_API);
  set(
    ref(
      database,
      "pages/" + `${pageName}/` + res.data.IPv4?.toString().replaceAll(".", "")
    ),
    {
      time: getStringTime(new Date()),
      name: name,
    }
  );
}

export function addOrderNotify(uid) {
  set(ref(database, "/orders/" + uid), {
    isNew: 1,
    createdAt: new Date().toISOString(),
    title: "Yangi buyurtma qabul qilindi!",
    type: "new_message",
  });
}

export function addRequestNotify(uid) {
  set(ref(database, "/requests/" + uid), {
    isNew: 1,
    createdAt: new Date().toISOString(),
    title: "To'lov uchun yangi so'rov qabul qilindi!",
    type: "new_message",
  });
}

export function disableOrderNotify(uid) {
  set(ref(database, "/orders/" + uid), {
    isNew: 0,
  });
}

export function disableRequestNotify(uid) {
  set(ref(database, "/requests/" + uid), {
    isNew: 0,
  });
}
Footer;
