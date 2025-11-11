import React, { useState, useEffect } from 'react';
import api from './api';

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => { loadUsers(); }, []);

  async function loadUsers() {
    const res = await api.get('/users');
    setUsers(res || []);
  }

  async function addUser(e) {
    e.preventDefault();
    await api.post('/users', { name, email });
    setName(''); setEmail('');
    loadUsers();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>MERN Deploy Demo</h1>
      <form onSubmit={addUser}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {users.map(u => <li key={u._id}>{u.name} — {u.email}</li>)}
      </ul>
    </div>
  );
}
