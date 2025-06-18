import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [usersList, setUsersList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (user.role === 'admin') {
      setLoading(true);
      fetch('/api/users') // ajuste para seu endpoint real
        .then(res => {
          if (!res.ok) throw new Error('Erro ao buscar usuários');
          return res.json();
        })
        .then((data: User[]) => {
          setUsersList(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message || 'Erro desconhecido');
        })
        .finally(() => setLoading(false));
    }
  }, [user, navigate]);

  if (!user) return null; // já redirecionou

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bem-vindo, {user.email}!</p>

      {user.role === 'user' && (
        <div>
          <h3>Seus dados:</h3>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}

      {user.role === 'admin' && (
        <div>
          <h3>Lista de usuários:</h3>
          {loading && <p>Carregando usuários...</p>}
          {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
          {!loading && !error && (
            <ul>
              {usersList.map(u => (
                <li key={u.id}>
                  {u.email} — {u.role}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;