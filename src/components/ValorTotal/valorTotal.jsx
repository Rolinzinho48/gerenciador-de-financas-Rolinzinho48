import {PieChart, Pie, Sector, Cell, ResponsiveContainer} from 'recharts'

function ValorTotal({entrada,saida}){

    const data = [
        { name: 'Group A', value: parseInt(entrada) },
        { name: 'Group B', value: parseInt(saida) },
      ];

      const COLORS = ['#03B898', '#d31d10'];

    return(
        <div className="valorTotal">
            <span>Saldo: {entrada-saida}</span>
            <PieChart width={400} height={200} onMouseEnter={()=>this.onPieEnter}>
                <Pie
                data={data}
                cx={175}
                cy={100}
                innerRadius={50}
                outerRadius={80}      
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
            </PieChart>
            <section className="containerGeral">
                <section className="containerEntrada">
                    <div></div>
                    <span>Entrada</span>
                </section>
                <section className="containerSaida">
                    <div></div>
                    <span>Despesa</span>
                </section>
            </section>

        </div>
        
    )
}

export default ValorTotal