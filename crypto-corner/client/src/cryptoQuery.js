import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import type {ChartData, ChaerOptions} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function cryptoQuery() {
    const [cryptos, setCrypto] = useState()<Crypto[] | null>(null);
    const [selected, setSelected] = useState()<Crypto | null>();
    const [data, setData] = useState<ChartData<'line'>>();
    const [options, setOptions] = useState<ChartOptions<'line'>>({
        responsive: true,
        plugins: {
            legend: {
            position: 'top' as const,
            },
            title: {
            display: true,
            text: 'Chart.js Line Chart',
            },
        },
    });

    

    return (
        <div>
            CRYPTOS
        </div>
        {data ? <Line options={options data={data}}/> : null}
    )
}