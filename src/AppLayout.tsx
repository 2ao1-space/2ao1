import Index from "./Pages/Index";
import Header from "./Pages/Header";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Index />
        </div>
      </div>
    </div>
  );
}
