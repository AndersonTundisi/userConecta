import React, { useState } from 'react';

interface InputFieldProps {
  label?: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  error?: string;
  showTogglePassword?: boolean;
}

export function InputField({
  label,
  type,
  value,
  placeholder,
  onChange,
  error,
  showTogglePassword = false,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showTogglePassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-field" style={{ position: 'relative', marginBottom: '1rem' }}>
      {label && <label>{label}</label>}
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className={error ? 'input-error' : ''}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
        style={{ paddingRight: showTogglePassword ? '2rem' : undefined }}
      />
      {showTogglePassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          style={{
            position: 'absolute',
            right: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.1rem',
          }}
        >
          {showPassword ? '🙈' : '👁️'}
        </button>
      )}
      {error && <small style={{ color: 'red' }}>{error}</small>}
    </div>
  );
}
export {};