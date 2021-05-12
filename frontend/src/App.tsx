import NavBar from "components/navbar";
import DataTable from "components/DataTable";
import Footer from "components/footer";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">taxa de sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">todas ass vendas</h5>
            <DonutChart />
          </div>

        </div>

        <div className="py-3">
          <h2 className="text-primary">todas as vendas</h2>
        </div>

        <DataTable />/

      </div>
      <Footer />
    </>
  );
}

export default App;
