# Counter App (Next.js + Zustand)

Este proyecto es una aplicación simple de contador construida con Next.js, Zustand y TailwindCSS.

Permite incrementar un contador con reglas condicionales (par / impar), resetear el valor y visualizar el estado global desde múltiples componentes.

---

## 🚀 Tecnologías

- Next.js
- React
- Zustand
- Tailwind CSS

---

## 📦 Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPO>
```

Entrar al proyecto:

```bash
cd <NOMBRE_DEL_PROYECTO>
```

Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecución en desarrollo

```bash
npm run dev
```

La app se ejecuta en:

http://localhost:3000

---

## 🧠 Funcionalidad

- Incremento solo si el número es par  
- Incremento solo si el número es impar  
- Reset del contador  
- Estado global compartido con Zustand  
- Componente auxiliar que interpreta el estado  

---

## 📁 Estructura básica

```
app/
  page.tsx
  analyzer/
store/
components/
```

---

## ✨ Proyecto de práctica frontend

Aplicación creada para practicar estado global, UI y arquitectura en Next.js.
