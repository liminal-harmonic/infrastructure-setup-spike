export async function loader() {
  return { message: 'Hello, world!' }
}

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return <div>Home</div>
}
