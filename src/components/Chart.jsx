import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Chart({ products }) {
    
    if (!products || products.length === 0) {
        return <div className='flex justify-center text-white text-3xl font-serif font-bold'>Loading data...</div>;
    }

    const categories = products?.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(categories),
        datasets: [
            {
                label: 'Number of Products',
                data: Object.values(categories),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Product Count by Category',
            },
        },
    };

    return (
        <div className='flex justify-center text-white text-3xl font-serif font-bold'>
            <div className="w-full max-w-4xl">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
}

export default Chart;