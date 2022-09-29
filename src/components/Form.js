import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import moment from "moment";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [absent, setAbsent] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get("https://server-gold-dark.herokuapp.com/chats");
    setChats(res.data);
  };

  const setTime = () => {
    setCreated_at(moment().format("DD MMM, HH:mm"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://server-gold-dark.herokuapp.com/chat", {
        name,
        message,
        absent,
        created_at,
      });
      setName("");
      setMessage("");
      setCreated_at("");
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" className="w-full rounded py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Nama Anda" value={name} onChange={(e) => setName(e.target.value)} required />

        <textarea rows="3" className="w-full rounded py-2 px-4 mb-4 focus:ring-2 focus:ring-gold focus:outline-none" placeholder="Berikan Ucapan & Doa Anda" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

        <select className="w-full rounded py-2 px-4 mb-4 focus:ring-2 focus:ring-gold focus:outline-none" onChange={(e) => setAbsent(e.target.value)} required>
          <option value="" selected disabled>
            Pilih Kehadiran —
          </option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button onClick={setTime} className="bg-navy text-stone-200 py-2 px-6 rounded-lg">
          Kirim
        </button>
      </form>
      <hr className="my-4 border border-gold/70" />

      <ChatList data={chats} />
    </div>
  );
};

export default Form;
