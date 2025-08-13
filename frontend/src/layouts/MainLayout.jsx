import NavigationMenu from "../components/NavigationMenu";
import Header from "../components/Header";

function MainLayout({ children }) {



  return (
    <div className="min-h-screen bg-slate-50 flex">
      <NavigationMenu />
      <div className="flex-1 flex flex-col pl-64">
        {/* Added pl-64 to offset the fixed sidebar */}
        <div className="px-6 py-4">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
