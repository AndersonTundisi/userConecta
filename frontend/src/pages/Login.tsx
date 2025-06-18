import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { InputField } from '../components/InputField';
import '../styles/login.css';

export default function Login() {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) newErrors.email = 'E-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Formato de e-mail inválido.';

    if (!password) newErrors.password = 'Senha é obrigatória.';
    else if (password.length < 6) newErrors.password = 'Senha deve ter ao menos 6 caracteres.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const success = await login(email, password);

    if (success !== true) {
      alert('Erro ao fazer login.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login UserConecta</h2>
      <form onSubmit={handleSubmit} noValidate>
        <InputField
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={setEmail}
          error={errors.email ?? ''}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={setPassword}
          error={errors.password ?? ''}
          showTogglePassword
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <div className="login-footer">
        <a href="#forgot">Esqueceu a senha?</a>
      </div>
    </div>
  );
}