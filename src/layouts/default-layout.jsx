import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export { DefaultLayout };